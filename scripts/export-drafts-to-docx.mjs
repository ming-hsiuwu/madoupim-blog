// 將所有 draft 文章匯出成 .docx，給品牌主校稿用。
// 流程：起 dev server → 帶預覽 cookie 抓每篇文章 HTML → 抽 <article> → 轉 docx。
// 用法：node scripts/export-drafts-to-docx.mjs

import { spawn } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import HTMLtoDOCX from "html-to-docx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outDir = resolve(projectRoot, "drafts-export");

const PORT = 3789;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const COOKIE = "madoupim_preview=granted";

// 從 src/lib/articles.ts 解析出所有 draft slug，避免手動同步。
async function getDraftSlugs() {
  const src = await readFile(
    resolve(projectRoot, "src/lib/articles.ts"),
    "utf8",
  );
  // 粗略 parser：找出所有 `slug: "xxx"` 後面緊接 (隔幾行) 出現 `draft: true` 的那一組
  const slugs = [];
  const blockRegex = /slug:\s*"([^"]+)"[\s\S]*?(?=slug:\s*"|\];)/g;
  let m;
  while ((m = blockRegex.exec(src)) !== null) {
    const block = m[0];
    if (/draft:\s*true/.test(block)) {
      slugs.push(m[1]);
    }
  }
  return slugs;
}

function startDevServer() {
  console.log(`→ 啟動 dev server (port ${PORT})…`);
  const proc = spawn("npx", ["next", "dev", "-p", String(PORT)], {
    cwd: projectRoot,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env },
  });
  proc.stdout.on("data", (d) => process.stdout.write(`[dev] ${d}`));
  proc.stderr.on("data", (d) => process.stderr.write(`[dev] ${d}`));
  return proc;
}

async function waitForReady(timeoutMs = 180000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(`${ORIGIN}/`, { signal: AbortSignal.timeout(2000) });
      // 任何 HTTP 回應（含 404、redirect）都代表 server 已開好 socket
      if (r.status > 0) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Dev server 未在 ${timeoutMs / 1000} 秒內就緒`);
}

// 從整頁 HTML 中抽出 <article>…</article>（包含 header、正文、related products、faq、sources、related articles）
function extractArticleHtml(html) {
  const start = html.indexOf("<article");
  if (start === -1) throw new Error("找不到 <article> 區段");
  // 用簡單的標籤計數找出對應的 </article>
  let depth = 0;
  let i = start;
  const openRe = /<article\b/gi;
  const closeRe = /<\/article\s*>/gi;
  // 用混合 scan
  let pos = start;
  while (pos < html.length) {
    openRe.lastIndex = pos;
    closeRe.lastIndex = pos;
    const o = openRe.exec(html);
    const c = closeRe.exec(html);
    if (!c) break;
    if (o && o.index < c.index) {
      depth++;
      pos = o.index + 1;
    } else {
      depth--;
      if (depth === 0) {
        return html.slice(start, c.index + c[0].length);
      }
      pos = c.index + 1;
    }
  }
  throw new Error("無法配對 <article> 結束標籤");
}

// 清理 Next.js 注入的不必要區塊（圖片佔位、style、script、svg icon）
function sanitize(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sclassName="[^"]*"/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\sdata-[a-z0-9-]+="[^"]*"/gi, "");
}

async function fetchArticleHtml(lang, slug) {
  const url = `${ORIGIN}/${lang}/articles/${slug}`;
  const r = await fetch(url, { headers: { Cookie: COOKIE } });
  if (!r.ok) throw new Error(`fetch ${url} failed: ${r.status}`);
  const html = await r.text();
  if (html.includes("審稿密碼") || html.includes("PasswordGate")) {
    throw new Error(`fetch ${url} 仍卡在密碼頁，cookie 設定可能失效`);
  }
  return html;
}

async function fetchArticleMeta(lang, slug) {
  // 直接從 articles.ts 拿 title
  const src = await readFile(
    resolve(projectRoot, "src/lib/articles.ts"),
    "utf8",
  );
  const re = new RegExp(
    `slug:\\s*"${slug}"[\\s\\S]*?title:\\s*"([^"]+)"[\\s\\S]*?excerpt:\\s*"([^"]+)"`,
  );
  const m = re.exec(src);
  return {
    title: m?.[1] ?? slug,
    excerpt: m?.[2] ?? "",
  };
}

async function exportOne(lang, slug) {
  const meta = await fetchArticleMeta(lang, slug);
  console.log(`→ 抓取 ${slug}`);
  const fullHtml = await fetchArticleHtml(lang, slug);
  const articleHtml = sanitize(extractArticleHtml(fullHtml));

  const docHtml = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${meta.title}</title></head>
<body>
<h1>${meta.title}</h1>
<p><em>${meta.excerpt}</em></p>
<hr/>
${articleHtml}
<hr/>
<p style="font-size:11px;color:#666">— 此文件由 madoupim-blog 草稿匯出工具產生，僅供品牌主校稿用，請勿外流。</p>
</body></html>`;

  const buffer = await HTMLtoDOCX(docHtml, null, {
    table: { row: { cantSplit: true } },
    footer: false,
    pageNumber: false,
    font: "Microsoft JhengHei",
    fontSize: 22, // 11pt (half-points)
    title: meta.title,
    creator: "PIM 柚一村食農誌",
  });

  const outPath = resolve(outDir, `${slug}.docx`);
  await writeFile(outPath, buffer);
  console.log(`  ✓ 寫入 ${outPath}`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const slugs = await getDraftSlugs();
  if (slugs.length === 0) {
    console.log("沒有 draft 文章，結束。");
    return;
  }
  console.log(`偵測到 ${slugs.length} 篇 draft：`);
  slugs.forEach((s) => console.log(`  - ${s}`));

  const dev = startDevServer();
  let exitCode = 0;
  try {
    await waitForReady();
    console.log("→ Dev server 就緒，開始抓取與轉檔…\n");
    for (const slug of slugs) {
      try {
        await exportOne("zh", slug);
      } catch (err) {
        console.error(`  ✗ ${slug} 失敗：${err.message}`);
        exitCode = 1;
      }
    }
  } finally {
    console.log("\n→ 關閉 dev server…");
    dev.kill("SIGTERM");
    await new Promise((r) => setTimeout(r, 500));
    if (!dev.killed) dev.kill("SIGKILL");
  }
  console.log(`\n完成。檔案輸出於：${outDir}`);
  process.exit(exitCode);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

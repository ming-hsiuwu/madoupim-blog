---
name: 草稿匯出 Word 校稿流程
description: 把 draft 文章匯出成 .docx 給品牌主校稿的本地工具與用法
type: project
---

## 用途
品牌主（PIM 柚一村）要校稿時，把所有 `draft: true` 文章匯出成 .docx 檔，一篇一份，方便分篇回饋。

## 用法
```bash
npm run export-drafts
```

工具會：
1. 從 `src/lib/articles.ts` 自動掃出所有 `draft: true` 的文章 slug
2. 起 Next.js dev server (port **3789**，避開使用者其他專案常用的 3000/3456)
3. 帶預覽 cookie `madoupim_preview=granted` 抓每篇文章 SSR HTML
4. 抽 `<article>` 區塊 → `html-to-docx` 轉檔 → 寫入 `drafts-export/<slug>.docx`
5. 跑完自動關 dev server

## 關鍵檔案
- 腳本：`scripts/export-drafts-to-docx.mjs`
- 輸出：`drafts-export/`（已 gitignore，不入版控）
- 套件：`html-to-docx` (devDependencies)

## 含內容
標題、摘要、分類、日期、TOC、標籤、正文（含表格/清單/引用塊）、相關商品 CTA、FAQ、參考來源、相關文章。封面色卡會變成空白（CSS 渲染無法轉檔），不影響校稿。

## 未來新增 draft 文章
不用改腳本，重跑 `npm run export-drafts` 即可，draft slug 是動態解析的。

**Why:** 品牌主習慣在 Word 上做修訂註記，把 TSX 草稿轉成 docx 是最低摩擦的校稿方式。
**How to apply:** 每次品牌主要校稿前跑一次，把 `drafts-export/*.docx` 直接寄出或丟雲端硬碟。

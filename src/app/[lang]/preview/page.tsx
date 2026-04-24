import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PasswordGate } from "@/components/PasswordGate";
import { PreviewLogout } from "@/components/PreviewLogout";
import { formatDate } from "@/components/ArticleCard";
import { getArticlesByLang, getCategoriesByLang } from "@/lib/articles";
import { isLang, type Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "審稿專區",
  description: "僅供品牌主與受邀審稿人查看尚未公開的草稿文章。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
};

export default async function PreviewIndex({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;

  const { isPreviewAuthorized } = await import("@/lib/preview-server");
  if (!isPreviewAuthorized()) {
    return (
      <PasswordGate
        title="PIM 柚一村 · 審稿專區"
        slug="preview-index"
        redirectTo={`/${lang}/preview`}
      />
    );
  }

  const drafts = getArticlesByLang(lang, { includeDraft: true }).filter(
    (a) => a.draft,
  );
  const published = getArticlesByLang(lang);
  const categories = getCategoriesByLang(lang);

  // group drafts by category
  const byCategory = new Map<string, typeof drafts>();
  for (const a of drafts) {
    const list = byCategory.get(a.category) ?? [];
    list.push(a);
    byCategory.set(a.category, list);
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-pomelo-600">
            Editor Preview
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            審稿專區
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            這頁僅供品牌主與受邀審稿人查看。目前共有
            <strong className="mx-1 text-pomelo-700">
              {drafts.length} 篇草稿
            </strong>
            待審、
            <strong className="mx-1 text-pomelo-700">
              {published.length} 篇已公開
            </strong>
            。審核通過的文章會從下列清單消失，並自動出現在正式文章列表與
            sitemap；拒絕或要求修改的文章，請直接回覆需要調整的地方。
          </p>
        </div>
        <PreviewLogout />
      </header>

      <div className="mt-10 space-y-10">
        {categories.map((cat) => {
          const items = byCategory.get(cat.slug) ?? [];
          if (items.length === 0) return null;
          return (
            <section
              key={cat.slug}
              className="rounded-2xl border border-line bg-white/60 p-6 md:p-7"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-lg font-semibold text-pomelo-800">
                  {cat.name}
                </h2>
                <span className="text-xs text-muted">
                  {items.length} 篇待審
                </span>
              </div>
              <p className="mt-1 text-xs leading-6 text-muted">
                {cat.description}
              </p>
              <ul className="mt-5 divide-y divide-line/70">
                {items.map((a) => (
                  <li key={a.slug} className="py-4">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                      <span className="rounded-full bg-pomelo-50 px-2 py-0.5 font-medium text-pomelo-700">
                        {a.categoryName}
                      </span>
                      <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
                      <span aria-hidden>·</span>
                      <span>{a.readingMinutes} 分鐘閱讀</span>
                      <span aria-hidden>·</span>
                      <code className="rounded bg-pomelo-50 px-1.5 py-0.5 text-pomelo-700">
                        {a.slug}
                      </code>
                    </div>
                    <Link
                      href={`/${lang}/articles/${a.slug}`}
                      className="group mt-2 block"
                    >
                      <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-pomelo-700">
                        {a.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                        {a.excerpt}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-pomelo-700">
                        進入審稿 →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <section className="mt-14 rounded-2xl border border-line bg-pomelo-50/60 p-6 text-sm leading-7 text-muted">
        <h2 className="font-display text-base font-semibold text-pomelo-800">
          審稿流程說明
        </h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5">
          <li>點擊上方任一篇草稿即可閱讀完整內容。</li>
          <li>
            若此瀏覽器 cookie 仍有效（30 天內），進入每篇文章都不用再輸密碼。
          </li>
          <li>
            審完後，請把每篇文章的狀態回覆給站長：通過 / 要修改（附具體建議）/ 退件。
          </li>
          <li>通過的文章下一次部署會自動從審稿區消失、上架到正式列表。</li>
        </ol>
      </section>
    </div>
  );
}

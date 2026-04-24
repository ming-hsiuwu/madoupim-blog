import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Toc } from "@/components/Toc";
import { Faq } from "@/components/Faq";
import { RelatedProducts } from "@/components/RelatedProducts";
import { ArticleCard, formatDate } from "@/components/ArticleCard";
import { ArticleCover } from "@/components/ArticleCover";
import { JsonLd } from "@/components/JsonLd";
import { PasswordGate } from "@/components/PasswordGate";
import {
  getArticle,
  getArticlesByLang,
  getRelatedArticles,
} from "@/lib/articles";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/jsonld";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { isPreviewAuthorized } from "@/lib/preview";

// draft 文章不在 SSG 清單中；以 dynamic 方式接受，避免把內容預先靜態生成導致外洩。
export const dynamicParams = true;

export async function generateStaticParams() {
  // 只預產已發佈的，草稿靠 dynamic render 並要求密碼。
  return getArticlesByLang("zh").map((a) => ({ lang: "zh", slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const article = getArticle(lang, params.slug);
  if (!article) return {};
  const url = `${SITE.url}/${lang}/articles/${article.slug}`;

  // 草稿文章：拒絕索引、不暴露 seo title/description
  if (article.draft) {
    return {
      title: "審稿中的文章",
      description: "此文章尚未公開，需要預覽密碼。",
      robots: { index: false, follow: false, nocache: true, noarchive: true },
      alternates: { canonical: url },
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      images: [{ url: article.image, alt: article.imageAlt }],
      publishedTime: article.date,
      modifiedTime: article.updatedDate ?? article.date,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.image],
    },
    alternates: {
      canonical: url,
      languages: {
        "zh-TW": `${SITE.url}/zh/articles/${article.slug}`,
        en: `${SITE.url}/en/articles/${article.slug}`,
      },
    },
  };
}

async function loadContent(lang: Lang, slug: string) {
  try {
    const mod = await import(`./content/${lang}/${slug}.tsx`);
    return mod.default as () => JSX.Element;
  } catch {
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const article = getArticle(lang, params.slug);
  if (!article) notFound();

  // 草稿 + 未驗證 → 顯示密碼 gate，絕對不要預先 render 內容
  if (article.draft) {
    const authorized = await isPreviewAuthorized();
    if (!authorized) {
      return (
        <PasswordGate
          title={article.title}
          slug={article.slug}
          redirectTo={`/${lang}/articles/${article.slug}`}
        />
      );
    }
  }

  const Content = await loadContent(lang, params.slug);
  if (!Content) notFound();

  const dict = getDict(lang);
  const related = getRelatedArticles(lang, article, 3);
  const url = `${SITE.url}/${lang}/articles/${article.slug}`;

  return (
    <>
      <JsonLd data={articleJsonLd(lang, article)} />
      <JsonLd data={faqJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd(lang, [
          { name: SITE.name, url: `${SITE.url}/${lang}` },
          { name: dict.nav.articles, url: `${SITE.url}/${lang}/articles` },
          { name: article.title, url },
        ])}
      />

      <article>
        <header className="border-b border-line bg-cream">
          <div className="mx-auto max-w-4xl px-5 py-12 md:py-16">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <Link
                href={`/${lang}/category/${article.category}`}
                className="rounded-full bg-pomelo-100 px-3 py-0.5 font-medium text-pomelo-700 hover:bg-pomelo-200"
              >
                {article.categoryName}
              </Link>
              <time dateTime={article.date}>
                {formatDate(article.date, lang)}
              </time>
              <span aria-hidden>·</span>
              <span>
                {article.readingMinutes} {dict.sections.minRead}
              </span>
              {article.updatedDate && (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    {dict.sections.updatedOn}{" "}
                    {formatDate(article.updatedDate, lang)}
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
              {article.excerpt}
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl px-5 pb-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line">
              <ArticleCover
                title={article.title}
                categoryName={article.categoryName}
                variant="hero"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            {article.toc && article.toc.length > 0 && (
              <Toc items={article.toc} lang={lang} />
            )}
            {article.tags.length > 0 && (
              <div className="mt-6 rounded-xl border border-line bg-white/70 p-5 text-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-pomelo-700">
                  {dict.sections.tag}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-pomelo-50 px-2.5 py-0.5 text-xs text-pomelo-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <div>
            <Prose>
              <Content />
            </Prose>

            {article.relatedProducts && article.relatedProducts.length > 0 && (
              <RelatedProducts items={article.relatedProducts} lang={lang} />
            )}

            {article.faq && article.faq.length > 0 && (
              <Faq items={article.faq} lang={lang} />
            )}

            {article.sources && article.sources.length > 0 && (
              <section className="not-prose mt-12 rounded-2xl border border-line bg-white/80 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-pomelo-700">
                  參考來源
                </p>
                <ul className="space-y-2 text-sm">
                  {article.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pomelo-700 underline decoration-pomelo-200 underline-offset-2 hover:decoration-pomelo-600"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-line bg-pomelo-50/60">
            <div className="mx-auto max-w-6xl px-5 py-14">
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {dict.sections.relatedArticles}
              </h2>
              <div className="mt-8 grid gap-10 md:grid-cols-3">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} lang={lang} />
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href={`/${lang}/articles`}
                  className="text-sm text-pomelo-700 hover:text-pomelo-800"
                >
                  ← {dict.sections.backToList}
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

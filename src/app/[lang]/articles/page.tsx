import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticlesByLang, getCategoriesByLang } from "@/lib/articles";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const dict = getDict(params.lang);
  return {
    title: dict.nav.articles,
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `${SITE.url}/${params.lang}/articles`,
      languages: {
        "zh-TW": `${SITE.url}/zh/articles`,
        en: `${SITE.url}/en/articles`,
      },
    },
  };
}

export default function ArticlesIndex({
  params,
}: {
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dict = getDict(lang);
  const articles = getArticlesByLang(lang);
  const categories = getCategoriesByLang(lang);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <header className="max-w-3xl">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-pomelo-600">
          {dict.nav.articles}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          {dict.meta.siteTitle}
        </h1>
        <p className="mt-4 text-base leading-8 text-muted">
          {dict.meta.defaultDescription}
        </p>
      </header>

      {categories.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`/${lang}/category/${c.slug}`}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-ink transition-colors hover:border-pomelo-500 hover:text-pomelo-700"
            >
              {c.name}
            </a>
          ))}
        </div>
      )}

      {articles.length === 0 ? (
        <p className="mt-20 text-center text-muted">
          尚無發佈文章，歡迎近期再回來看看。
        </p>
      ) : (
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import {
  getArticlesByLang,
  getCategoriesByLang,
  getCategory,
} from "@/lib/articles";
import { getDict, isLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return [
    ...getCategoriesByLang("zh").map((c) => ({ lang: "zh", slug: c.slug })),
    ...getCategoriesByLang("en").map((c) => ({ lang: "en", slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const cat = getCategory(lang, params.slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
    alternates: {
      canonical: `${SITE.url}/${lang}/category/${cat.slug}`,
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dict = getDict(lang);
  const cat = getCategory(lang, params.slug);
  if (!cat) notFound();

  const articles = getArticlesByLang(lang).filter(
    (a) => a.category === cat.slug,
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <nav className="text-xs text-muted">
        <Link href={`/${lang}`} className="hover:text-pomelo-700">
          {dict.nav.home}
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <Link
          href={`/${lang}/articles`}
          className="hover:text-pomelo-700"
        >
          {dict.nav.articles}
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-ink">{cat.name}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-pomelo-600">
          {dict.sections.category}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-4 text-base leading-8 text-muted">{cat.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="mt-20 text-center text-muted">
          這個分類的文章正在籌備中，敬請期待。
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

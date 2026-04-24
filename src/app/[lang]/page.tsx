import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import {
  getArticlesByLang,
  getCategoriesByLang,
} from "@/lib/articles";
import { getDict, isLang, type Lang } from "@/lib/i18n";

export const dynamic = "force-static";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dict = getDict(lang);
  const articles = getArticlesByLang(lang);
  const categories = getCategoriesByLang(lang);
  const [featured, ...rest] = articles;

  if (!featured) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-muted">尚無發佈文章，歡迎近期再回來看看。</p>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="flex flex-col justify-center">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-pomelo-600">
              {dict.hero.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/articles`}
                className="rounded-full bg-pomelo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-pomelo-700"
              >
                {dict.hero.cta}
              </Link>
              <a
                href="https://madoupim.com/pim"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-pomelo-600 px-6 py-2.5 text-sm font-medium text-pomelo-700 transition-colors hover:bg-pomelo-50"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-earth-200/70 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-pomelo-200/80 blur-3xl" />
            <figure className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-cream via-pomelo-50 to-earth-100 shadow-sm">
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-6 p-10 text-center">
                <Image
                  src="/brand/logo.png"
                  alt="PIM 柚一村"
                  width={280}
                  height={110}
                  priority
                  className="h-auto w-[70%] drop-shadow-sm"
                />
                <div className="space-y-1">
                  <p className="font-display text-sm uppercase tracking-[0.35em] text-pomelo-600">
                    Pomelo In Madou
                  </p>
                  <p className="text-sm text-muted">
                    台南麻豆 · 老欉文旦 · 食農美學
                  </p>
                </div>
                <div className="h-px w-16 bg-pomelo-600/40" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            {dict.sections.featured}
          </h2>
          <Link
            href={`/${lang}/articles`}
            className="text-sm text-pomelo-700 hover:text-pomelo-800"
          >
            {dict.nav.articles} →
          </Link>
        </div>
        <div className="mt-8">
          <ArticleCard article={featured} lang={lang} feature />
        </div>
        {rest.length > 0 && (
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} lang={lang} />
            ))}
          </div>
        )}
      </section>

      {categories.length > 0 && (
        <section
          id="categories"
          className="border-t border-line bg-pomelo-50/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {dict.sections.byCategory}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${lang}/category/${c.slug}`}
                  className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-pomelo-500"
                >
                  <p className="font-display text-lg font-semibold text-pomelo-800 group-hover:text-pomelo-600">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {c.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

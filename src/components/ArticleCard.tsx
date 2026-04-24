import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { getDict, type Lang } from "@/lib/i18n";

export function ArticleCard({
  article,
  lang,
  feature = false,
}: {
  article: Article;
  lang: Lang;
  feature?: boolean;
}) {
  const dict = getDict(lang);
  const href = `/${lang}/articles/${article.slug}`;
  return (
    <article
      className={
        feature
          ? "group grid gap-6 md:grid-cols-[3fr_2fr]"
          : "group flex flex-col gap-4"
      }
    >
      <Link
        href={href}
        className="block overflow-hidden rounded-2xl bg-pomelo-100"
      >
        <div
          className={
            feature
              ? "relative aspect-[4/3] w-full md:aspect-[5/4]"
              : "relative aspect-[16/10] w-full"
          }
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes={feature ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority={feature}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-pomelo-100 px-2.5 py-0.5 font-medium text-pomelo-700">
            {article.categoryName}
          </span>
          <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
          <span aria-hidden>·</span>
          <span>
            {article.readingMinutes} {dict.sections.minRead}
          </span>
        </div>
        <h3
          className={
            feature
              ? "font-display text-2xl font-semibold leading-snug text-ink md:text-3xl"
              : "font-display text-xl font-semibold leading-snug text-ink"
          }
        >
          <Link href={href} className="hover:text-pomelo-700">
            {article.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-7 text-muted">
          {article.excerpt}
        </p>
        <Link
          href={href}
          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-pomelo-700 hover:text-pomelo-800"
        >
          {dict.sections.readMore}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function formatDate(date: string, lang: Lang) {
  const d = new Date(date);
  if (lang === "zh") {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
      d.getDate(),
    ).padStart(2, "0")}`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

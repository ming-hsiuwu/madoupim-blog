import Link from "next/link";
import { SITE } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <header className="border-b border-line bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          href={`/${lang}`}
          className="group flex items-baseline gap-2 font-display"
          aria-label={SITE.name}
        >
          <span className="text-xl font-semibold tracking-tight text-pomelo-700 group-hover:text-pomelo-600">
            PIM
          </span>
          <span className="text-sm text-muted">柚一村・食農誌</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href={`/${lang}/articles`}
            className="text-ink hover:text-pomelo-600"
          >
            {dict.nav.articles}
          </Link>
          <Link
            href={`/${lang}#categories`}
            className="text-ink hover:text-pomelo-600"
          >
            {dict.nav.categories}
          </Link>
          <a
            href={SITE.mainSite}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-pomelo-600 px-4 py-1.5 text-pomelo-700 transition-colors hover:bg-pomelo-600 hover:text-white"
          >
            {dict.nav.mainSite}
          </a>
        </nav>
        <nav className="flex items-center gap-4 text-sm md:hidden">
          <Link
            href={`/${lang}/articles`}
            className="text-ink hover:text-pomelo-600"
          >
            {dict.nav.articles}
          </Link>
          <a
            href={SITE.mainSite}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-pomelo-600 px-3 py-1 text-pomelo-700"
          >
            {dict.nav.mainSite}
          </a>
        </nav>
      </div>
    </header>
  );
}

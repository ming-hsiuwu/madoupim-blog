import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <header className="border-b border-line bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          href={`/${lang}`}
          className="group flex items-center gap-3"
          aria-label={SITE.name}
        >
          <Image
            src="/brand/logo.png"
            alt="PIM 柚一村"
            width={132}
            height={52}
            priority
            className="h-9 w-auto md:h-11"
          />
          <span className="hidden text-sm text-muted md:inline">食農誌</span>
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

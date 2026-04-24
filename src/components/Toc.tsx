import type { TocItem } from "@/lib/articles";
import { getDict, type Lang } from "@/lib/i18n";

export function Toc({ items, lang }: { items: TocItem[]; lang: Lang }) {
  const dict = getDict(lang);
  return (
    <nav
      aria-label={dict.sections.toc}
      className="not-prose rounded-xl border border-line bg-white/70 p-5 text-sm"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-pomelo-700">
        {dict.sections.toc}
      </p>
      <ol className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4 text-muted" : "text-ink"}
          >
            <a
              href={`#${item.id}`}
              className="hover:text-pomelo-700"
            >
              <span className="mr-2 text-muted">{String(idx + 1).padStart(2, "0")}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

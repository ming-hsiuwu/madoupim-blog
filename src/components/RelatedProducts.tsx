import type { RelatedProduct } from "@/lib/articles";
import { getDict, type Lang } from "@/lib/i18n";

export function RelatedProducts({
  items,
  lang,
}: {
  items: RelatedProduct[];
  lang: Lang;
}) {
  const dict = getDict(lang);
  return (
    <section className="not-prose mt-12 rounded-2xl bg-pomelo-50 p-6 md:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-pomelo-700">
        {dict.sections.relatedProducts}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((product) => (
          <a
            key={product.url}
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-line bg-white p-5 transition-colors hover:border-pomelo-500"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-display text-lg font-semibold text-ink group-hover:text-pomelo-700">
                {product.title}
              </h4>
              {product.priceHint && (
                <span className="shrink-0 text-sm font-medium text-warm-600">
                  {product.priceHint}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">
              {product.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-pomelo-700">
              前往主站
              <span aria-hidden>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

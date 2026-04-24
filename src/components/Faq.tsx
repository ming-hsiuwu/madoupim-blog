import type { FaqItem } from "@/lib/articles";
import { getDict, type Lang } from "@/lib/i18n";

export function Faq({
  items,
  lang,
}: {
  items: FaqItem[];
  lang: Lang;
}) {
  const dict = getDict(lang);
  return (
    <section id="faq" className="not-prose mt-12">
      <h2 className="font-display text-2xl font-semibold text-ink">
        {dict.sections.faq}
      </h2>
      <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <div key={item.question} className="p-5 md:p-6">
            <dt className="font-display text-lg font-semibold text-pomelo-800">
              {item.question}
            </dt>
            <dd className="mt-2 text-sm leading-7 text-ink/85">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

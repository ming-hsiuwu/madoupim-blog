type Variant = "hero" | "card";

export function ArticleCover({
  title,
  categoryName,
  variant = "card",
}: {
  title: string;
  categoryName: string;
  variant?: Variant;
}) {
  const isHero = variant === "hero";
  return (
    <div className="group relative isolate h-full w-full overflow-hidden rounded-2xl bg-pomelo-800">
      <div className="absolute inset-0 bg-gradient-to-br from-pomelo-600 via-pomelo-800 to-pomelo-900" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-earth-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-pomelo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_6px)]" />

      <div
        className={[
          "relative flex h-full flex-col justify-between text-cream",
          isHero ? "p-8 md:p-12" : "p-6",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className={[
              "inline-flex items-center gap-1.5 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 font-medium text-cream backdrop-blur-sm",
              isHero
                ? "text-[11px] tracking-[0.22em]"
                : "text-[10px] tracking-[0.18em]",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-earth-300" aria-hidden />
            {categoryName}
          </span>
          <span
            className={[
              "shrink-0 font-display uppercase tracking-[0.3em] text-cream/65",
              isHero ? "text-[11px]" : "text-[9px]",
            ].join(" ")}
          >
            PIM · 柚一村
          </span>
        </div>

        <div>
          <h3
            className={[
              "font-display font-bold text-cream",
              isHero
                ? "text-4xl leading-[1.1] tracking-tight md:text-[3.25rem] md:leading-[1.08]"
                : "text-[1.55rem] leading-[1.22] tracking-tight md:text-[1.75rem]",
            ].join(" ")}
            style={{ textShadow: "0 2px 24px rgba(15, 32, 12, 0.35)" }}
          >
            {title}
          </h3>
          <div className="mt-5 flex items-center gap-3">
            <span
              className={[
                "h-[3px] rounded-full bg-earth-300",
                isHero ? "w-16" : "w-10",
              ].join(" ")}
            />
            <span
              className={[
                "font-display uppercase tracking-[0.35em] text-cream/55",
                isHero ? "text-[11px]" : "text-[9px]",
              ].join(" ")}
            >
              Pomelo In Madou
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

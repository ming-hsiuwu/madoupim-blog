import Image from "next/image";

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
    <div
      className={[
        "relative isolate flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-pomelo-50 via-pomelo-100 to-earth-100",
        isHero ? "p-8 md:p-10" : "p-5",
      ].join(" ")}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={[
            "absolute -right-16 -top-16 rounded-full bg-pomelo-300/50 blur-3xl",
            isHero ? "h-72 w-72" : "h-40 w-40",
          ].join(" ")}
        />
        <div
          className={[
            "absolute -bottom-10 -left-10 rounded-full bg-earth-300/60 blur-3xl",
            isHero ? "h-56 w-56" : "h-32 w-32",
          ].join(" ")}
        />
      </div>

      <div className="relative flex items-center justify-between">
        <span
          className={[
            "inline-block rounded-full bg-white/80 font-medium text-pomelo-700 backdrop-blur",
            isHero ? "px-3.5 py-1 text-sm" : "px-2.5 py-0.5 text-xs",
          ].join(" ")}
        >
          {categoryName}
        </span>
        <Image
          src="/brand/logo.png"
          alt="PIM 柚一村"
          width={isHero ? 120 : 72}
          height={isHero ? 48 : 28}
          className="opacity-80"
          priority={isHero}
        />
      </div>

      <div className="relative">
        <h3
          className={[
            "font-display font-semibold leading-tight text-pomelo-900",
            isHero ? "text-2xl md:text-3xl" : "text-base leading-snug",
          ].join(" ")}
        >
          {title}
        </h3>
        <div
          className={[
            "mt-4 h-[3px] rounded-full bg-pomelo-600",
            isHero ? "w-20" : "w-10",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

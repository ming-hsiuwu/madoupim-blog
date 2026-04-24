import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { LANGS, isLang, getDict, type Lang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/jsonld";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!isLang(params.lang)) return {};
  const dict = getDict(params.lang);
  return {
    title: dict.meta.siteTitle,
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `${SITE.url}/${params.lang}`,
      languages: {
        "zh-TW": `${SITE.url}/zh`,
        en: `${SITE.url}/en`,
        "x-default": `${SITE.url}/zh`,
      },
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  return (
    <>
      <JsonLd data={websiteJsonLd(lang)} />
      <div className="flex min-h-screen flex-col">
        <SiteHeader lang={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter lang={lang} />
      </div>
    </>
  );
}

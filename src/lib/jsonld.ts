import { SITE } from "./site";
import type { Article } from "./articles";
import type { Lang } from "./i18n";

export function websiteJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url + (lang === "zh" ? "/zh" : "/en"),
    inLanguage: SITE.locale[lang],
    publisher: {
      "@type": "Organization",
      name: SITE.brand.brandName,
      legalName: SITE.brand.legalName,
      url: SITE.mainSite,
      sameAs: [SITE.social.facebook, SITE.social.instagram],
    },
  };
}

export function articleJsonLd(lang: Lang, article: Article) {
  const url = `${SITE.url}/${lang}/articles/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.seoTitle,
    description: article.metaDescription,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.updatedDate ?? article.date,
    author: {
      "@type": "Organization",
      name: article.author ?? SITE.brand.brandName,
      url: SITE.mainSite,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.brand.brandName,
      url: SITE.mainSite,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/favicon.ico`,
      },
    },
    inLanguage: SITE.locale[lang],
    articleSection: article.categoryName,
    keywords: article.tags.join(", "),
  };
}

export function faqJsonLd(article: Article) {
  if (!article.faq || article.faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  lang: Lang,
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
    inLanguage: SITE.locale[lang],
  };
}

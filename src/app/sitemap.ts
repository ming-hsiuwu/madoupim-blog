import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getArticlesByLang, getCategoriesByLang } from "@/lib/articles";
import { LANGS } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    entries.push({
      url: `${SITE.url}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    });
    entries.push({
      url: `${SITE.url}/${lang}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    for (const cat of getCategoriesByLang(lang)) {
      entries.push({
        url: `${SITE.url}/${lang}/category/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
    for (const a of getArticlesByLang(lang)) {
      entries.push({
        url: `${SITE.url}/${lang}/articles/${a.slug}`,
        lastModified: a.updatedDate ?? a.date,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}

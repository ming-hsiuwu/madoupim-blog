export const LANGS = ["zh", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "zh";

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export const DICT = {
  zh: {
    nav: {
      home: "首頁",
      articles: "全部文章",
      categories: "分類",
      mainSite: "回主站購物",
    },
    hero: {
      eyebrow: "食農美學 · 長讀筆記",
      title: "麻豆文旦，不只是一顆柚子",
      subtitle:
        "從 40 年老欉、草生栽培，到柚皮再利用的每個細節，我們把主站沒說完的故事、知識與科學，整理成可以慢慢讀的一頁頁。",
      cta: "開始閱讀",
      ctaSecondary: "認識柚一村",
    },
    sections: {
      latest: "最新文章",
      byCategory: "依主題閱讀",
      featured: "編輯精選",
      relatedProducts: "文章相關商品",
      faq: "常見問題",
      toc: "本文章節",
      readMore: "閱讀全文",
      relatedArticles: "你可能也會想讀",
      backToList: "返回文章列表",
      updatedOn: "最後更新",
      minRead: "分鐘閱讀",
      tag: "標籤",
      category: "分類",
    },
    footer: {
      aboutTitle: "關於 PIM 柚一村",
      aboutBody:
        "以家鄉麻豆為起點，協助老農栽種 40 年老欉文旦，並以「良果出貨、次果分送、汰果加工」的三段式模式，實踐不浪費、不白費、更天然的 ESG 永續理念。",
      contactTitle: "聯繫我們",
      followTitle: "追蹤我們",
      copyright: "© {year} PIM 柚一村 · 馥絲國際企業有限公司",
      linkMain: "主站商店",
      linkContact: "聯絡我們",
      linkPrivacy: "隱私權政策",
    },
    meta: {
      siteTitle: "PIM 柚一村 食農誌｜麻豆文旦長讀筆記",
      defaultDescription:
        "關於麻豆文旦、老欉柚子、柚皮科學與食農美學的長讀筆記，由 PIM 柚一村出品。",
    },
  },
  en: {
    nav: {
      home: "Home",
      articles: "All Articles",
      categories: "Categories",
      mainSite: "Shop",
    },
    hero: {
      eyebrow: "Slow-food journal",
      title: "Madou pomelo is more than a fruit",
      subtitle:
        "Long-form reading from PIM Pomelo Village — 40-year-old trees, grass-farming, peel chemistry, and the stories behind every jar we make.",
      cta: "Start reading",
      ctaSecondary: "About PIM",
    },
    sections: {
      latest: "Latest",
      byCategory: "By topic",
      featured: "Editor's picks",
      relatedProducts: "Related products",
      faq: "FAQ",
      toc: "Contents",
      readMore: "Read more",
      relatedArticles: "You may also like",
      backToList: "Back to all articles",
      updatedOn: "Updated",
      minRead: "min read",
      tag: "Tag",
      category: "Category",
    },
    footer: {
      aboutTitle: "About PIM",
      aboutBody:
        "Rooted in Madou, Tainan. We help elderly farmers keep their 40-year-old pomelo trees alive, and turn every fruit — good, shared, or processed — into something meaningful.",
      contactTitle: "Contact",
      followTitle: "Follow",
      copyright: "© {year} PIM Pomelo Village · Fusz International Co., Ltd.",
      linkMain: "Main shop",
      linkContact: "Contact",
      linkPrivacy: "Privacy policy",
    },
    meta: {
      siteTitle: "PIM Pomelo Village Journal — Madou Pomelo Long Reads",
      defaultDescription:
        "Long-form articles about Madou pomelo, old-tree farming, peel chemistry and slow-food culture, by PIM Pomelo Village.",
    },
  },
} as const;

type Narrow<T> = { readonly [K in keyof T]: Narrow<T[K]> };
export type Dict = Narrow<(typeof DICT)["zh"]>;

export function getDict(lang: Lang): Dict {
  return DICT[lang] as unknown as Dict;
}

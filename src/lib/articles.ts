import type { Lang } from "./i18n";

export type ArticleCategory =
  | "pomelo101"
  | "ingredient-science"
  | "esg-field"
  | "craft-story";

export interface CategoryMeta {
  slug: ArticleCategory;
  name: string;
  description: string;
}

export interface RelatedProduct {
  title: string;
  description: string;
  url: string;
  priceHint?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TocItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  updatedDate?: string;
  category: ArticleCategory;
  categoryName: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingMinutes: number;
  author?: string;
  sources?: { title: string; url: string }[];
  relatedProducts?: RelatedProduct[];
  relatedSlugs?: string[];
  faq?: FaqItem[];
  toc?: TocItem[];
  featured?: boolean;
}

export const CATEGORIES_ZH: CategoryMeta[] = [
  {
    slug: "pomelo101",
    name: "文旦柚知識",
    description:
      "從品種、產季、老欉到選購保存，把一顆麻豆文旦的前世今生說清楚。",
  },
  {
    slug: "ingredient-science",
    name: "柚皮科學",
    description:
      "柚皮裡的精油、苦味素、黃酮與纖維 — 科學角度解讀為什麼柚皮值得留下。",
  },
  {
    slug: "esg-field",
    name: "產地田野",
    description:
      "走進麻豆果園：老農、老欉、草生栽培、公益贈禮的第一手現場記錄。",
  },
  {
    slug: "craft-story",
    name: "工藝故事",
    description:
      "從受傷的柚子變成黑糖磚、醬醋、調味粉 — 每一瓶加工品的來歷與工法。",
  },
];

export const ARTICLES_ZH: Article[] = [
  {
    slug: "madou-pomelo-vs-other-pomelos",
    title: "麻豆文旦 vs 白柚 vs 西施柚：一張表看懂台灣三大柚類差異",
    seoTitle:
      "麻豆文旦、白柚、西施柚差在哪？台灣三大柚類產季果肉香氣完整比較",
    excerpt:
      "每年中秋到冬至，台灣市場上至少會出現三種長相相似的柚類：麻豆文旦、大白柚、西施柚。它們的產季、香氣、果肉口感、適合的吃法都不一樣。這篇用一張表先看差異，再逐條拆解為什麼麻豆文旦最適合中秋、白柚耐久放、西施柚甜度高。",
    metaDescription:
      "麻豆文旦、大白柚、西施柚是台灣三大常見柚類。本文用對照表與產季、果肉、香氣、用途差異，幫你在中秋到冬天選對柚子。",
    date: "2026-04-20",
    category: "pomelo101",
    categoryName: "文旦柚知識",
    tags: ["麻豆文旦", "白柚", "西施柚", "柚類比較", "中秋送禮"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 8,
    author: "柚一村編輯部",
    featured: true,
    sources: [
      {
        title: "行政院農業部 農情報告資源網 — 柚類",
        url: "https://agr.afa.gov.tw/afa/afa_frame.jsp",
      },
      {
        title: "台南區農業改良場 柚類栽培管理手冊",
        url: "https://www.tndais.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "40 年麻豆老欉文旦禮盒 5 斤",
        description:
          "挑選四十年老欉的中秋款文旦，果肉細緻、香氣層次豐富，適合作為中秋正統送禮之選。",
        url: "https://madoupim.com/gift",
      },
      {
        title: "柚見好日子小禮袋",
        description:
          "中秋檔期最輕便的伴手禮款式，把柚皮黑糖磚與調味粉裝進一袋剛剛好。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$390 起",
      },
    ],
    relatedSlugs: [
      "why-40-year-old-pomelo-trees-matter",
      "pomelo-peel-12-uses-from-kitchen-to-home",
    ],
    faq: [
      {
        question: "麻豆文旦和大白柚是同一種柚嗎？",
        answer:
          "不是。麻豆文旦是文旦柚品種，果型偏小、皮薄、果肉細；大白柚是白柚品種，果型大、皮厚、耐放。兩者產季、風味與適合用途都不同。",
      },
      {
        question: "為什麼中秋才吃得到麻豆文旦？",
        answer:
          "麻豆文旦的採收期集中在中秋前 7–10 天，再經過 2–3 週的「辭水」(靜置回甜) 才最好吃。所以市面上的最佳賞味期大約是中秋前後一個月。",
      },
      {
        question: "西施柚和白柚哪個比較甜？",
        answer:
          "一般而言西施柚甜度較高、酸度較低，果肉紅嫩；白柚偏清爽、帶微酸，適合解膩與久放。",
      },
    ],
    toc: [
      { id: "quick-table", title: "一張表看差異", level: 2 },
      { id: "madou-wendan", title: "麻豆文旦：為中秋而生", level: 2 },
      { id: "white-pomelo", title: "大白柚：耐放、適合過年", level: 2 },
      { id: "xishi-pomelo", title: "西施柚：紅嫩高甜度", level: 2 },
      { id: "how-to-pick", title: "挑柚建議：怎麼選不踩雷", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "why-40-year-old-pomelo-trees-matter",
    title: "40 年老欉的真相：為什麼一顆柚子需要等四十年？",
    seoTitle: "老欉麻豆文旦是什麼？40 年柚樹為什麼比新欉好吃？",
    excerpt:
      "一棵文旦柚樹從種下到進入「老欉」期，需要 30–40 年。老欉的根系、木質化程度、水分與糖分的調度都不一樣，果肉因此細緻、香氣濃、果汁多。這篇走進麻豆果園，把為什麼「老的比較好」這件事說清楚。",
    metaDescription:
      "老欉麻豆文旦為什麼比新欉好吃？從根系深度、樹齡與糖分調度，看為什麼一棵柚樹需要等 40 年才會被稱為老欉。",
    date: "2026-04-18",
    category: "esg-field",
    categoryName: "產地田野",
    tags: ["老欉", "麻豆文旦", "果園", "產地", "ESG"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 7,
    author: "柚一村編輯部",
    featured: true,
    sources: [
      {
        title: "台南市麻豆區公所 — 文旦柚產業專頁",
        url: "https://www.madou.gov.tw/",
      },
      {
        title: "台南區農業改良場 柚類栽培管理手冊",
        url: "https://www.tndais.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "40 年麻豆老欉文旦禮盒 10 斤",
        description:
          "從合作農友的 40 年老欉直出，中秋檔期限定款，數量有限。",
        url: "https://madoupim.com/gift",
      },
      {
        title: "公益限定組（與伊甸聯名）",
        description:
          "每售出一組，柚一村即贊助資源給偏鄉機構，延續「次果分送」精神。",
        url: "https://madoupim.com/plus",
      },
    ],
    relatedSlugs: [
      "madou-pomelo-vs-other-pomelos",
      "pomelo-peel-12-uses-from-kitchen-to-home",
    ],
    faq: [
      {
        question: "新種的柚樹幾年才能結果？",
        answer:
          "一般嫁接苗約 3–5 年可開始結果，但果肉品質尚未穩定；約要 10 年以上才算「青壯欉」，30–40 年以上才進入「老欉」。",
      },
      {
        question: "老欉會不會越老越不甜？",
        answer:
          "老欉的糖度與果汁量通常優於年輕欉，但到了 60 年以上若管理不當可能衰弱。多數農友會在 40–55 年之間取得品質最佳的果實。",
      },
      {
        question: "為什麼老欉文旦特別貴？",
        answer:
          "老欉需要長期照顧、病蟲害風險高、產量不若新欉，且每年只在中秋前後一段時間採收，稀缺自然反映在價格上。",
      },
    ],
    toc: [
      { id: "what-is-old-tree", title: "「老欉」到底怎麼定義？", level: 2 },
      { id: "root-system", title: "根系、木質、糖分的三重差異", level: 2 },
      { id: "madou-soil", title: "麻豆鹹土：老欉好吃的隱形推手", level: 2 },
      { id: "esg-model", title: "為什麼柚一村堅持陪老欉", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-peel-12-uses-from-kitchen-to-home",
    title: "柚皮精油的 12 種用法：從料理到清潔，為什麼你不該丟掉柚皮",
    seoTitle:
      "柚皮怎麼用？柚皮精油料理、清潔、驅蟲、泡澡的 12 種在家實用法",
    excerpt:
      "柚皮富含檸檬烯 (limonene) 與諾卡酮 (nootkatone) 等天然揮發油，丟掉等於把風味、香氣和殺菌力一起丟掉。本篇整理柚皮在料理、清潔、空氣清新、驅蟲、泡澡的 12 種用法，每一項都有科學依據。",
    metaDescription:
      "柚皮精油含檸檬烯與諾卡酮，可用於料理、清潔、驅蟲、泡澡。本文整理 12 種柚皮實用法與背後的科學原理。",
    date: "2026-04-15",
    category: "ingredient-science",
    categoryName: "柚皮科學",
    tags: ["柚皮", "精油", "檸檬烯", "零廢棄", "家務"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 9,
    author: "柚一村編輯部",
    featured: true,
    sources: [
      {
        title:
          "Sun J. D-Limonene: safety and clinical applications. Altern Med Rev. 2007",
        url: "https://pubmed.ncbi.nlm.nih.gov/17709450/",
      },
      {
        title:
          "Bedoukian Research — Nootkatone as a safe insect repellent",
        url: "https://www.bedoukian.com/",
      },
    ],
    relatedProducts: [
      {
        title: "柚皮黑糖磚",
        description:
          "把富含精油的柚皮完整入糖塊，一塊就能沖一杯帶柚香的暖飲。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$250 起",
      },
      {
        title: "柚皮七味粉",
        description:
          "把乾燥柚皮研磨融入七味粉，烤肉、炒菜、沾料都用得上。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$120 起",
      },
    ],
    relatedSlugs: [
      "madou-pomelo-vs-other-pomelos",
      "why-40-year-old-pomelo-trees-matter",
    ],
    faq: [
      {
        question: "柚皮精油可以直接抹在皮膚上嗎？",
        answer:
          "高濃度精油直接接觸皮膚可能引起刺激與光敏反應，建議稀釋於基底油 (如椰子油或荷荷巴油) 到 1–2% 再使用，並避開陽光曝曬。",
      },
      {
        question: "柚皮可以放多久不壞？",
        answer:
          "新鮮柚皮切條後室溫 1–2 天會發黴；若要長期使用建議低溫烘乾到完全乾燥，密封後可保存 3–6 個月。",
      },
      {
        question: "柚皮驅蚊有科學根據嗎？",
        answer:
          "柚皮含的諾卡酮 (nootkatone) 已被研究作為天然驅蟲成分，美國環保署也已核准其作為防蚊用途，但居家燃柚皮的實際濃度相對低，需要搭配其他方式。",
      },
    ],
    toc: [
      { id: "why-keep", title: "為什麼不該丟柚皮", level: 2 },
      { id: "cooking", title: "料理應用：5 種吃法", level: 2 },
      { id: "cleaning", title: "清潔去味：3 種用法", level: 2 },
      { id: "ambience", title: "空氣、泡澡與驅蟲：4 種用法", level: 2 },
      { id: "safety", title: "安全使用提醒", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
];

export function getArticlesByLang(lang: Lang): Article[] {
  if (lang === "zh") return ARTICLES_ZH;
  return [];
}

export function getCategoriesByLang(lang: Lang): CategoryMeta[] {
  if (lang === "zh") return CATEGORIES_ZH;
  return [];
}

export function getArticle(lang: Lang, slug: string): Article | undefined {
  return getArticlesByLang(lang).find((a) => a.slug === slug);
}

export function getCategory(
  lang: Lang,
  slug: string,
): CategoryMeta | undefined {
  return getCategoriesByLang(lang).find((c) => c.slug === slug);
}

export function getRelatedArticles(
  lang: Lang,
  article: Article,
  limit = 3,
): Article[] {
  const all = getArticlesByLang(lang);
  const explicit =
    article.relatedSlugs
      ?.map((s) => all.find((a) => a.slug === s))
      .filter((a): a is Article => !!a) ?? [];
  if (explicit.length >= limit) return explicit.slice(0, limit);

  const fallback = all
    .filter((a) => a.slug !== article.slug && !explicit.includes(a))
    .filter((a) => a.category === article.category)
    .slice(0, limit - explicit.length);
  return [...explicit, ...fallback].slice(0, limit);
}

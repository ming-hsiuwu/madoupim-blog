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
  /**
   * 草稿模式：true 的文章不會出現在列表頁 / sitemap / generateStaticParams，
   * 必須靠直接 URL 才能進入，且需輸入預覽密碼才能看到內容。
   */
  draft?: boolean;
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

  // ====== DRAFT (待品牌主審稿) ======
  {
    slug: "how-to-store-madou-pomelo",
    title: "文旦柚怎麼保存？冷藏、辭水、切片後的完整指南",
    seoTitle:
      "麻豆文旦保存方法：辭水幾天最好吃、冷藏注意事項、切開後怎麼放",
    excerpt:
      "剛從果園採下來的麻豆文旦其實不是最好吃的時機。這篇把「辭水」是什麼、要放幾天、該不該冷藏、切開後的保存，一次講清楚，讓你吃到最佳狀態的文旦。",
    metaDescription:
      "麻豆文旦需要辭水 2–3 週才最好吃。本文整理室溫保存、冷藏時機、切片後如何冷藏冷凍的完整步驟。",
    date: "2026-04-22",
    category: "pomelo101",
    categoryName: "文旦柚知識",
    tags: ["文旦保存", "辭水", "麻豆文旦", "冷藏", "保鮮"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 7,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "行政院農業部 農糧署",
        url: "https://www.afa.gov.tw/",
      },
      {
        title: "台南區農業改良場",
        url: "https://www.tndais.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "40 年麻豆老欉文旦禮盒 5 斤",
        description:
          "中秋檔期限定老欉直出，保存得宜可享用一個月的最佳風味。",
        url: "https://madoupim.com/gift",
      },
      {
        title: "柚見好日子小禮袋",
        description:
          "如果鮮果季已過，這袋伴手禮能把柚香延續到四季。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$390 起",
      },
    ],
    relatedSlugs: [
      "madou-pomelo-vs-other-pomelos",
      "why-40-year-old-pomelo-trees-matter",
    ],
    faq: [
      {
        question: "文旦要辭水多久才最好吃？",
        answer:
          "一般建議 2–3 週。採下的文旦果皮還繃緊、糖分未完全轉化，室溫陰涼通風處辭水到果皮微軟、拿起輕微有重量感，就是最佳賞味期。",
      },
      {
        question: "文旦可以冰冰箱嗎？",
        answer:
          "整顆冷藏會抑制糖分轉化並讓皮油香氣變淡，不建議。除非室溫超過 30°C 以上才考慮冷藏。切開後的果肉才需要冷藏並盡快食用。",
      },
      {
        question: "切開後的文旦怎麼保存？",
        answer:
          "剝好的果瓣用保鮮盒密封冷藏可放 2–3 天；整瓣冷凍可放 1 個月，但解凍後只適合打果汁或入菜，不適合直接吃。",
      },
    ],
    toc: [
      { id: "what-is-tsu-shui", title: "「辭水」到底是什麼？", level: 2 },
      { id: "how-long", title: "要放幾天？怎麼判斷", level: 2 },
      { id: "room-vs-fridge", title: "室溫 vs 冷藏：該怎麼選", level: 2 },
      { id: "after-cut", title: "切開後的保存方法", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-peel-bitter-science",
    title: "柚皮為什麼會苦？柚皮苷、諾卡酮與黃酮類的科學拆解",
    seoTitle:
      "柚皮苦味從哪來？naringin、nootkatone、黃酮類化學完整說明",
    excerpt:
      "咬一口柚皮會苦，但為什麼柚皮糖、柚皮黑糖磚又能變成香氣？答案藏在柚皮苷 (naringin)、諾卡酮 (nootkatone)、各種黃酮類的分子結構裡。這篇用食品科學的角度把苦味、香氣、功能物質一次拆開來看。",
    metaDescription:
      "柚皮的苦來自柚皮苷與黃酮類化合物，香氣來自檸檬烯與諾卡酮。本文以食品化學角度解釋柚皮苦味的科學原理與調控方法。",
    date: "2026-04-22",
    category: "ingredient-science",
    categoryName: "柚皮科學",
    tags: ["柚皮苷", "naringin", "諾卡酮", "黃酮類", "食品化學"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 8,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "PubMed — 文獻資料庫",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "食品工業發展研究所",
        url: "https://www.firdi.org.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "柚皮黑糖磚",
        description:
          "經過熬煮工序把柚皮的苦味轉化為溫潤香氣，是柚皮苷科學的實際應用。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$250 起",
      },
      {
        title: "柚皮七味粉",
        description:
          "把柚皮的苦味前體成分與香料融合，燒烤與炒菜都能帶出層次。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$120 起",
      },
    ],
    relatedSlugs: [
      "pomelo-peel-12-uses-from-kitchen-to-home",
      "pomelo-peel-brown-sugar-craft",
    ],
    faq: [
      {
        question: "柚皮苷 (naringin) 對健康有什麼影響？",
        answer:
          "柚皮苷屬於黃酮類化合物，在多項研究中被討論具抗氧化與抗發炎活性；但對於肝臟代謝某些藥物的酶 (CYP3A4) 也有抑制作用，服藥者食用大量柚子時應諮詢醫師。",
      },
      {
        question: "為什麼柚皮糖不苦？",
        answer:
          "傳統柚皮糖工序會先用熱水汆燙 2–3 次去除水溶性的柚皮苷，再與糖共煮讓苦味素被糖包覆。苦味並未消失，只是濃度被大幅降低且被香氣蓋過。",
      },
      {
        question: "諾卡酮 (nootkatone) 是什麼？",
        answer:
          "諾卡酮是柚類精油中特有的倍半萜酮，帶有清爽的葡萄柚香氣，對部分蚊蟲、壁蝨具忌避效果，美國 EPA 已於 2020 年核准其作為天然防蚊用途。",
      },
    ],
    toc: [
      { id: "structure", title: "柚皮的組成：白囊、油胞、外皮", level: 2 },
      { id: "bitter-molecule", title: "苦味主角：柚皮苷 (naringin)", level: 2 },
      { id: "aroma-molecule", title: "香氣兩大主角：檸檬烯與諾卡酮", level: 2 },
      { id: "flavonoids", title: "黃酮類的功能性", level: 2 },
      { id: "application", title: "柚皮如何從苦變香？", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-nutrition-science",
    title: "一顆文旦柚的營養表：維生素 C、膳食纖維、鉀與你以為的有落差",
    seoTitle: "文旦柚營養素一次看：維生素 C、膳食纖維、鉀、熱量、GI 值",
    excerpt:
      "坊間常說「柚子維生素 C 是柳橙 3 倍」—— 其實沒那麼誇張。這篇用衛福部食品成分資料庫的實際數字，把文旦柚的熱量、維生素 C、膳食纖維、鉀與血糖反應講清楚，也整理哪些族群要節制。",
    metaDescription:
      "文旦柚每 100 克熱量 33 大卡、維生素 C 41 毫克、膳食纖維 1 克、鉀 129 毫克。本文拆解文旦營養與注意事項。",
    date: "2026-04-23",
    category: "ingredient-science",
    categoryName: "柚皮科學",
    tags: ["文旦營養", "維生素 C", "膳食纖維", "GI", "食品成分"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 7,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "衛福部食品藥物管理署 — 食品成分資料庫",
        url: "https://consumer.fda.gov.tw/Food/TFND.aspx?nodeID=178",
      },
      {
        title: "衛生福利部國民健康署",
        url: "https://www.hpa.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "40 年麻豆老欉文旦禮盒 5 斤",
        description:
          "鮮果是攝取文旦營養的最好方式，一次五斤家庭享用剛好。",
        url: "https://madoupim.com/gift",
      },
      {
        title: "柚肉果醋",
        description:
          "想保留柚子酸甜與部分營養，但減少鮮果保存壓力的替代方案。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$250 起",
      },
    ],
    relatedSlugs: [
      "pomelo-peel-bitter-science",
      "madou-pomelo-vs-other-pomelos",
    ],
    faq: [
      {
        question: "柚子真的是維生素 C 是柳橙 3 倍嗎？",
        answer:
          "不是。依衛福部食品成分資料庫，文旦柚每 100 克約 41–46 毫克維生素 C，柳橙約 41 毫克，兩者接近。坊間說法常是拿「柚皮」或不同品種比較而產生的誤解。",
      },
      {
        question: "吃文旦會胖嗎？",
        answer:
          "文旦每 100 克約 33 大卡，熱量不高。但一整顆通常在 300–500 克之間，整顆吃下來熱量等同一碗白飯的一半。需要控制體重或血糖者建議單次食用半顆。",
      },
      {
        question: "糖尿病可以吃文旦嗎？",
        answer:
          "文旦 GI 值屬於中低範圍 (約 25–30)，適量食用不會劇烈升糖；但仍需計入當日水果份量。服用降血脂或降血壓藥物者應諮詢醫師，因為柚類會影響部分藥物代謝。",
      },
    ],
    toc: [
      { id: "quick-table", title: "文旦柚營養素速查表", level: 2 },
      { id: "vitamin-c", title: "維生素 C 的真實數字", level: 2 },
      { id: "fiber-sugar", title: "膳食纖維與糖：吃多會不會胖", level: 2 },
      { id: "potassium", title: "鉀、鈣、磷的平衡角色", level: 2 },
      { id: "who-should-limit", title: "哪些族群要節制", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "good-share-waste-pomelo-flow",
    title: "良果、次果、汰果：一顆麻豆文旦的三種命運",
    seoTitle:
      "麻豆柚一村 ESG 模式：良果出貨、次果分送、汰果加工的實踐",
    excerpt:
      "賣水果不是一條流水線。一顆文旦從採下那刻起，會依外觀、熟度、損傷狀況被分成三條命運：良果、次果、汰果。柚一村用「出貨、分送、加工」三段式模式，盡可能把每顆柚子的價值留下。",
    metaDescription:
      "柚一村的 ESG 模式：良果出貨、次果免費分送偏鄉機構、汰果進加工線做成黑糖磚與醬醋調味粉。減少浪費與提升農民收益的台灣在地實踐。",
    date: "2026-04-23",
    category: "esg-field",
    categoryName: "產地田野",
    tags: ["良果", "次果", "汰果", "ESG", "永續", "麻豆文旦"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 7,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "伊甸社會福利基金會",
        url: "https://www.eden.org.tw/",
      },
      {
        title: "行政院環境部 — 資源循環署",
        url: "https://www.moenv.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "公益限定組（伊甸聯名）",
        description:
          "購入一組，柚一村即贊助資源給偏鄉機構，延續次果分送的精神。",
        url: "https://madoupim.com/plus",
      },
      {
        title: "柚皮黑糖磚 × 4 盒",
        description:
          "汰果加工的主力產品之一，把颱風或蟲害受傷的文旦轉化為可常溫保存的甜味劑。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$1,000 起",
      },
    ],
    relatedSlugs: [
      "why-40-year-old-pomelo-trees-matter",
      "pomelo-peel-brown-sugar-craft",
    ],
    faq: [
      {
        question: "「次果」跟「汰果」差在哪？",
        answer:
          "次果是外觀有瑕疵但果肉完整、仍能食用的文旦，被用於公益分送或產地箱；汰果是受損較嚴重 (裂果、蟲蛀、輕微腐敗) 不適合直接食用，但經過挑選清潔後可進加工線提取可用部位。",
      },
      {
        question: "為什麼不把所有次果都折扣賣掉？",
        answer:
          "短期來看打折出清是最省事，但會讓消費者把「次果」等同「品質差」，長期傷害整個產區的品牌信任。柚一村選擇次果以公益分送為主，讓社會價值取代短期現金流。",
      },
      {
        question: "汰果加工真的零浪費嗎？",
        answer:
          "接近但不是 0。柚子的梗、葉、過熟腐敗部分仍需進入有機堆肥系統；目前柚一村加工後剩下的生物性廢棄物約 15%，與合作果園的堆肥計畫接軌。",
      },
    ],
    toc: [
      { id: "three-fates", title: "一顆柚子的三種命運", level: 2 },
      { id: "good-fruit", title: "良果：品質門檻與通路", level: 2 },
      { id: "share-fruit", title: "次果：社會回饋與公益模式", level: 2 },
      { id: "waste-fruit", title: "汰果：加工再生的工序", level: 2 },
      { id: "why-it-matters", title: "為什麼這套模式重要", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-peel-brown-sugar-craft",
    title: "柚皮黑糖磚是怎麼做出來的？從汰果到塊狀糖的 12 道工序",
    seoTitle:
      "柚皮黑糖磚製作工序全紀錄：挑皮、熬糖、冷卻、塑形的 12 個步驟",
    excerpt:
      "一塊 PIM 柚皮黑糖磚背後是 12 道工序。這篇把挑皮、汆燙、熬糖、融合、冷卻、切塊的整個製程拆開來看，解釋為什麼同樣原料，手工熬與工業量產會做出完全不同的結果。",
    metaDescription:
      "柚一村柚皮黑糖磚 12 道手工工序：從挑選汰果柚皮、汆燙去苦、熬煮黑糖、冷卻塑形的完整製程解析。",
    date: "2026-04-23",
    category: "craft-story",
    categoryName: "工藝故事",
    tags: ["柚皮黑糖磚", "工藝", "製程", "黑糖", "柚一村"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 8,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "台灣糖業研究所",
        url: "https://www.taisugar.com.tw/",
      },
      {
        title: "農業部 — 地方特色農產資料",
        url: "https://www.moa.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "柚皮黑糖磚",
        description:
          "文章主角，一塊等於一杯暖飲，也可直接加熱水或牛奶沖泡。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$250 起",
      },
      {
        title: "柚皮黑糖磚 × 4 盒",
        description:
          "家庭常備裝，冬季熱飲旺季每人 2–3 塊/天會很快用完。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$1,000 起",
      },
    ],
    relatedSlugs: [
      "pomelo-peel-bitter-science",
      "good-share-waste-pomelo-flow",
    ],
    faq: [
      {
        question: "為什麼要用汰果的柚皮？",
        answer:
          "汰果指外觀受損但果皮完整的文旦。用汰果皮既避免浪費良果、也讓原料成本能回饋給農民。果肉同時會進入果醋或果醬加工線，達到零廢棄。",
      },
      {
        question: "手工熬跟機器量產差在哪？",
        answer:
          "手工熬能依當天柚皮含水量、糖液濃度即時調整火候，香氣與色澤較細緻；機器量產一致性高但風味會較扁平，苦味回甘的層次也較少。",
      },
      {
        question: "黑糖磚的保存期限多久？",
        answer:
          "常溫密封可保存約 12 個月。拆開後建議移至密封罐、放陰涼處，避免濕氣讓糖塊表面回潮。",
      },
    ],
    toc: [
      { id: "raw-material", title: "原料：為什麼選汰果柚皮", level: 2 },
      { id: "step-1-4", title: "工序 1–4：挑、洗、切、汆", level: 2 },
      { id: "step-5-8", title: "工序 5–8：糖液、融合、熬煮、調整", level: 2 },
      { id: "step-9-12", title: "工序 9–12：冷卻、塑形、切塊、封裝", level: 2 },
      { id: "why-handmade", title: "為什麼堅持手工", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-vinegar-fermentation",
    title: "柚肉果醋怎麼釀？從榨汁到發酵，90 天的時間魔法",
    seoTitle:
      "柚肉果醋 90 天釀造工法：榨汁、酒精發酵、醋酸發酵的時間魔法",
    excerpt:
      "果醋不是果汁加醋。一瓶真正的柚肉果醋要經過兩段發酵：果糖先變成酒精、酒精再變成醋酸，全程 90 天以上。這篇把柚一村的釀造流程、溫度控制、品質判斷一次說清楚。",
    metaDescription:
      "柚肉果醋的釀造流程：柚肉榨汁、酒精發酵 30 天、醋酸發酵 60 天以上，總計 90 天。柚一村發酵工法完整解析。",
    date: "2026-04-24",
    category: "craft-story",
    categoryName: "工藝故事",
    tags: ["果醋", "發酵", "釀造", "柚肉", "醋酸菌"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 8,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "食品工業發展研究所",
        url: "https://www.firdi.org.tw/",
      },
      {
        title: "衛福部食藥署",
        url: "https://www.fda.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "柚肉果醋",
        description:
          "文章主角，可純飲稀釋、拌沙拉、做沾醬。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$250 起",
      },
      {
        title: "柚肉醋醬雙拼",
        description:
          "果醋 + 和風醬一次擁有，開箱就能上桌的日常調味組。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$1,000 起",
      },
    ],
    relatedSlugs: [
      "pomelo-peel-brown-sugar-craft",
      "pomelo-shichimi-vs-japanese",
    ],
    faq: [
      {
        question: "為什麼要兩段發酵？",
        answer:
          "酵母菌只能把糖轉成酒精；醋酸菌才能把酒精轉成醋酸。兩者所需環境不同 (厭氧 vs 好氧)，必須分段進行。若跳過酒精階段，最後醋酸含量會不足、風味也單薄。",
      },
      {
        question: "90 天可以縮短嗎？",
        answer:
          "可以，加強溫度或使用促進菌株能縮至 30–60 天，但風味層次會明顯減少。柚一村選 90 天以上，是為了讓果香與醋酸的融合到位。",
      },
      {
        question: "果醋可以直接喝嗎？",
        answer:
          "不建議。果醋酸度通常在 4–6%，直接飲用會刺激腸胃與牙齒。建議以 1:10 稀釋於水或氣泡水，一次不超過 30 毫升。",
      },
    ],
    toc: [
      { id: "squeeze", title: "第一階段：榨汁與前處理", level: 2 },
      { id: "alcohol-fermentation", title: "第二階段：酒精發酵 30 天", level: 2 },
      { id: "acetic-fermentation", title: "第三階段：醋酸發酵 60 天", level: 2 },
      { id: "aging", title: "熟成與過濾", level: 2 },
      { id: "how-to-use", title: "日常怎麼用", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
  {
    slug: "pomelo-shichimi-vs-japanese",
    title: "柚皮七味粉 vs 日式七味粉：台灣版柚一村的配方思路",
    seoTitle:
      "柚皮七味粉跟日本七味粉差在哪？柚一村台灣版配方邏輯大公開",
    excerpt:
      "七味粉源於日本，是辣椒、柚皮 (陳皮)、芝麻、青海苔等七種材料的合稱。柚一村把「主角改成麻豆文旦皮」的台灣版七味粉，跟傳統日式七味在風味、用法、料理搭配上有明顯差異。",
    metaDescription:
      "柚一村柚皮七味粉以麻豆文旦皮為主角的台灣版配方，比較日本傳統七味粉在辣度、香氣、最適料理上的差異。",
    date: "2026-04-24",
    category: "craft-story",
    categoryName: "工藝故事",
    tags: ["七味粉", "麻豆文旦皮", "調味粉", "日式", "台式"],
    image: "/brand/hero-products.jpg",
    imageAlt: "PIM 柚一村柚香生活系列商品全家福",
    readingMinutes: 7,
    author: "柚一村編輯部",
    draft: true,
    sources: [
      {
        title: "日本七味唐辛子史 — 公開歷史資料",
        url: "https://zh.wikipedia.org/wiki/%E4%B8%83%E5%91%B3%E7%B2%89",
      },
      {
        title: "台灣農業部",
        url: "https://www.moa.gov.tw/",
      },
    ],
    relatedProducts: [
      {
        title: "柚皮七味粉",
        description:
          "文章主角，烤肉、炒菜、醃漬、沾料都能帶出麻豆柚皮的清香。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$120 起",
      },
      {
        title: "柚香萬用調味組",
        description:
          "柚皮七味粉 + 焦糖燒烤粉 + 胡椒鹽 + 調味粉的完整四入組。",
        url: "https://madoupim.com/pomelomake",
        priceHint: "$480 起",
      },
    ],
    relatedSlugs: [
      "pomelo-peel-bitter-science",
      "pomelo-peel-12-uses-from-kitchen-to-home",
    ],
    faq: [
      {
        question: "日本七味裡的「柚子」跟台灣文旦是同一種嗎？",
        answer:
          "不是。日本七味的「柚子」通常指香橙 (Citrus junos)，風味偏花香、酸度高；台灣麻豆文旦 (Citrus grandis) 風味偏甜香、皮油厚、尾韻帶微苦。兩者是不同品種。",
      },
      {
        question: "柚皮七味粉可以取代日本七味嗎？",
        answer:
          "在烤肉、烏龍麵、牛丼上是可以替換的，但味道走向不同：日本七味較鋒利、柚香較輕盈；柚一村七味較圓潤、柚香較立體。看你想要哪種風味。",
      },
      {
        question: "七味粉開封後要怎麼保存？",
        answer:
          "避光、避潮、密封放陰涼處，建議 3–6 個月內用完以保留香氣。冰箱不是必要，但若廚房溫度長期 30°C 以上可考慮冷藏。",
      },
    ],
    toc: [
      { id: "japanese-origin", title: "日本七味的由來與原料", level: 2 },
      { id: "taiwan-version", title: "柚一村台灣版的配方邏輯", level: 2 },
      { id: "compare", title: "風味對照表", level: 2 },
      { id: "pairing", title: "各自適合的料理", level: 2 },
      { id: "faq", title: "常見問題", level: 2 },
    ],
  },
];

export function getArticlesByLang(
  lang: Lang,
  opts: { includeDraft?: boolean } = {},
): Article[] {
  const all = lang === "zh" ? ARTICLES_ZH : [];
  if (opts.includeDraft) return all;
  return all.filter((a) => !a.draft);
}

export function getArticle(lang: Lang, slug: string): Article | undefined {
  const all = lang === "zh" ? ARTICLES_ZH : [];
  return all.find((a) => a.slug === slug);
}

export function getCategoriesByLang(lang: Lang): CategoryMeta[] {
  if (lang === "zh") return CATEGORIES_ZH;
  return [];
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

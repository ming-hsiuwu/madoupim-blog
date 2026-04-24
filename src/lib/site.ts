export const SITE = {
  name: "PIM 柚一村 食農誌",
  nameEn: "PIM Pomelo Village Journal",
  shortName: "柚一村誌",
  tagline: "麻豆文旦的知識、故事與食農現場",
  taglineEn: "Knowledge, stories, and field notes of Madou pomelo",
  description:
    "PIM 柚一村延伸閱讀站：聚焦麻豆文旦的農事知識、老欉故事、柚皮科學與食農美學，長期陪伴每一位愛吃柚子、關心土地的讀者。",
  descriptionEn:
    "An extended reading site from PIM Pomelo Village — long-form knowledge about Madou pomelo trees, peel science, pomelo processing, and slow food culture.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://blog.madoupim.com",
  mainSite: "https://madoupim.com",
  locale: {
    zh: "zh-TW",
    en: "en",
  },
  social: {
    facebook: "https://www.facebook.com/pimmadou/",
    instagram: "https://www.instagram.com/madoupim/",
    line: "https://lin.ee/jMr2BX0",
  },
  brand: {
    legalName: "馥絲國際企業有限公司",
    brandName: "PIM 柚一村",
    origin: "台南麻豆",
  },
};

export type SiteConfig = typeof SITE;

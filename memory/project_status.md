---
name: blog_madoupim 外站開發狀態
description: 專案技術棧、repo、部署、待辦等跨裝置延續的專案狀態
type: project
originSessionId: 6f1a0480-7e1d-494a-9817-949ed8b29e80
---
## 專案定位
PIM 柚一村食農誌（外站部落格），主站 madoupim.com 的延伸長讀站，走「SEO 長文 + 柚皮科學」混合路線，目標是補位主站既有的「節氣 / 食譜 / ESG 短文」。

## 技術棧（2026-04-24 起）
- **Framework**：Next.js 14.2.35（App Router）
- **語言**：TypeScript
- **樣式**：Tailwind CSS 3 + @tailwindcss/typography
- **字型**：Noto Sans TC / Noto Serif TC / Inter（next/font/google）
- **部署**：Vercel（Fluid Compute 預設）
- **多語**：`/[lang]` 動態路由，現有 zh（3 篇），en 佔位
- **文章格式**：TSX 元件，位於 `src/app/[lang]/articles/[slug]/content/{zh,en}/<slug>.tsx`
- **Metadata**：`src/lib/articles.ts`（zh）、`src/lib/articles-en.ts`（en 保留結構）
- **圖片**：images.unsplash.com（next.config.mjs 已白名單）

## 專案位置
- **本機**：`/Users/wu/Desktop/Claude/blog_madoupim/`
- **GitHub**：https://github.com/ming-hsiuwu/madoupim-blog（public）
- **Vercel Project**：`minghsiuwus-projects/madoupim-blog`
- **Production URL**：https://madoupim.ms-wu.com（綁定完成 2026-04-24）+ https://madoupim-blog.vercel.app（備援）
- **自訂網域**：`madoupim.ms-wu.com`（Cloudflare DNS A record → 76.76.21.21，DNS only 灰雲）
- **環境變數**：`NEXT_PUBLIC_SITE_URL=https://madoupim.ms-wu.com` 已設定於 production
- **Cloudflare API**：Edit zone DNS token 存於專案 `.env.local`（gitignored），後續 DNS 管理可由 Claude 用 API 直接操作

## 分類（4 個）
| slug | 名稱 | 功能 |
|---|---|---|
| pomelo101 | 文旦柚知識 | 品種、產季、老欉、選購保存 |
| ingredient-science | 柚皮科學 | 檸檬烯、諾卡酮、黃酮、纖維的科學解讀 |
| esg-field | 產地田野 | 老農、老欉、草生栽培、公益贈禮現場 |
| craft-story | 工藝故事 | 黑糖磚、醬醋、調味粉的加工緣起 |

## 已有文章（3 篇，全 zh，全 featured）
1. `madou-pomelo-vs-other-pomelos` —《麻豆文旦 vs 白柚 vs 西施柚：一張表看懂台灣三大柚類差異》
2. `why-40-year-old-pomelo-trees-matter` —《40 年老欉的真相：為什麼一顆柚子需要等四十年？》
3. `pomelo-peel-12-uses-from-kitchen-to-home` —《柚皮精油的 12 種用法：從料理到清潔，為什麼你不該丟掉柚皮》

## 待辦
- [x] ~~使用者提供 logo 檔案~~ 2026-04-24 從 madoupim.com 抓取官方 logo 並生成 favicon
- [x] ~~設定自訂網域~~ 2026-04-24 `madoupim.ms-wu.com` 已綁定上線
- [x] ~~驗證 Unsplash 圖片~~ 2026-04-24 全部移除，改用品牌色封面卡 ArticleCover
- [ ] 使用者提供/拍攝實拍文章圖片後，逐張驗證後替換 ArticleCover
- [ ] 提前 3 篇量產範例（例如以 A/B/C 各分類各 2 篇為目標）
- [ ] 接 GSC、GA 追蹤（拿到三個月資料後回頭優化 title/description）

## 關鍵設計決策
- **文章用 TSX 元件而非 MDX**：遵守使用者規格；每篇可自由 layout、支援 `<table>` 等原生 HTML。
- **先做 zh，結構保留 en**：避免產能分散；`getArticlesByLang('en')` 回空陣列時 UI 會顯示「文章籌備中」。
- **顏色主題**：pomelo（綠）+ earth（大地）+ warm（橙）三調，呼應主站色系。
- **Prose 中文閱讀優化**：line-height 1.85、letter-spacing 0.01em、標題 Noto Serif TC。

**Why:** 讓換電腦或新對話開進來時，可以直接知道：專案跑到哪、repo / 部署在哪、設計決策為什麼這樣選。
**How to apply:** 每次改動關鍵資產（domain、技術棧、分類增減）時更新這份；日常新增文章不用改這裡。

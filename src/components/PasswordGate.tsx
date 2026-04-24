"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { verifyPreviewPassword } from "@/lib/preview";

export function PasswordGate({
  title,
  slug,
  redirectTo,
}: {
  title: string;
  slug: string;
  redirectTo: string;
}) {
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      setError(null);
      const result = await verifyPreviewPassword(formData);
      if (result.ok) {
        router.refresh();
      } else {
        setError(result.error ?? "驗證失敗");
      }
    });
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <div className="rounded-2xl border border-line bg-white/80 p-8 shadow-sm backdrop-blur">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-pomelo-600">
          Editor Preview
        </p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
          審稿中文章
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          這篇文章還在品牌主審稿階段，尚未公開發佈。
          若你是受邀的預覽對象，請輸入預覽密碼繼續閱讀。
        </p>
        <p className="mt-2 text-xs text-muted">文章標題：{title}</p>

        <form
          action={onSubmit}
          className="mt-6 flex flex-col gap-3"
          aria-label="preview password"
        >
          <label className="text-xs font-medium uppercase tracking-[0.2em] text-pomelo-700">
            Preview Password
          </label>
          <input
            type="password"
            name="password"
            autoFocus
            required
            inputMode="numeric"
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none ring-pomelo-500/40 focus:border-pomelo-500 focus:ring-2"
            placeholder="輸入密碼"
          />
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <input type="hidden" name="slug" value={slug} />
          <button
            type="submit"
            disabled={pending}
            className="mt-2 rounded-full bg-pomelo-700 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-pomelo-800 disabled:opacity-60"
          >
            {pending ? "驗證中…" : "進入預覽"}
          </button>
          {error && (
            <p className="mt-1 rounded-md bg-red-50 px-3 py-2 text-xs text-red-700">
              {error}
            </p>
          )}
        </form>

        <p className="mt-8 text-xs leading-6 text-muted">
          預覽通過後會在這個瀏覽器裝置記住你的存取權 30 天。草稿文章不會出現在
          首頁、文章列表、sitemap、搜尋引擎索引，僅靠本次分享連結訪問。
        </p>
      </div>
    </div>
  );
}

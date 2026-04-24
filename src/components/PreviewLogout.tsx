"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { clearPreview } from "@/lib/preview-actions";

export function PreviewLogout() {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await clearPreview();
          router.refresh();
        })
      }
      className="rounded-full border border-line bg-white px-4 py-1.5 text-xs text-muted transition-colors hover:border-pomelo-400 hover:text-pomelo-700 disabled:opacity-50"
    >
      {pending ? "登出中…" : "登出預覽"}
    </button>
  );
}

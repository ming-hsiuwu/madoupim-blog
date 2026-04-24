"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { PREVIEW_COOKIE, PREVIEW_COOKIE_VALUE } from "./preview-server";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function verifyPreviewPassword(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/");
  const expected = process.env.PREVIEW_PASSWORD;

  if (!expected) {
    return { ok: false, error: "預覽密碼未在伺服器端設定，請聯繫站長。" };
  }
  if (submitted !== expected) {
    return { ok: false, error: "密碼錯誤，請再試一次。" };
  }

  cookies().set(PREVIEW_COOKIE, PREVIEW_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  revalidatePath(redirectTo);
  return { ok: true as const };
}

export async function clearPreview() {
  cookies().delete(PREVIEW_COOKIE);
}

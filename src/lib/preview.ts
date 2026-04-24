"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const COOKIE_NAME = "madoupim_preview";
const COOKIE_VALUE = "granted";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function getPassword(): string | undefined {
  return process.env.PREVIEW_PASSWORD;
}

export async function isPreviewAuthorized(): Promise<boolean> {
  const c = cookies().get(COOKIE_NAME);
  return c?.value === COOKIE_VALUE;
}

export async function verifyPreviewPassword(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/");
  const expected = getPassword();

  if (!expected) {
    return { ok: false, error: "預覽密碼未在伺服器端設定，請聯繫站長。" };
  }
  if (submitted !== expected) {
    return { ok: false, error: "密碼錯誤，請再試一次。" };
  }

  cookies().set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  revalidatePath(redirectTo);
  return { ok: true };
}

export async function clearPreview() {
  cookies().delete(COOKIE_NAME);
}

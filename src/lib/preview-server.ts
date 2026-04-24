import "server-only";
import { cookies } from "next/headers";

export const PREVIEW_COOKIE = "madoupim_preview";
export const PREVIEW_COOKIE_VALUE = "granted";

export function isPreviewAuthorized(): boolean {
  const c = cookies().get(PREVIEW_COOKIE);
  return c?.value === PREVIEW_COOKIE_VALUE;
}

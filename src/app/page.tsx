import { redirect } from "next/navigation";
import { DEFAULT_LANG } from "@/lib/i18n";

export default function RootIndex() {
  redirect(`/${DEFAULT_LANG}`);
}

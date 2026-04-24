import Image from "next/image";
import { SITE } from "@/lib/site";
import { getDict, type Lang } from "@/lib/i18n";

export function SiteFooter({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-pomelo-50/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/brand/logo.png"
            alt="PIM 柚一村"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
          <h3 className="mt-5 font-display text-lg font-semibold text-pomelo-800">
            {dict.footer.aboutTitle}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            {dict.footer.aboutBody}
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-pomelo-800">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href={SITE.mainSite}
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                {dict.footer.linkMain} · madoupim.com
              </a>
            </li>
            <li>
              <a
                href="https://madoupim.com/index.php?route=information/contact"
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                {dict.footer.linkContact}
              </a>
            </li>
            <li>
              <a
                href={SITE.social.line}
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                LINE 客服
              </a>
            </li>
            <li>
              <a
                href="https://madoupim.com/%E9%9A%B1%E7%A7%81%E6%AC%8A%E6%94%BF%E7%AD%96"
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                {dict.footer.linkPrivacy}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-pomelo-800">
            {dict.footer.followTitle}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href={SITE.social.facebook}
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                Facebook · pimmadou
              </a>
            </li>
            <li>
              <a
                href={SITE.social.instagram}
                className="hover:text-pomelo-600"
                target="_blank"
                rel="noreferrer"
              >
                Instagram · @madoupim
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/70 bg-pomelo-100/40">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          {dict.footer.copyright.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}

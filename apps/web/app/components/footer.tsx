import Image from "next/image"
import Link from "next/link"

import { CONTACTS, FOOTER_NAV, SITE } from "../lib/site-config"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="space-y-4">
          <Image
            src="/images/themes/top/images/logo_w.png"
            alt="株式会社INFLU"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
          <p className="text-sm text-background/70">{SITE.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav
            aria-label="フッターナビゲーション"
            className="flex flex-col gap-3 text-sm"
          >
            {FOOTER_NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-background/80 transition-colors hover:text-background"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={CONTACTS.telHref}
                className="text-background/80 hover:text-background"
              >
                TEL：{CONTACTS.tel}
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.line}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background"
              >
                LINEで問い合わせる
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-background/80 hover:text-background"
              >
                MAIL：お問い合わせフォーム
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="container-page py-5 text-center text-xs text-background/60">
          Copyright © {SITE.name}, {SITE.copyrightYear} All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

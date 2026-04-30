import Image from "next/image"
import Link from "next/link"

import { CONTACTS, FOOTER_NAV, SITE } from "../lib/site-config"

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1fr_2fr] md:py-24">
        <div className="space-y-6">
          <Image
            src="/images/themes/top/images/logo_w.png"
            alt="株式会社INFLU"
            width={180}
            height={48}
            className="h-10 w-auto"
          />
          <p className="text-[13px] leading-loose text-white/70">
            {SITE.description}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <nav
            aria-label="フッターナビゲーション"
            className="flex flex-col gap-4 text-[13px] font-bold tracking-widest"
          >
            {FOOTER_NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-white/85 transition-colors hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-col gap-4 text-[13px]">
            <li>
              <a
                href={CONTACTS.telHref}
                className="text-white/85 hover:text-white"
              >
                TEL：{CONTACTS.tel}
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.line}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white"
              >
                LINEで問い合わせる
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-white/85 hover:text-white">
                MAIL：お問い合わせフォーム
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-[11px] tracking-widest text-white/60">
          Copyright © {SITE.name}, {SITE.copyrightYear} All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

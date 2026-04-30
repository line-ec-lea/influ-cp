import Link from "next/link"

import { CONTACTS } from "../lib/site-config"

export function CTABand() {
  return (
    <section
      aria-label="お問い合わせ"
      className="bg-brand text-brand-foreground"
    >
      <div className="container-page py-14 md:py-20">
        <div className="text-center">
          <p className="font-en text-sm font-bold uppercase tracking-[0.2em] opacity-80">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            WEBプロモーションのことなら、お気軽にご相談ください。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm opacity-90 md:text-base">
            ご相談・お見積もりは無料です。事業フェーズに合わせて最適なプランをご提案します。
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          <a
            href={CONTACTS.telHref}
            className="flex flex-col items-center justify-center rounded-lg bg-background px-5 py-5 text-foreground shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest text-brand">
              TEL
            </span>
            <span className="mt-1 text-lg font-bold">{CONTACTS.tel}</span>
          </a>
          <a
            href={CONTACTS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-lg bg-line px-5 py-5 text-line-foreground shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest opacity-80">
              LINE
            </span>
            <span className="mt-1 text-lg font-bold">LINEで問い合わせる</span>
          </a>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center rounded-lg bg-foreground px-5 py-5 text-background shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest opacity-80">
              MAIL
            </span>
            <span className="mt-1 text-lg font-bold">フォームで送信</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

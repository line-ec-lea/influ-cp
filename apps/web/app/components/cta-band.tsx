import Link from "next/link"

import { CONTACTS } from "../lib/site-config"

export function CTABand() {
  return (
    <section
      aria-label="お問い合わせ"
      className="border-t border-rule bg-brand-muted-2 py-16 md:py-24"
    >
      <div className="container-page text-center">
        <p className="font-en text-[11px] font-bold uppercase tracking-[0.4em] text-accent-red">
          Contact
        </p>
        <h2 className="mt-4 font-mincho text-2xl font-bold tracking-wider md:text-4xl">
          お問い合わせ
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-ink-3 md:text-base">
          WEBプロモーションのことならお気軽にお問い合わせください。
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          <a
            href={CONTACTS.telHref}
            className="flex flex-col items-center justify-center border-2 border-ink bg-white px-5 py-6 text-ink transition hover:bg-ink hover:text-white"
          >
            <span className="font-en text-[10px] font-bold tracking-[0.4em]">
              TEL
            </span>
            <span className="mt-1 text-lg font-bold tracking-wider">
              {CONTACTS.tel}
            </span>
          </a>
          <a
            href={CONTACTS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center border-2 border-line bg-line px-5 py-6 text-line-foreground transition hover:opacity-90"
          >
            <span className="font-en text-[10px] font-bold tracking-[0.4em] opacity-80">
              LINE
            </span>
            <span className="mt-1 text-lg font-bold">LINEで問い合わせる</span>
          </a>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center border-2 border-ink bg-ink px-5 py-6 text-white transition hover:bg-accent-red hover:border-accent-red"
          >
            <span className="font-en text-[10px] font-bold tracking-[0.4em] opacity-80">
              MAIL
            </span>
            <span className="mt-1 text-lg font-bold">フォームで送信</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

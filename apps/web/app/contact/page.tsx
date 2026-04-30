import type { Metadata } from "next"
import Link from "next/link"

import { Breadcrumb } from "../components/breadcrumb"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"
import { CONTACTS } from "../lib/site-config"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ご質問・ご相談は本フォームよりお気軽にお問い合わせください。",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        lead="ご質問やご相談等は下記のフォームよりお問い合わせください。"
      />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "お問い合わせ" }]}
      />

      <Section eyebrow="Form" title="カンタン1分入力">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>

      <Section
        eyebrow="Direct"
        title="お電話・LINEでも承ります"
        background="muted"
      >
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          <a
            href={CONTACTS.telHref}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-background px-6 py-6 transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest text-brand">
              TEL
            </span>
            <span className="text-lg font-bold">{CONTACTS.tel}</span>
          </a>
          <a
            href={CONTACTS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-xl bg-line px-6 py-6 text-line-foreground transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest opacity-80">
              LINE
            </span>
            <span className="text-lg font-bold">LINEで問い合わせる</span>
          </a>
          <Link
            href={`mailto:${CONTACTS.email}`}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-background px-6 py-6 transition hover:-translate-y-0.5"
          >
            <span className="font-en text-xs font-bold tracking-widest text-brand">
              MAIL
            </span>
            <span className="text-sm font-bold">{CONTACTS.email}</span>
          </Link>
        </div>
      </Section>
    </>
  )
}

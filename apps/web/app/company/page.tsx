import type { Metadata } from "next"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"
import { COMPANY } from "../lib/site-config"

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社INFLUの代表挨拶・企業情報・アクセスをご案内します。",
}

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="会社概要" />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "会社概要" }]}
      />

      <Section id="a01" eyebrow="Message" title="代表挨拶" align="left">
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-foreground/80 md:text-base">
          <p>
            お客様の売上にコミットできるポイントを成長予測のうえで設計し、
            長期的にアドバイスし続けられる組織であり続けることを大切にしています。
          </p>
          <p>
            LINE公式アカウントを起点としたセールスマーケティングファネルを最短1ヶ月で構築し、
            お客様の売上10億円までをワンストップでサポートすることが私たちのビジョンです。
          </p>
          <p className="text-right font-bold">
            代表取締役 <span className="ml-2">{COMPANY.ceo}</span>
          </p>
        </div>
      </Section>

      <Section eyebrow="Profile" title="企業情報" background="muted">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-background">
          <dl className="divide-y divide-border text-sm">
            <Row label="会社名" value={COMPANY.name} />
            <Row label="代表者" value={COMPANY.ceo} />
            <Row label="設立" value={COMPANY.established} />
            <Row label="資本金" value={COMPANY.capital} />
            <Row
              label="所在地"
              value={`〒${COMPANY.postalCode} ${COMPANY.address}`}
            />
            <Row label="事業内容" value={COMPANY.business.join(" / ")} />
          </dl>
        </div>
      </Section>

      <Section id="a02" eyebrow="Access" title="アクセス">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-center text-sm text-foreground/80">
            〒{COMPANY.postalCode} {COMPANY.address}
          </p>
          <ul className="grid gap-2 rounded-xl border border-border bg-brand-muted p-6 text-sm">
            {COMPANY.access.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-3 shrink-0 bg-brand"
                  aria-hidden="true"
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 px-6 py-4 md:grid-cols-[160px_1fr] md:items-baseline">
      <dt className="text-xs font-bold text-foreground/60 md:text-sm">
        {label}
      </dt>
      <dd>{value}</dd>
    </div>
  )
}

import type { Metadata } from "next"
import Image from "next/image"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"
import { COMPANY } from "../lib/site-config"

export const metadata: Metadata = {
  title: "会社概要",
  description: "株式会社INFLUの代表挨拶・企業情報・アクセスをご案内します。",
}

const ROUTE_STEPS = [
  "/images/themes/top/images/route01.png",
  "/images/themes/top/images/route02.png",
  "/images/themes/top/images/route03.png",
  "/images/themes/top/images/route04.png",
  "/images/themes/top/images/route05.png",
  "/images/themes/top/images/route06.png",
  "/images/themes/top/images/route07.png",
  "/images/themes/top/images/route08.png",
  "/images/themes/top/images/route09.png",
  "/images/themes/top/images/route10.png",
]

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="会社概要" />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "会社概要" }]}
      />

      <Section id="a01" eyebrow="Message" title="代表挨拶" align="left">
        <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="/images/themes/top/images/company01.png"
              alt={`代表取締役 ${COMPANY.ceo}`}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/80 md:text-base">
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
            <Image
              src="/images/themes/top/images/name.png"
              alt=""
              width={240}
              height={80}
              className="ml-auto h-auto w-40"
            />
          </div>
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
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <Image
              src="/images/themes/top/images/access01.png"
              alt="アクセスマップ"
              width={1200}
              height={680}
              className="h-auto w-full"
            />
          </div>
          <p className="text-center text-sm text-foreground/80">
            〒{COMPANY.postalCode} {COMPANY.address}
          </p>
          <ul className="grid gap-2 rounded-xl border border-border bg-brand-muted p-6 text-sm">
            {COMPANY.access.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-3 shrink-0 bg-brand"
                />
                {line}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {ROUTE_STEPS.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-lg border border-border bg-background"
              >
                <div className="relative aspect-square bg-brand-muted">
                  <Image
                    src={src}
                    alt={`駅からのルート ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 200px, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-2 py-2 text-center font-en text-xs font-bold text-brand">
                  STEP {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
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

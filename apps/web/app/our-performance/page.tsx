import type { Metadata } from "next"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"

export const metadata: Metadata = {
  title: "会社実績",
  description: "メディア掲載・取材実績の一覧をご紹介します。",
}

type Performance = { date: string; title: string }

const PERFORMANCES: Performance[] = [
  { date: "2026.01.16", title: "Focus Onに掲載されました" },
  { date: "2026.01.05", title: "東京商工リサーチの最新特集号に掲載されました" },
  { date: "2025.12.22", title: "鹿児島読売テレビで紹介されました" },
  { date: "2025.12.22", title: "朝日新聞（デジタル）で掲載されました" },
  {
    date: "2025.09.18",
    title: "SBC信越放送「ずくだせテレビ」で紹介されました",
  },
  { date: "2025.08.05", title: "TOKYO FM「ONE MORNING」で紹介されました" },
  { date: "2025.08.05", title: "ダイアモンドチェーンストアに掲載されました" },
  { date: "2025.06.26", title: "朝日新聞に掲載されました" },
  { date: "2025.06.15", title: "東大阪新聞に掲載されました" },
  {
    date: "2025.05.24",
    title: "ラジオ大阪「藤川貴央のニュースでござる」で紹介されました",
  },
  { date: "2025.04.04", title: "あややのITスキルアップ塾で紹介されました" },
  { date: "2024.11.18", title: "オオサカジンに掲載されました" },
]

export default function OurPerformancePage() {
  return (
    <>
      <PageHero eyebrow="Our Performance" title="会社実績" lead="記事一覧" />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "会社実績" }]}
      />

      <Section>
        <ul className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
          {PERFORMANCES.map((p) => (
            <li
              key={`${p.date}-${p.title}`}
              className="flex flex-col gap-1 px-6 py-5 transition hover:bg-brand-muted md:flex-row md:items-center md:gap-6"
            >
              <time
                dateTime={p.date.replaceAll(".", "-")}
                className="font-en text-sm font-bold text-brand md:w-28"
              >
                {p.date}
              </time>
              <p className="text-sm md:flex-1">{p.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"

export const metadata: Metadata = {
  title: "会社実績",
  description: "メディア掲載・取材実績の一覧をご紹介します。",
}

type Performance = { date: string; title: string; image: string }

const PERFORMANCES: Performance[] = [
  {
    date: "2026.01.16",
    title: "Focus Onに掲載されました",
    image: "/images/uploads/2026/01/3620bfa66dc9545a22cf66b1a709359b.png",
  },
  {
    date: "2026.01.05",
    title: "東京商工リサーチの最新特集号に掲載されました",
    image: "/images/uploads/2026/01/8908c780aecff95cdc40ad37e637f767.jpg",
  },
  {
    date: "2025.12.22",
    title: "鹿児島読売テレビで紹介されました",
    image: "/images/uploads/2025/12/58737dc141db67dc6937cebf14f26e95.png",
  },
  {
    date: "2025.12.22",
    title: "朝日新聞（デジタル）で掲載されました",
    image: "/images/uploads/2025/12/7f217bc3144c304d2188af10944da324.png",
  },
  {
    date: "2025.09.18",
    title: "SBC信越放送「ずくだせテレビ」で紹介されました",
    image: "/images/uploads/2025/09/8f9c2d0adc5f2b75cd01d66b7a6adfa2.jpg",
  },
  {
    date: "2025.08.05",
    title: "TOKYO FM「ONE MORNING」で紹介されました",
    image: "/images/uploads/2025/08/f19bcdfc135c85d193ee012d40db1101.png",
  },
  {
    date: "2025.08.05",
    title: "ダイアモンドチェーンストアに掲載されました",
    image: "/images/uploads/2025/08/0a5288335b608652485f00ed5d734179.png",
  },
  {
    date: "2025.06.26",
    title: "朝日新聞に掲載されました",
    image: "/images/uploads/2025/06/b3c273556cba74fa6fe70efa700e84e9.png",
  },
  {
    date: "2025.06.15",
    title: "東大阪新聞に掲載されました",
    image: "/images/uploads/2025/06/592885.png",
  },
  {
    date: "2025.05.24",
    title: "ラジオ大阪「藤川貴央のニュースでござる」で紹介されました",
    image: "/images/uploads/2025/05/42fdd99d6e08f18d7d42bfba5252f19f.png",
  },
  {
    date: "2025.04.04",
    title: "あややのITスキルアップ塾で紹介されました",
    image: "/images/uploads/2024/04/5e80e4b2b6c5a532f38a0f914163c1ab.png",
  },
  {
    date: "2024.11.18",
    title: "オオサカジンに掲載されました",
    image: "/images/uploads/2024/11/3fbc80cc09ef6bdadc7bca7c78e6296d.png",
  },
]

export default function OurPerformancePage() {
  return (
    <>
      <PageHero eyebrow="Our Performance" title="会社実績" lead="記事一覧" />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "会社実績" }]}
      />

      <Section>
        <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERFORMANCES.map((p) => (
            <li
              key={`${p.date}-${p.title}`}
              className="overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-brand-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <time
                  dateTime={p.date.replaceAll(".", "-")}
                  className="font-en text-xs font-bold tracking-widest text-brand"
                >
                  {p.date}
                </time>
                <p className="mt-2 text-sm leading-relaxed">{p.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  )
}

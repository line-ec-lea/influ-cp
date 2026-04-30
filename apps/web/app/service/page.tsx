import type { Metadata } from "next"
import Image from "next/image"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "WEBセールスプロモーション・スクール運営・WEBマーケティングの3軸で、SNSを活用した集客・販売をトータルサポートします。",
}

type ServiceBlock = {
  id: string
  no: string
  title: string
  text: string
  items: readonly string[]
  imagePc: string
  imageSp: string
}

const SERVICES: ServiceBlock[] = [
  {
    id: "a01",
    no: "01",
    title: "プロモーション",
    text: "ターゲット層に最適なチャネルでメッセージを届け、ASP・SNSを活用してユーザーへ広くリーチ。商品設計から販売導線までを一貫して設計し、売上向上を支援します。",
    items: [
      "WEBセールスプロモーション",
      "商品設計プロデュース",
      "プロモーション方法の設計",
      "LINE活用セールス戦略",
    ],
    imagePc: "/images/themes/top/images/service01.png",
    imageSp: "/images/themes/top/images/service01_sp.png",
  },
  {
    id: "a02",
    no: "02",
    title: "スクール運営",
    text: "SNS運用からコンテンツ制作・販売までのノウハウを体系化し、受講者がそのまま実践できるカリキュラムをご提供。受講継続率は60%、修了後の協働機会もご用意しています。",
    items: [
      "SNS運用",
      "コンテンツ制作",
      "講座開設サポート",
      "スクール運営法人コンサル",
    ],
    imagePc: "/images/themes/top/images/service02.png",
    imageSp: "/images/themes/top/images/service02_sp.png",
  },
  {
    id: "a03",
    no: "03",
    title: "WEBマーケティング",
    text: "ASP事業・SNS活用を強みに、LINE販売特化型ディレクションを提供。データ分析による売上自動化と、企画から3ヶ月での収益化を目指すロードマップを伴走します。",
    items: [
      "LINE運用コンサルティング",
      "LINE構築・運用代行",
      "ランディングページ最適化",
      "SNS運用代行",
    ],
    imagePc: "/images/themes/top/images/service03.png",
    imageSp: "/images/themes/top/images/service03_sp.png",
  },
]

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="INFLUのサービス"
        lead="インターネット上でSNSを活用した集客・販売をトータルでサポートします。"
      />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "事業内容" }]}
      />

      {SERVICES.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          eyebrow={`Service ${s.no}`}
          title={s.title}
          align="left"
          background={i % 2 === 1 ? "muted" : "default"}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={s.imageSp}
                alt={s.title}
                fill
                sizes="(min-width: 768px) 0px, 100vw"
                className="object-cover md:hidden"
              />
              <Image
                src={s.imagePc}
                alt={s.title}
                fill
                sizes="(min-width: 768px) 560px, 0px"
                className="hidden object-cover md:block"
              />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                {s.text}
              </p>
              <ul className="mt-6 grid gap-3 rounded-xl border border-border bg-background p-6 text-sm">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-3 shrink-0 bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <CTABand />
    </>
  )
}

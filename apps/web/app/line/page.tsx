import type { Metadata } from "next"
import Image from "next/image"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"

export const metadata: Metadata = {
  title: "LINEビジネス",
  description:
    "高エンゲージメントなLINE公式アカウントで、集客・販売を効率化し、LTVを最大化します。",
}

const POINTS = [
  {
    no: "01",
    title: "エンゲージメントが高い",
    body: "高い開封率を活かして見込み顧客をファン化し、購入意欲を継続的に高めます。",
    image: "/images/themes/top/images/line03.png",
  },
  {
    no: "02",
    title: "訴求力",
    body: "ユーザー心理を踏まえたUI設計で、スマートフォン環境での訴求力を最大化します。",
    image: "/images/themes/top/images/line05.png",
  },
  {
    no: "03",
    title: "短期間で結果を出す",
    body: "約2ヶ月で集客×販売を実現するモデルを構築。継続可能なビジネスへ素早く接続します。",
    image: "/images/themes/top/images/line06.png",
  },
  {
    no: "04",
    title: "LTVを最大化",
    body: "ブロック率の低さを活かし、年間収益最大化のためのリレーション設計を行います。",
    image: "/images/themes/top/images/line07.png",
  },
  {
    no: "05",
    title: "セグメント別配信",
    body: "アンケートに基づき顧客を分類し、ターゲット精度の高い配信を実現します。",
    image: "/images/themes/top/images/line08.png",
  },
  {
    no: "06",
    title: "分析レポート",
    body: "150件以上の運用・構築実績に基づき、改善ポイントを毎月レポーティングします。",
    image: "/images/themes/top/images/line09.png",
  },
  {
    no: "07",
    title: "セールスファネル生成",
    body: "認知から成約までのステップを構築し、自動化・予測・拡張可能なファネルを実装します。",
    image: "/images/themes/top/images/line10.png",
  },
]

export default function LinePage() {
  return (
    <>
      <PageHero
        eyebrow="LINE Business"
        title="INFLUのLINEビジネス"
        lead="LINEで効率的に集客・売上を自動化するノウハウで、購買行動の変化に迅速に対応します。"
      />
      <Breadcrumb
        items={[{ label: "HOME", href: "/" }, { label: "LINEビジネス" }]}
      />

      <Section
        eyebrow="About"
        title="LINEプラットフォームについて"
        lead="ターゲット層に合わせたプロモーション戦略を立案し、ASP・SNS活用で売上を支援します。"
      >
        <div className="mx-auto max-w-4xl">
          <Image
            src="/images/themes/top/images/line01.png"
            alt="LINE プラットフォーム概要"
            width={1200}
            height={680}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <Section
        eyebrow="Why LINE"
        title="お客様がLINEで購入する理由"
        lead="クーポン発行・お得情報の配信など、LINE公式の機能を組み合わせて購買意欲を高めます。"
        background="muted"
      >
        <div className="mx-auto max-w-4xl">
          <Image
            src="/images/themes/top/images/line02-2.png"
            alt="LINEで購入する理由"
            width={1200}
            height={680}
            sizes="(min-width: 768px) 0px, 100vw"
            className="h-auto w-full md:hidden"
          />
          <Image
            src="/images/themes/top/images/line02.png"
            alt="LINEで購入する理由"
            width={1200}
            height={680}
            sizes="(min-width: 768px) 1024px, 0px"
            className="hidden h-auto w-full md:block"
          />
        </div>
      </Section>

      <Section eyebrow="Point" title="LINE運用 7つの強み">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => (
            <article
              key={p.no}
              className="overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-brand-muted">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <p className="font-en text-sm font-bold tracking-widest text-brand">
                  POINT {p.no}
                </p>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Image
            src="/images/themes/top/images/line11.png"
            alt="LINE 運用まとめ"
            width={1200}
            height={680}
            className="h-auto w-full"
          />
        </div>
      </Section>

      <CTABand />
    </>
  )
}

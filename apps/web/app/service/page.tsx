import type { Metadata } from "next"

import { Breadcrumb } from "../components/breadcrumb"
import { CTABand } from "../components/cta-band"
import { PageHero } from "../components/page-hero"
import { Section } from "../components/section"

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "WEBセールスプロモーション・スクール運営・WEBマーケティングの3軸で、SNSを活用した集客・販売をトータルサポートします。",
}

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

      <Section
        id="a01"
        eyebrow="Service 01"
        title="プロモーション"
        align="left"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
              ターゲット層に最適なチャネルでメッセージを届け、ASP・SNSを活用して
              ユーザーへ広くリーチ。商品設計から販売導線までを一貫して設計し、
              売上向上を支援します。
            </p>
          </div>
          <ul className="grid gap-3 rounded-xl border border-border bg-brand-muted p-6 text-sm">
            {[
              "WEBセールスプロモーション",
              "商品設計プロデュース",
              "プロモーション方法の設計",
              "LINE活用セールス戦略",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-3 shrink-0 bg-brand"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="a02"
        eyebrow="Service 02"
        title="スクール運営"
        align="left"
        background="muted"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
              SNS運用からコンテンツ制作・販売までのノウハウを体系化し、
              受講者がそのまま実践できるカリキュラムをご提供。受講継続率は60%、
              修了後の協働機会もご用意しています。
            </p>
          </div>
          <ul className="grid gap-3 rounded-xl border border-border bg-background p-6 text-sm">
            {[
              "SNS運用",
              "コンテンツ制作",
              "講座開設サポート",
              "スクール運営法人コンサル",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-3 shrink-0 bg-brand"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="a03"
        eyebrow="Service 03"
        title="WEBマーケティング"
        align="left"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
              ASP事業・SNS活用を強みに、LINE販売特化型ディレクションを提供。
              データ分析による売上自動化と、企画から3ヶ月での収益化を目指す
              ロードマップを伴走します。
            </p>
          </div>
          <ul className="grid gap-3 rounded-xl border border-border bg-brand-muted p-6 text-sm">
            {[
              "LINE運用コンサルティング",
              "LINE構築・運用代行",
              "ランディングページ最適化",
              "SNS運用代行",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-3 shrink-0 bg-brand"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

import { ChartLineIcon, RocketIcon, TargetIcon } from "lucide-react"
import type { Route } from "next"
import Link from "next/link"

import { CTABand } from "./components/cta-band"
import { Section } from "./components/section"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-[#1d3170] to-[#0f1f5a] text-brand-foreground">
        <div className="container-page grid items-center gap-10 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="font-en text-xs font-bold uppercase tracking-[0.3em] opacity-80 md:text-sm">
              Web Marketing Strategy
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              ゼロから共に、短期間で
              <br />
              収益化を実現する
              <br />
              マーケティング戦略。
            </h1>
            <p className="mt-6 max-w-xl text-sm opacity-90 md:text-base">
              WEBセールスで成果を伸ばしたいすべての企業に、LINE・SNSを軸とした
              実践的なソリューションをご提案します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-background px-7 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5"
              >
                無料で相談する
              </Link>
              <Link
                href="/service"
                className="rounded-md border border-background/50 px-7 py-3 text-sm font-bold transition hover:bg-background/10"
              >
                サービスを見る
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur md:aspect-square">
              <div className="absolute inset-0 grid place-items-center text-background/40">
                <span className="font-en text-6xl font-bold tracking-widest md:text-8xl">
                  INFLU
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Message"
        title="代表挨拶"
        lead="売上に直結するポイントを成長予測のうえで設計し、長期的に伴走できる組織であり続けます。"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href={{ pathname: "/company", hash: "a01" }}
            className="inline-flex items-center gap-2 rounded-md border border-brand px-7 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-brand-foreground"
          >
            代表メッセージを見る
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Service"
        title="INFLUのサービス"
        lead="インターネット上でSNSを活用した集客・販売を、戦略立案から運用までトータルでサポートします。"
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            href="/service#a01"
            title="プロモーション"
            items={[
              "WEBセールスプロモーション",
              "商品設計プロデュース",
              "プロモーション方法設計",
              "ASP事業",
            ]}
          />
          <ServiceCard
            href="/service#a02"
            title="スクール運営"
            items={[
              "SNS運用",
              "コンテンツ制作",
              "講座開設サポート",
              "スクール運営法人コンサル",
            ]}
          />
          <ServiceCard
            href="/service#a03"
            title="WEBマーケティング"
            items={[
              "LINE運用コンサルティング",
              "LINE構築・運用代行",
              "ランディングページ最適化",
              "SNS運用代行",
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Strength" title="INFLUの強み">
        <div className="grid gap-8 md:grid-cols-3">
          <StrengthCard
            icon={<ChartLineIcon className="h-7 w-7" />}
            title="実績に基づくマーケティング"
            description="150件以上の運用・構築実績から導いたフレームワークで、再現性のある成果を提供します。"
          />
          <StrengthCard
            icon={<TargetIcon className="h-7 w-7" />}
            title="プロジェクト最適なプラン"
            description="事業フェーズ・商材・ターゲットに合わせ、毎回プランをゼロから設計します。"
          />
          <StrengthCard
            icon={<RocketIcon className="h-7 w-7" />}
            title="ゼロからのグロース"
            description="立ち上げ初期から黒字化までを伴走し、再現可能な成長エンジンを構築します。"
          />
        </div>
      </Section>

      <Section
        eyebrow="Promotion"
        title="INFLUのプロモーション戦略"
        lead="プロモーション戦略立案、新商品開発支援、広告制作までを一気通貫で実行します。"
        background="muted"
      />

      <Section eyebrow="Information" title="会社情報・貸し会議室">
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            title="会社情報"
            description="代表挨拶・企業情報・アクセスをご覧いただけます。"
            href="/company"
            cta="会社概要を見る"
          />
          <InfoCard
            title="貸し会議室"
            description="四ツ橋駅徒歩3分、最大収容スペースをご利用いただけます。"
            href="/contact"
            cta="お問い合わせ"
          />
        </div>
      </Section>

      <CTABand />
    </>
  )
}

function ServiceCard({
  href,
  title,
  items,
}: {
  href: Route
  title: string
  items: string[]
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
    >
      <p className="font-en text-xs font-bold uppercase tracking-widest text-brand">
        Service
      </p>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-3 shrink-0 bg-brand"
            />
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand">
        詳しく見る →
      </span>
    </Link>
  )
}

function StrengthCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm text-foreground/70">{description}</p>
    </div>
  )
}

function InfoCard({
  title,
  description,
  href,
  cta,
}: {
  title: string
  description: string
  href: Route
  cta: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-7">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm text-foreground/70">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand"
      >
        {cta} →
      </Link>
    </div>
  )
}

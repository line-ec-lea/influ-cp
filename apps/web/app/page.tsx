import { ChartLineIcon, RocketIcon, TargetIcon } from "lucide-react"
import type { Route } from "next"
import Image from "next/image"
import Link from "next/link"

import { CTABand } from "./components/cta-band"
import { HeroSlider } from "./components/hero-slider"
import { Section } from "./components/section"

export default function Home() {
  return (
    <>
      <section className="relative h-[68vh] min-h-[480px] w-full overflow-hidden bg-foreground">
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="container-page relative flex h-full items-center">
          <div className="max-w-2xl text-background">
            <p className="font-en text-xs font-bold uppercase tracking-[0.3em] opacity-90 md:text-sm">
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
                className="rounded-md border border-background/60 px-7 py-3 text-sm font-bold text-background transition hover:bg-background/10"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Message"
        title="代表挨拶"
        lead="売上に直結するポイントを成長予測のうえで設計し、長期的に伴走できる組織であり続けます。"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/themes/top/images/top_image.jpg"
              alt="INFLU 代表"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-foreground/80 md:text-base">
            <p>
              お客様の売上にコミットできるポイントを成長予測のうえで設計し、
              長期的にアドバイスし続けられる組織でありたいと考えています。
            </p>
            <Link
              href={{ pathname: "/company", hash: "a01" }}
              className="inline-flex items-center gap-2 rounded-md border border-brand px-7 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-brand-foreground"
            >
              代表メッセージを見る
            </Link>
          </div>
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
            image="/images/themes/top/images/webpromotion_image.jpg"
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
            image="/images/themes/top/images/school_image.jpg"
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
            image="/images/themes/top/images/marketing-image.jpg"
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
            image="/images/themes/top/images/tsuyomi_image.png"
            title="実績に基づくマーケティング"
            description="150件以上の運用・構築実績から導いたフレームワークで、再現性のある成果を提供します。"
          />
          <StrengthCard
            icon={<TargetIcon className="h-7 w-7" />}
            image="/images/themes/top/images/project_image.jpg"
            title="プロジェクト最適なプラン"
            description="事業フェーズ・商材・ターゲットに合わせ、毎回プランをゼロから設計します。"
          />
          <StrengthCard
            icon={<RocketIcon className="h-7 w-7" />}
            image="/images/themes/top/images/knowhow_image.png"
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
      >
        <div className="mx-auto max-w-5xl">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/themes/top/images/promotion_image.png"
            />
            <Image
              src="/images/themes/top/images/promotion_image_sp.png"
              alt="プロモーション戦略フロー"
              width={1200}
              height={680}
              className="h-auto w-full"
            />
          </picture>
        </div>
      </Section>

      <Section eyebrow="Information" title="会社情報・貸し会議室">
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard
            image="/images/themes/top/images/room1.jpg"
            imageSp="/images/themes/top/images/room1_sp.jpg"
            title="会社情報"
            description="代表挨拶・企業情報・アクセスをご覧いただけます。"
            href="/company"
            cta="会社概要を見る"
          />
          <InfoCard
            image="/images/themes/top/images/room2.jpg"
            imageSp="/images/themes/top/images/room2_sp.jpg"
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
  image,
  title,
  items,
}: {
  href: Route
  image: string
  title: string
  items: string[]
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 380px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-en text-xs font-bold uppercase tracking-widest text-brand">
          Service
        </p>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/80">
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
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand">
          詳しく見る →
        </span>
      </div>
    </Link>
  )
}

function StrengthCard({
  icon,
  image,
  title,
  description,
}: {
  icon: React.ReactNode
  image: string
  title: string
  description: string
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="relative aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 380px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
          {icon}
        </span>
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  )
}

function InfoCard({
  image,
  imageSp,
  title,
  description,
  href,
  cta,
}: {
  image: string
  imageSp: string
  title: string
  description: string
  href: Route
  cta: string
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="relative aspect-[16/9]">
        <picture>
          <source media="(min-width: 768px)" srcSet={image} />
          <Image
            src={imageSp}
            alt={title}
            fill
            sizes="(min-width: 768px) 580px, 100vw"
            className="object-cover"
          />
        </picture>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-3 text-sm text-foreground/70">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand"
        >
          {cta} →
        </Link>
      </div>
    </div>
  )
}

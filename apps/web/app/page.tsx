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
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-ink">
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
        <div className="container-page relative flex h-full items-center">
          <div className="max-w-2xl text-white">
            <p className="font-en text-[11px] font-bold uppercase tracking-[0.4em] text-accent-red md:text-xs">
              Web Marketing Strategy
            </p>
            <h1 className="mt-5 font-mincho text-4xl font-bold leading-[1.35] tracking-wider md:text-6xl">
              ゼロから共に、短期間で
              <br />
              収益化を実現する
              <br />
              マーケティング戦略。
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-loose text-white/90 md:text-base">
              WEBセールスで成果を伸ばしたいすべての企業に、LINE・SNSを軸とした
              実践的なソリューションをご提案します。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-8 py-4 text-[13px] font-bold tracking-widest text-ink transition hover:bg-accent-red hover:text-white"
              >
                お問い合わせ
              </Link>
              <Link
                href="/service"
                className="border border-white/70 px-8 py-4 text-[13px] font-bold tracking-widest text-white transition hover:bg-white/10"
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
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/themes/top/images/top_image.jpg"
              alt="INFLU 代表"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm leading-loose text-ink-3 md:text-base">
              お客様の売上にコミットできるポイントを成長予測のうえで設計し、
              長期的にアドバイスし続けられる組織であり続けます。
            </p>
            <Link
              href={{ pathname: "/company", hash: "a01" }}
              className="inline-flex items-center gap-2 border border-ink px-7 py-3 text-[13px] font-bold tracking-widest transition hover:bg-ink hover:text-white"
            >
              代表メッセージを見る →
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
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            href="/service#a01"
            no="01"
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
            no="02"
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
            no="03"
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
        <div className="grid gap-10 md:grid-cols-3">
          <StrengthCard
            no="01"
            icon={<ChartLineIcon className="h-7 w-7" />}
            image="/images/themes/top/images/tsuyomi_image.png"
            title="実績に基づくマーケティング"
            description="150件以上の運用・構築実績から導いたフレームワークで、再現性のある成果を提供します。"
          />
          <StrengthCard
            no="02"
            icon={<TargetIcon className="h-7 w-7" />}
            image="/images/themes/top/images/project_image.jpg"
            title="プロジェクト最適なプラン"
            description="事業フェーズ・商材・ターゲットに合わせ、毎回プランをゼロから設計します。"
          />
          <StrengthCard
            no="03"
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
        background="muted-2"
      >
        <div className="mx-auto max-w-6xl">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/themes/top/images/promotion_image.png"
            />
            <Image
              src="/images/themes/top/images/promotion_image_sp.png"
              alt="プロモーション戦略フロー"
              width={1500}
              height={800}
              className="h-auto w-full"
            />
          </picture>
        </div>
      </Section>

      <Section eyebrow="Information" title="会社情報・貸し会議室">
        <div className="grid gap-8 md:grid-cols-2">
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
  no,
  image,
  title,
  items,
}: {
  href: Route
  no: string
  image: string
  title: string
  items: string[]
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden border border-rule bg-white transition hover:-translate-y-1 hover:border-ink"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="font-en text-[10px] font-bold uppercase tracking-[0.4em] text-accent-red">
          Service {no}
        </p>
        <h3 className="mt-3 font-mincho text-2xl font-bold tracking-wider">
          {title}
        </h3>
        <ul className="mt-5 flex-1 space-y-2.5 text-sm text-ink-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-3 shrink-0 bg-ink"
              />
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold tracking-widest">
          詳しく見る →
        </span>
      </div>
    </Link>
  )
}

function StrengthCard({
  no,
  icon,
  image,
  title,
  description,
}: {
  no: string
  icon: React.ReactNode
  image: string
  title: string
  description: string
}) {
  return (
    <article className="overflow-hidden bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="pt-6">
        <p className="font-en text-[10px] font-bold uppercase tracking-[0.4em] text-accent-red">
          Point {no}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center bg-ink text-white">
            {icon}
          </span>
          <h3 className="font-mincho text-xl font-bold tracking-wider">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-sm leading-loose text-ink-3">{description}</p>
      </div>
    </article>
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
    <article className="overflow-hidden border border-rule bg-white">
      <div className="relative aspect-[16/9]">
        <picture>
          <source media="(min-width: 768px)" srcSet={image} />
          <Image
            src={imageSp}
            alt={title}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </picture>
      </div>
      <div className="p-8">
        <h3 className="font-mincho text-xl font-bold tracking-wider">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-loose text-ink-3">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 border-b border-ink pb-1 text-[12px] font-bold tracking-widest"
        >
          {cta} →
        </Link>
      </div>
    </article>
  )
}

export const SITE = {
  name: "株式会社INFLU",
  shortName: "INFLU",
  tagline: "SNSを活用したマーケティング戦略",
  description:
    "株式会社INFLUは、LINE・SNSを軸にしたWEBプロモーションで企業の収益化を支援するマーケティングカンパニーです。",
  url: "https://influhp.com",
  copyrightYear: 2021,
} as const

export const CONTACTS = {
  tel: "06-7222-2971",
  telHref: "tel:0672222971",
  email: "influ70@influinfo.co.jp",
  line: "https://liff.line.me/1657054593-7xDVbxlW/landing",
} as const

import type { Route } from "next"

export type NavItem = { label: string; href: Route }

export const NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "事業内容", href: "/service" },
  { label: "LINEビジネス", href: "/line" },
  { label: "会社概要", href: "/company" },
  { label: "会社実績", href: "/our-performance" },
  { label: "CONTACT", href: "/contact" },
]

export const FOOTER_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "会社概要", href: "/company" },
  { label: "事業内容", href: "/service" },
  { label: "LINEビジネス", href: "/line" },
  { label: "会社実績", href: "/our-performance" },
  { label: "CONTACT", href: "/contact" },
]

export const COMPANY = {
  name: "株式会社INFLU",
  ceo: "水戸 亮太",
  established: "2019年12月",
  capital: "5,550,000円",
  postalCode: "550-0013",
  address: "大阪府大阪市西区新町1丁目8-3 林四ツ橋ビル 9階 901号室",
  business: [
    "WEBマーケティング",
    "アウトソーシング",
    "コンテンツ作成",
    "WEBエンジニア育成",
    "スクール運営",
    "データサイエンス経営改善",
    "飲食事業",
  ],
  access: [
    "Osaka Metro 四ツ橋線「四ツ橋」駅 2番出口 徒歩3分",
    "Osaka Metro 鶴見緑地線「西大橋」駅 2番出口 徒歩6分",
  ],
} as const

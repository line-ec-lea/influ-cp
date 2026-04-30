import "@repo/ui/src/styles/globals.css"
import "./globals.css"

import type { Metadata } from "next"
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { SITE } from "./lib/site-config"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-en-google",
  display: "swap",
})

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp-google",
  display: "swap",
})

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mincho-google",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.tagline} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.tagline} | ${SITE.name}`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "ja_JP",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJp.variable} ${notoSerifJp.variable} font-jp antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

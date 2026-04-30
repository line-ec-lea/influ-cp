"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/src/components/sheet"

import { CONTACTS, NAV } from "../lib/site-config"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container-page flex h-[72px] items-center justify-between md:h-[96px]">
        <Link
          href="/"
          className="flex items-center"
          aria-label="株式会社INFLU トップへ"
        >
          <Image
            src="/images/themes/top/images/logo.png"
            alt="株式会社INFLU"
            width={160}
            height={48}
            priority
            style={{ height: "auto" }}
            className="h-9 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.filter((n) => n.href !== "/contact").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-bold tracking-wider text-ink transition-colors hover:text-accent-red"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink px-7 py-3 text-[13px] font-bold tracking-wider text-white transition-colors hover:bg-accent-red"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={CONTACTS.telHref}
            aria-label="電話で問い合わせる"
            className="border border-ink px-3 py-2 text-[11px] font-bold tracking-widest text-ink"
          >
            TEL
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="メニューを開く"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink"
            >
              <span className="sr-only">メニュー</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">グローバルメニュー</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setOpen(false)
                    }}
                    className="border-b border-rule px-3 py-4 text-base font-bold tracking-wide text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

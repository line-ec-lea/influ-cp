"use client"

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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-en text-xl font-bold tracking-wider text-brand md:text-2xl">
            INFLU
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.filter((n) => n.href !== "/contact").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={CONTACTS.telHref}
            aria-label="電話で問い合わせる"
            className="rounded-md border border-brand px-3 py-2 text-xs font-bold text-brand"
          >
            TEL
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="メニューを開く"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            >
              <span className="sr-only">メニュー</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">グローバルメニュー</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
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

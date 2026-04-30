import type { ReactNode } from "react"

import { cn } from "@repo/ui/src/lib/utils"

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: ReactNode
  lead?: ReactNode
  align?: "left" | "center"
  background?: "default" | "muted" | "brand"
  className?: string
  children?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  align = "center",
  background = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "muted" && "bg-brand-muted",
        background === "brand" && "bg-brand text-brand-foreground",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || title || lead) && (
          <header
            className={cn(
              "mb-10 md:mb-14",
              align === "center" && "text-center",
            )}
          >
            {eyebrow && (
              <p className="mb-3 font-en text-sm font-bold uppercase tracking-[0.2em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
            )}
            {lead && (
              <p className="mt-5 text-sm text-foreground/70 md:text-base">
                {lead}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

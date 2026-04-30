import type { ReactNode } from "react"

import { cn } from "@repo/ui/src/lib/utils"

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: ReactNode
  lead?: ReactNode
  align?: "left" | "center"
  background?: "default" | "muted" | "muted-2" | "ink"
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
        "py-20 md:py-28",
        background === "muted" && "bg-brand-muted",
        background === "muted-2" && "bg-brand-muted-2",
        background === "ink" && "bg-ink text-white",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || title || lead) && (
          <header
            className={cn(
              "mb-12 md:mb-16",
              align === "center" && "text-center",
            )}
          >
            {eyebrow && (
              <p className="mb-4 font-en text-[11px] font-bold uppercase tracking-[0.4em] text-accent-red">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-mincho text-3xl font-bold tracking-wider md:text-5xl">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-6 text-sm leading-loose text-ink-3 md:text-base">
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

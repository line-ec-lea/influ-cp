import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-brand to-[#0f1f5a] py-20 text-brand-foreground md:py-28">
      <div className="container-page text-center">
        {eyebrow && (
          <p className="font-en text-xs font-bold uppercase tracking-[0.3em] opacity-80 md:text-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
        {lead && (
          <p className="mx-auto mt-6 max-w-2xl text-sm opacity-90 md:text-base">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}

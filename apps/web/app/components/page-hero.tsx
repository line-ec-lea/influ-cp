import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
}

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative bg-ink py-20 text-white md:py-28">
      <div className="container-page text-center">
        {eyebrow && (
          <p className="font-en text-[11px] font-bold uppercase tracking-[0.4em] text-accent-red md:text-xs">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-mincho text-3xl font-bold tracking-wider md:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-white/85 md:text-base">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}

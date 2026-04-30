import type { Route } from "next"
import Link from "next/link"

type Crumb = { label: string; href?: Route }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="パンくずリスト"
      className="border-b border-border bg-brand-muted"
    >
      <ol className="container-page flex flex-wrap items-center gap-x-2 py-3 text-xs text-foreground/70 md:text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

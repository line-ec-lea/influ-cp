"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { cn } from "@repo/ui/src/lib/utils"

const SLIDES = [
  {
    pc: "/images/themes/top/images/slide1.jpg",
    sp: "/images/themes/top/images/slide1_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide2.jpg",
    sp: "/images/themes/top/images/slide2_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide3.jpg",
    sp: "/images/themes/top/images/slide3_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide4.jpg",
    sp: "/images/themes/top/images/slide4_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide5.jpg",
    sp: "/images/themes/top/images/slide5_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide6.jpg",
    sp: "/images/themes/top/images/slide6_sp.jpg",
  },
  {
    pc: "/images/themes/top/images/slide7.jpg",
    sp: "/images/themes/top/images/slide7_sp.jpg",
  },
] as const

const INTERVAL_MS = 5000

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="absolute inset-0">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.pc}
          aria-hidden={i === index ? undefined : "true"}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={slide.pc} />
            <Image
              src={slide.sp}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </picture>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            type="button"
            key={slide.pc}
            aria-label={`スライド ${i + 1} を表示`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              setIndex(i)
            }}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index
                ? "w-8 bg-background"
                : "w-1.5 bg-background/50 hover:bg-background/80",
            )}
          />
        ))}
      </div>
    </div>
  )
}

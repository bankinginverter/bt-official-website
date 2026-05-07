"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"

export default function HighlightMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const isHovered = useRef(false)

  useEffect(() => {
    let animationId: number
    const marquee = marqueeRef.current
    if (!marquee) return

    const scroll = () => {
      if (marquee && !isHovered.current) {
        marquee.scrollLeft += 0.5
        if (marquee.scrollLeft >= marquee.scrollWidth / 3) {
          marquee.scrollLeft -= marquee.scrollWidth / 3
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const images = [
    "/bubblebaby.png",
    "/bubbleshooter.png",
    "/catchfruit.png",
    "/luckyspin.png",
    "/matching.png",
    "/question.png",
    "/photobooth1.jpeg",
  ]

  return (
    <div
      ref={marqueeRef}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
      className="w-full overflow-x-auto flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <div className="flex w-max">
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-[240px] h-[360px] md:w-[300px] md:h-[450px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg cursor-pointer bg-white dark:bg-transparent transition-colors"
              >
                <Image
                  src={src}
                  alt={`Highlight Product ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

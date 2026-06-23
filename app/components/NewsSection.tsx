"use client"
import { useState } from "react"
import Image from "next/image"

type AllItem = {
  category: string
  title: string
  detail: string
  date: string
  img?: string
}

type NewsSectionProps = {
  dataItem: AllItem[]
}

export default function NewsSection({ dataItem }: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = [
    "All",
    "Game Event",
    "Photo Booth",
    "Event Management",
    "News",
  ]

  const filteredNews =
    selectedCategory === "All"
      ? dataItem
      : dataItem.filter((item) => item.category === selectedCategory)

  return (
    <section
      aria-labelledby="news-heading"
      className="lg:col-span-2 space-y-12"
    >
      <div className="flex justify-between items-end">
        <h2
          id="news-heading"
          className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white transition-colors"
        >
          What New
        </h2>
        <div className="flex gap-4 text-xs font-bold text-slate-400 dark:text-white/40 transition-colors">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`hover:text-orange-500 ${
                selectedCategory === cat ? "text-orange-500" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredNews.map((item, i) => (
          <article key={i} className="flex gap-6 group cursor-pointer">
            <div className="relative w-48 h-32 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shadow-sm dark:shadow-none shrink-0 overflow-hidden transition-colors">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="192px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/50 dark:from-white/5 to-transparent dark:to-white/0 group-hover:scale-110 transition-transform" />
              )}
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded uppercase tracking-widest">
                {item.category}
              </span>
              <h4 className="text-lg font-bold leading-tight text-slate-900 dark:text-white group-hover:text-orange-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-white/40 line-clamp-2 transition-colors">
                {item.detail}
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 dark:text-white/60 transition-colors">
                <span className="w-4 h-4 rounded-full bg-slate-300 dark:bg-white/10 transition-colors" />{" "}
                {item.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

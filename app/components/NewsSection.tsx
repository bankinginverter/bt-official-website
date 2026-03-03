import { useState } from "react"

type NewsItem = {
  category: string
  title: string
  detail: string
  date: string
}

type NewsSectionProps = {
  news: NewsItem[]
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Game Event", "AR", "VR", "Interactive"]

  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((item) => item.category === selectedCategory)

  return (
    <div className="lg:col-span-2 space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-black uppercase tracking-tight">
          What New
        </h2>
        <div className="flex gap-4 text-xs font-bold text-white/40">
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
          <div key={i} className="flex gap-6 group cursor-pointer">
            <div className="w-48 h-32 rounded-lg bg-white/5 border border-white/10 shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 group-hover:scale-110 transition-transform" />
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded uppercase tracking-widest">
                {item.category}
              </span>
              <h4 className="text-lg font-bold leading-tight group-hover:text-orange-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-white/40 line-clamp-2">
                {item.detail}
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-white/60">
                <span className="w-4 h-4 rounded-full bg-white/10" />{" "}
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

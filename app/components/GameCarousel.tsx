import { useRef, useState } from "react"

type Game = {
  title: string
  followers: string
  image?: string
}

type GamesCarouselProps = {
  games: Game[]
  onSelect: (game: Game) => void
}

export default function GamesCarousel({ games, onSelect }: GamesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div className="relative group">
      {/* ปุ่มเลื่อน */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
               bg-black/50 text-white w-12 h-12 flex items-center justify-center 
               rounded-full hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
               bg-black/50 text-white w-12 h-12 flex items-center justify-center 
               rounded-full hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        ›
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide gap-6 px-10"
      >
        {games.map((game, i) => (
          <TiltCard key={i} game={game} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

function TiltCard({
  game,
  onSelect,
}: {
  game: Game
  onSelect: (g: Game) => void
}) {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)")

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 6
    const rotateY = ((x - centerX) / centerX) * 6

    setTransform(`rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)")
  }

  return (
    <div
      className="group cursor-pointer flex-shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/6"
      onClick={() => onSelect(game)}
      style={{ perspective: "1000px" }}
    >
      <div
        className="aspect-[3/4] rounded-xl bg-white/5 border border-white/5 overflow-hidden mb-3 relative transition-transform duration-200"
        style={{ transformStyle: "preserve-3d", transform }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${game.image ?? "/logo.png"})` }}
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-[10px] font-bold text-white/80">
            {game.followers}
          </p>
        </div>
      </div>
      <h3 className="text-xs font-bold uppercase tracking-wide truncate">
        {game.title}
      </h3>
    </div>
  )
}

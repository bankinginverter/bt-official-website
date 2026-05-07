"use client"
import Image from "next/image"
import { useState } from "react"
import GameModal from "@/app/components/GameModal"

import { games, type GameItem } from "@/app/data-collection/gameData"

export default function GameProducts() {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null)
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {games.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedGame(item)}
            className="relative aspect-[9/16] cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-white/5 hover:-translate-y-2 group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  )
}

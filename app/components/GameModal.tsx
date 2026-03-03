import Image from "next/image"

type Game = {
  title: string
  followers: string
  image?: string
}

type GameModalProps = {
  game: Game | null
  onClose: () => void
}

export default function GameModal({ game, onClose }: GameModalProps) {
  if (!game) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✕
        </button>
        {game.image && (
          <Image
            src={game.image}
            alt={game.title}
            width={400}
            height={600}
            className="w-full h-auto rounded-lg mb-4 object-contain"
          />
        )}
        <h2 className="text-lg font-bold mb-2">{game.title}</h2>
        <p className="text-sm text-gray-600">{game.followers}</p>
      </div>
    </div>
  )
}

import Image from "next/image"

type Game = {
  title: string
  description: string
  src?: string
}

type GameModalProps = {
  game: Game | null
  onClose: () => void
}

export default function GameModal({ game, onClose }: GameModalProps) {
  if (!game) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 dark:text-white rounded-xl max-w-md w-full px-6 pb-6 pt-14 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:text-red-600 hover:bg-red-100 dark:text-slate-400 dark:hover:text-red-400 dark:hover:bg-red-900/40 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {game.src && (
          <Image
            src={game.src}
            alt={game.title}
            width={400}
            height={600}
            className="w-full h-auto rounded-lg mb-4 object-contain"
          />
        )}
        <h2 className="text-lg font-bold mb-2">{game.title}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {game.description}
        </p>
      </div>
    </div>
  )
}

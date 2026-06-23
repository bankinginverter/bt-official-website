import Image from "next/image"

export default function FloatingLineButton() {
  return (
    <a
      href="https://line.me/R/ti/p/YOUR_LINE_ID"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 group border border-slate-100 dark:border-slate-700"
      aria-label="Contact us on LINE"
    >
      <div className="relative w-8 h-8">
        <Image
          src="/lineIcon.png"
          alt="Line Icon"
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ติดต่อสอบถาม
        {/* Triangle pointer */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-[1px] border-[6px] border-transparent border-l-slate-900 dark:border-l-white"></span>
      </span>
    </a>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { RefObject } from "react"

type NavbarProps = {
  aboutUsRef?: RefObject<HTMLElement | null>
}

export default function Navbar({ aboutUsRef }: NavbarProps) {
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/">
            <div className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center transform rotate-45 shadow-lg shadow-[#2272FF]/20 cursor-pointer">
              <span className="transform -rotate-45 font-black text-xl">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={600}
                  height={700}
                  sizes="(max-width: 768px) 33vw, 250px"
                  className="object-contain"
                />
              </span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60 transition-colors">
            <Link href="/" className="hover:text-[#48C6EF] transition">
              Home
            </Link>
            <Link
              href="/Products/Games"
              className="hover:text-[#48C6EF] transition"
            >
              Products
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {/* --- Theme Toggle Button --- */}
          <button
            onClick={toggleTheme}
            className="w-14 h-8 flex items-center rounded-full p-1 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 shadow-sm transform transition-transform duration-300 dark:translate-x-6 flex items-center justify-center">
              <span className="hidden dark:block text-[10px]">☀️</span>
              <span className="block dark:hidden text-[10px]">🌙</span>
            </div>
          </button>
          <button
            onClick={() => {
              if (aboutUsRef?.current) {
                aboutUsRef.current.scrollIntoView({ behavior: "smooth" })
              } else {
                window.location.href = "/#about-us"
              }
            }}
            className="px-6 py-2 bg-[#2272FF] hover:bg-[#48C6EF] rounded-md text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#2272FF]/20 transition-all text-white"
          >
            About Us
          </button>
        </div>
      </div>
    </nav>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { RefObject, useState } from "react"
import { useRouter } from "next/navigation"

type NavbarProps = {
  aboutUsRef?: RefObject<HTMLElement | null>
}

export default function Navbar({ aboutUsRef }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const router = useRouter()

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
          <Link href="/" className="cursor-pointer block">
            <Image
              src="/NewLogo.png"
              alt="Logo Light Mode"
              width={100}
              height={100}
              className="object-contain w-12 h-12 block"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/60 transition-colors">
            <Link href="/" className="hover:text-[#48C6EF] transition py-2">
              Home
            </Link>
            <Link href="/news" className="hover:text-[#48C6EF] transition py-2">
              News
            </Link>
            <div className="relative group">
              <div
                tabIndex={0}
                className="hover:text-[#48C6EF] transition py-2 flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                Products
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg shadow-xl flex flex-col py-2">
                  <Link
                    href="/games"
                    className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#48C6EF] transition-colors"
                  >
                    Games
                  </Link>
                  <Link
                    href="/photobooth"
                    className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#48C6EF] transition-colors"
                  >
                    PhotoBooth
                  </Link>
                  <Link
                    href="/eventmanagement"
                    className="px-4 py-2 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#48C6EF] transition-colors"
                  >
                    Event Management
                  </Link>
                </div>
              </div>
            </div>
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
            onClick={() => router.push("/contact-us")}
            className="hidden sm:block px-6 py-2 bg-[#2272FF] hover:bg-[#48C6EF] rounded-md text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#2272FF]/20 transition-all text-white"
          >
            Contact Us
          </button>

          {/* --- Hamburger Menu Button --- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 rounded-md text-slate-600 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] border-b"
            : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col py-6 px-6 gap-6 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-white/80">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#48C6EF] transition"
          >
            Home
          </Link>

          <Link
            href="/news"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-[#48C6EF] transition"
          >
            News
          </Link>

          <div className="flex flex-col gap-4">
            <div
              className="flex items-center justify-between cursor-pointer hover:text-[#48C6EF] transition"
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMobileProductsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Mobile Products Submenu */}
            <div
              className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${
                isMobileProductsOpen
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/Products/Games"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#48C6EF] transition text-xs"
              >
                Games
              </Link>
              <Link
                href="/Products/PhotoBooth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#48C6EF] transition text-xs"
              >
                PhotoBooth
              </Link>
              <Link
                href="/Products/EventManagement"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#48C6EF] transition text-xs"
              >
                Event Management
              </Link>
            </div>
          </div>

          {/* About Us button inside mobile menu for very small screens */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              router.push("/contact-us")
            }}
            className="mt-2 py-3 bg-[#2272FF] hover:bg-[#48C6EF] rounded-md text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#2272FF]/20 transition-all text-white w-full sm:hidden"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

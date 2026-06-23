import type { Metadata } from "next"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import ContactForm from "@/app/components/ContactForm"
import GameProducts from "@/app/components/GameProducts"
import Link from "next/link"

export const metadata: Metadata = {
  title: "เกมอีเวนท์ (Game Event) & 5 ไอเดียจัดตู้เกมงานแต่ง | JORJOY",
  description:
    "สำรวจเกมสำหรับงานอีเวนท์ที่หลากหลายของเรา และ 5 ไอเดียการเลือกตู้เกม Interactive ให้เข้ากับธีมงานแต่งงาน สร้างประสบการณ์ที่น่าจดจำด้วยเทคโนโลยีล้ำสมัย",
  keywords: [
    "ตู้เกมงานแต่ง",
    "Game Event",
    "กิจกรรมงานแต่ง",
    "Interactive Event",
    "ตู้เกมอีเวนท์",
    "JORJOY",
    "ไอเดียงานแต่ง",
    "After Party Event",
  ],
  alternates: {
    canonical: "/games",
  },
}

export default function GamePage() {
  return (
    <main className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen font-sans selection:bg-[#2272FF] selection:text-white transition-colors duration-500">
      {/* --- Navbar --- */}
      <Navbar />
      {/* --- Hero Section --- */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/videobackground.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient to fade into the background at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-black/20 to-slate-50 dark:to-black transition-colors duration-500" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
            {/* Left Column: Text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-tight tracking-tight text-white py-2">
                <span className="block mb-2">เปลี่ยนทุกงานอีเวนท์</span>
                <span className="block mb-2">
                  ให้สนุก <span className="text-[#48C6EF]">ด้วยตู้เกม</span>
                </span>
                <span className="block mb-2 inline-block py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
                  Interactive
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
                  สุดล้ำ
                </span>
              </h1>
              <p className="text-[#48C6EF] text-sm md:text-base max-w-md leading-relaxed">
                มาร่วมสร้างประสบการณ์ที่เหนือกว่า ด้วยตู้เกม INTERACTIVE และ
                PHOTO BOOTH ยกระดับความสนุก สำหรับงานอีเวนท์ของคุณ
                รองรับทั้งคุณผู้ร่วมงาน
              </p>
              <div className="pt-6">
                <a
                  href="#contact-us"
                  className="px-8 py-3 bg-[#2272FF] hover:bg-[#48C6EF] rounded text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all group text-white shadow-lg shadow-[#2272FF]/20"
                >
                  START EXPLORING
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Overlapping Images */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
              {/* Glowing Pedestal */}
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[80%] md:w-[70%] h-[40px] rounded-[100%] bg-[#2272FF] blur-[50px] opacity-70 z-0"></div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[60%] md:w-[50%] h-[15px] rounded-[100%] bg-[#48C6EF] blur-[15px] opacity-90 z-0"></div>
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[45%] md:w-[35%] h-[2px] rounded-[100%] bg-white blur-[1px] opacity-80 z-0"></div>

              {/* Left Image (Matching) */}
              <div className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 -rotate-12 w-[40%] sm:w-[35%] max-w-[220px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-500 hover:rotate-0 hover:z-30 hover:scale-105 bg-white dark:bg-black/50">
                <Image
                  src="/matching.png"
                  alt="Matching Game"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 250px"
                />
              </div>

              {/* Right Image (Catch Fruit) */}
              <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 rotate-12 w-[40%] sm:w-[35%] max-w-[220px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-500 hover:rotate-0 hover:z-30 hover:scale-105 bg-white dark:bg-black/50">
                <Image
                  src="/catchfruit.png"
                  alt="Catch Fruit Game"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 250px"
                />
              </div>

              {/* Center Image (Bubble Baby) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[45%] sm:w-[40%] max-w-[260px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl shadow-[#2272FF]/40 transition-all duration-500 hover:scale-105 bg-white dark:bg-black/50">
                <Image
                  src="/bubblebaby.png"
                  alt="Bubble Baby Game"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* --- About Company Section --- */}
      <section
        id="about-us"
        className="scroll-mt-28 py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-normal md:leading-[1.4]">
            ทำไมต้องเช่าตู้เกมและจัด <br className="hidden md:block" />
            <span className="inline-block py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              Game Event กับ JORJOY?
            </span>
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/90 leading-relaxed font-medium transition-colors">
              การเลือก <span className="font-bold">เช่าตู้เกมงานแต่ง</span> ไม่เพียงแต่ช่วยละลายพฤติกรรม (Ice Breaking) ให้แขกในงานได้มีกิจกรรมทำร่วมกัน แต่ยังช่วยสร้างภาพจำที่แตกต่างและยกระดับภาพลักษณ์การจัดงานอีเวนท์ของคุณด้วย
            </p>
            <p className="text-base md:text-lg text-slate-500 dark:text-white/80 leading-relaxed transition-colors">
              ที่ JORJOY เราคือผู้เชี่ยวชาญด้าน Game Event & Photo Booth ตัวจริงที่พร้อมเนรมิตความสนุกให้งานอีเวนท์ทุกรูปแบบ:
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#48C6EF] to-[#2272FF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#2272FF]/20">
              🎨
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Customization
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              ปรับแต่งกราฟิก โลโก้ และโทนสีบนหน้าจอตู้เกมให้เข้ากับธีมงานอีเวนท์ของคุณได้ 100%
            </p>
          </article>
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2272FF] to-[#9B51E0] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#9B51E0]/20">
              ✨
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Premium Experience
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              ตู้เกมดีไซน์โมเดิร์น มินิมอล วางมุมไหนของงานอีเวนท์ก็ดูสวยงาม เป็นระเบียบ ไม่รกตา
            </p>
          </article>
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9B51E0] to-[#48C6EF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#48C6EF]/20">
              👨‍💻
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Professional Staff
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              มีทีมงานมืออาชีพสแตนบายดูแลระบบและอำนวยความสะดวกให้แขกในงานอีเวนท์ตลอดทั้งงาน
            </p>
          </article>
        </div>
      </section>
      {/* --- Product Section --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Currently
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              Games
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-white/60 font-medium transition-colors">
            สนุกไปกับเกมที่หลากหลาย
            ออกแบบมาเพื่อสร้างประสบการณ์สุดพิเศษให้กับงานของคุณ
          </p>
        </div>
        <GameProducts />
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-16 px-6 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] transition-colors">
                JORJOY
              </div>
              <p className="text-xs text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
                เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ
                เพื่อสรรค์สร้างความสนุกในรูปแบบใหม่
                พร้อมเปลี่ยนทุกประสบการณ์ให้ล้ำสมัย
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4
                id="footer-services-heading"
                className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors"
              >
                Our Services
              </h4>
              <nav
                aria-labelledby="footer-services-heading"
                className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors"
              >
                <Link
                  href="#game-event"
                  className="hover:text-[#48C6EF] transition"
                >
                  Game Event
                </Link>
                <Link
                  href="#photo-booth"
                  className="hover:text-[#48C6EF] transition"
                >
                  Photo Booth
                </Link>
                <Link
                  href="#event-management"
                  className="hover:text-[#48C6EF] transition"
                >
                  Event Management
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4
                id="footer-company-heading"
                className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors"
              >
                Company
              </h4>
              <nav
                aria-labelledby="footer-company-heading"
                className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors"
              >
                <Link
                  href="/contact-us"
                  className="hover:text-[#48C6EF] transition"
                >
                  Contact Us
                </Link>
                <Link href="/#news" className="hover:text-[#48C6EF] transition">
                  News & Articles
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors">
                Contact Us
              </h4>
              <address className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors not-italic">
                <a
                  href="mailto:jorjoy@gmail.com"
                  className="hover:text-[#48C6EF] transition"
                >
                  jorjoy@gmail.com
                </a>
                <a
                  href="tel:+66000000000"
                  className="hover:text-[#48C6EF] transition"
                >
                  +66 (0) 00-000-0000
                </a>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
            <p className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest transition-colors">
              © 2026 JORJOY. ALL RIGHTS RESERVED.
            </p>
            <nav
              aria-label="Legal Policies"
              className="flex gap-6 text-[10px] font-bold uppercase text-slate-400 dark:text-white/40 tracking-widest transition-colors"
            >
              <Link href="/terms" className="hover:text-[#48C6EF] transition">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-[#48C6EF] transition">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}

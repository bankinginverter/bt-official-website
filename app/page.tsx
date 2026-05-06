"use client"

import Image from "next/image"
import NewsSection from "./components/NewsSection"
import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar"
import { useRef, useEffect } from "react"

export default function GamingHub() {
  const aboutUsRef = useRef<HTMLElement>(null)
  const gameEventRef = useRef<HTMLDivElement>(null)
  const contactus = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const isHovered = useRef(false)

  useEffect(() => {
    let animationId: number
    const marquee = marqueeRef.current
    if (!marquee) return

    const scroll = () => {
      if (marquee && !isHovered.current) {
        marquee.scrollLeft += 1
        if (marquee.scrollLeft >= marquee.scrollWidth / 3) {
          marquee.scrollLeft -= marquee.scrollWidth / 3
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const news = [
    {
      category: "Game Event",
      title:
        "Racing Run เกมวิ่งแข่งสำหรับไวมันส์รองรับผู้เล่นสูงสุดได้ถึง 4 คน",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "KOTAKU • 2 HOURS AGO",
      img: "/Racingrun.png",
    },
    {
      category: "Event Management",
      title:
        "Event Manage System ระบบดูแลงานอีเวนท์ ที่จะทำงานอีเวนท์ของคุณควบคุมได้แค่ปลายนิ้ว",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "KOTAKU • 2 HOURS AGO",
      img: "/event1.png",
    },
  ]

  return (
    <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen font-sans selection:bg-[#2272FF] selection:text-white transition-colors duration-500">
      {/* --- Navbar --- */}
      <Navbar />
      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
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
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 z-10 py-12 md:py-24">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              <span>Create Innovation</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
                Elevate Your Experience
              </span>
            </h1>
            <span className="text-[#48C6EF] text-xs font-bold uppercase tracking-[0.3em]">
              Play Innovate Elevate
            </span>
            <button
              onClick={() =>
                contactus.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-10 py-4 bg-[#2272FF] hover:bg-[#48C6EF] rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all group text-white"
            >
              Start Project
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* --- About Company Section --- */}
      <section
        id="about-us"
        ref={aboutUsRef}
        className="scroll-mt-28 py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Why Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              Bright Vanta
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/90 leading-relaxed font-medium transition-colors">
            เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ
            เพื่อสรรค์สร้างความสนุกในรูปแบบใหม่
            พร้อมเปลี่ยนทุกประสบการณ์ให้ล้ำสมัยและทำให้งานของคุณให้มีระดับน่าจดจำมากยิ่งขึ้น
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#48C6EF] to-[#2272FF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#2272FF]/20">
              🚀
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Cutting-Edge Tech
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              ใช้เทคโนโลยีที่เกี่ยวกับ Interactive
              เพื่อสร้างประสบการณ์ที่เหนือกว่าให้แก่ผลิตภัณฑ์และงาน Event ของคุณ
            </p>
          </div>
          <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2272FF] to-[#9B51E0] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#9B51E0]/20">
              🎮
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Customization
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              ผลิตภัณฑ์ของเราออกแบบมาเพื่อสร้างให้ตรงกับความต้องการของลูกค้า
              และลูกค้าสามารถปรับแต่งได้เพื่อให้เหมาะสมกับความสนุกที่ต้องการได้อย่างไม่มีขีดจำกัด
            </p>
          </div>
          <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9B51E0] to-[#48C6EF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#48C6EF]/20">
              ✨
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Premium Experience
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              เราไม่ได้เพียงแค่สร้างผลิตภัณฑ์
              แต่เราช่วยยกระดับภาพลักษณ์ให้งานของคุณดูพรีเมียม เป็นมืออาชีพ
              และโดดเด่นกว่าที่เคย
            </p>
          </div>
        </div>
      </section>
      {/* --- Products & Services Section --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Our Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              & Services
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-white/60 max-w-2xl font-medium transition-colors">
            ผลิตภัณฑ์และบริการของเราถูกออกแบบมาเพื่อตอบโจทย์ทุกความสนุก
            และยกระดับการจัดการในงาน Event ของคุณให้สมบูรณ์แบบ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Card 1: Game Event */}
          <div
            id="game-event"
            ref={gameEventRef}
            className="scroll-mt-28 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-3xl p-8 md:p-12 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full"
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto lg:mx-0 bg-gradient-to-br from-[#48C6EF] to-[#2272FF] rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg shadow-[#2272FF]/20 mb-6">
                🕹️
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight text-slate-900 dark:text-white transition-colors">
                Game Event
              </h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
                เปลี่ยนพื้นที่ในงานของคุณให้เป็นโซนแห่งความสนุกด้วยเกมตู้ KIOSK
                ที่หลากหลาย เล่นง่าย
                ดึงดูดผู้เข้าร่วมงานและสร้างสีสันได้อย่างยอดเยี่ยม
              </p>
            </div>

            {/* 6 Images Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-3 gap-3 md:gap-4 shrink-0">
              {[
                "/catchfruit.png",
                "/bubbleshooter.png",
                "/matching.png",
                "/luckyspin.png",
                "/question.png",
                "/bubblebaby.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-white dark:bg-transparent"
                >
                  <Image
                    src={src}
                    alt={`Game product ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 250px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Card 2: Photo Booth */}
          <div
            id="photo-booth"
            className="scroll-mt-28 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-3xl p-8 md:p-12 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 w-full"
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto lg:mx-0 bg-gradient-to-br from-[#2272FF] to-[#9B51E0] rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg shadow-[#9B51E0]/20 mb-6">
                📸
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight text-slate-900 dark:text-white transition-colors">
                Photo Booth
              </h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
                เก็บบันทึกความทรงจำสุดประทับใจด้วย PhotoBooth
                ที่มาพร้อมกรอบรูปพิเศษ เอฟเฟกต์ตกแต่งมากมาย และแชร์ลง Social
                Media ได้ทันที
              </p>
            </div>

            {/* 3 Images Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-3 gap-3 md:gap-4 shrink-0">
              {/* รูปที่ 1 */}
              <div className="relative aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-white dark:bg-transparent">
                <Image
                  src="/photobooth1.jpeg"
                  alt="Photo Booth 1"
                  fill
                  sizes="(max-width: 768px) 33vw, 250px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* รูปที่ 2 */}
              <div className="relative aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-white dark:bg-transparent">
                <Image
                  src="/photobooth2.jpeg"
                  alt="Photo Booth 2"
                  fill
                  sizes="(max-width: 768px) 33vw, 250px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* รูปที่ 3 */}
              <div className="relative aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-white dark:bg-transparent">
                <Image
                  src="/photobooth3.jpeg"
                  alt="Photo Booth 3"
                  fill
                  sizes="(max-width: 768px) 33vw, 250px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          {/* Card 3: Event Management System */}
          <div
            id="event-management"
            className="scroll-mt-28 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-3xl p-8 md:p-12 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full"
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto lg:mx-0 bg-gradient-to-br from-[#9B51E0] to-[#48C6EF] rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg shadow-[#48C6EF]/20 mb-6">
                ⚙️
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 dark:text-white transition-colors">
                  Event Management Software
                </h3>
                <span className="shrink-0 whitespace-nowrap px-3 py-1 bg-gradient-to-r from-[#9B51E0] to-[#48C6EF] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#48C6EF]/20">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm md:text-base text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
                ระบบจัดการงาน Event แบบครบวงจร ทั้งระบบลงทะเบียนหน้างาน
                ระบบจองคิว และการดูแล User
                เพื่อให้การดำเนินงานลื่นไหลและเป็นมืออาชีพ
              </p>
            </div>

            {/* 5 Images Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-6 gap-3 md:gap-4 shrink-0">
              {["/event1.png", "/event2.png", "/event5.png"].map(
                (src, index) => (
                  <div
                    key={index}
                    className={`relative col-span-2 aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg bg-white dark:bg-transparent ${index === 3 ? "col-start-2" : ""}`}
                  >
                    <Image
                      src={src}
                      alt={`Event Management ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 33vw, 250px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Product Section --- */}
      <section className="py-20 overflow-hidden relative border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center md:text-left">
            Highlight <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              Products
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-white/60 mt-4 text-center md:text-left font-medium transition-colors">
            สัมผัสประสบการณ์ความสนุกจากผลิตภัณฑ์ยอดฮิตของเรา
            ที่พร้อมยกระดับงานของคุณ
          </p>
        </div>

        <div
          ref={marqueeRef}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          className="w-full overflow-x-auto flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          <div className="flex w-max">
            {/* ทำการ Duplicate ข้อมูล 3 ชุดเพื่อให้การ Loop ไร้รอยต่ออย่างสมบูรณ์ */}
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                {[
                  "/bubblebaby.png",
                  "/bubbleshooter.png",
                  "/catchfruit.png",
                  "/luckyspin.png",
                  "/matching.png",
                  "/question.png",
                  "/photobooth1.jpeg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative w-[240px] h-[360px] md:w-[300px] md:h-[450px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg cursor-pointer bg-white dark:bg-transparent transition-colors"
                  >
                    <Image
                      src={src}
                      alt={`Highlight Product ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 240px, 300px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- News Section --- */}
      <div
        id="news"
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        <NewsSection news={news} />

        {/* --- Newsletter & Sidebar --- */}
        <div className="space-y-12">
          <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 space-y-6 transition-all">
            <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white transition-colors">
              หากต้องการรับข่าวสาร <br /> หรือเนื้อหาใหม่ๆจากทางเรา
            </h3>
            <p className="text-xs text-slate-500 dark:text-white/40 leading-relaxed uppercase tracking-wider transition-colors">
              สามารถส่ง email มาหาเราได้เลย หรือเลือกช่องทางอื่น ๆ ด้านล่าง
            </p>

            {/* ช่องทาง Email */}
            <div className="space-y-3">
              <button className="w-full py-3 bg-[#2272FF] hover:bg-[#48C6EF] rounded-lg text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-[#2272FF]/20 text-white">
                ส่ง Email
              </button>
            </div>

            {/* ช่องทางอื่น ๆ */}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://line.me/R/ti/p/YOUR_LINE_ID"
                target="_blank"
                className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-white/60 hover:text-[#48C6EF] transition-colors"
              >
                <Image
                  src="/lineIcon.png"
                  alt="LineIcon"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                ติดต่อผ่าน Line
              </a>

              <a
                href="https://instagram.com/YOUR_INSTAGRAM"
                target="_blank"
                className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-white/60 hover:text-[#48C6EF] transition-colors"
              >
                <Image
                  src="/instagramIcon.png"
                  alt="instagramIcon"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                ติดตามผ่าน Instagram
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 transition-colors">
              Review From Customer
            </h3>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 shadow-sm dark:shadow-none shrink-0 transition-colors" />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-bold leading-tight text-slate-900 dark:text-white line-clamp-2 uppercase group-hover:text-[#48C6EF] transition-colors">
                    Guerilla Games Hints At New Horizon Zero Dawn Sequel
                  </h5>
                  <span className="text-[9px] text-slate-400 dark:text-white/30 font-bold uppercase tracking-widest transition-colors">
                    22.04.2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- Contact Us Section --- */}
      <div id="contact-us" ref={contactus}>
        <ContactForm />
      </div>
      {/* --- Footer --- */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-16 px-6 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] transition-colors">
                BRIGHT VANTA
              </div>
              <p className="text-xs text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
                เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ
                เพื่อสรรค์สร้างความสนุกในรูปแบบใหม่
                พร้อมเปลี่ยนทุกประสบการณ์ให้ล้ำสมัย
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors">
                Our Services
              </h4>
              <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors">
                <a
                  href="#game-event"
                  className="hover:text-[#48C6EF] transition"
                >
                  Game Event
                </a>
                <a
                  href="#photo-booth"
                  className="hover:text-[#48C6EF] transition"
                >
                  Photo Booth
                </a>
                <a
                  href="#event-management"
                  className="hover:text-[#48C6EF] transition"
                >
                  Event Management
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors">
                Company
              </h4>
              <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors">
                <a href="#" className="hover:text-[#48C6EF] transition">
                  About Us
                </a>
                <a href="#" className="hover:text-[#48C6EF] transition">
                  Our Works / Portfolio
                </a>
                <a href="#news" className="hover:text-[#48C6EF] transition">
                  News & Articles
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest transition-colors">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-white/60 font-medium transition-colors">
                <a
                  href="mailto:hello@brightvanta.com"
                  className="hover:text-[#48C6EF] transition"
                >
                  hello@brightvanta.com
                </a>
                <a
                  href="tel:+66000000000"
                  className="hover:text-[#48C6EF] transition"
                >
                  +66 (0) 00-000-0000
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
            <p className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest transition-colors">
              © 2026 BRIGHT VANTA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-[10px] font-bold uppercase text-slate-400 dark:text-white/40 tracking-widest transition-colors">
              <a href="#" className="hover:text-[#48C6EF] transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#48C6EF] transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Image from "next/image"
import Navbar from "../../components/Navbar"
export default function Game() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
            {/* Left Column: Text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                <span>Create Innovation</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
                  Elevate Your Experience
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]"></span>
              </h1>
              <span className="text-[#48C6EF] text-xs font-bold uppercase tracking-[0.3em]">
                Play Innovate Elevate
              </span>
              <button className="px-10 py-4 bg-[#2272FF] hover:bg-[#48C6EF] rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all group text-white">
                Start Exploring{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* Right Column: Overlapping Images */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[45%] sm:w-[40%] max-w-[260px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/20 shadow-2xl shadow-[#2272FF]/30 transition-all duration-500 hover:scale-105 bg-white dark:bg-black/50">
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
      </section>
      {/* --- About Company Section --- */}
      <section
        id="about-us"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            { src: "/bubblebaby.png", alt: "Bubble Baby" },
            { src: "/bubbleshooter.png", alt: "Bubble Shooter" },
            { src: "/catchfruit.png", alt: "Catch Fruit" },
            { src: "/luckyspin.png", alt: "Lucky Spin" },
            { src: "/matching.png", alt: "Matching" },
            { src: "/question.png", alt: "Question" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-white/5 hover:-translate-y-2 group"
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
      </section>

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

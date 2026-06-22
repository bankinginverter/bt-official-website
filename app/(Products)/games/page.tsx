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
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
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
              <a
                href="#contact-us"
                className="px-10 py-4 bg-[#2272FF] hover:bg-[#48C6EF] rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all group text-white"
              >
                Start Exploring
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
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
      </header>
      {/* --- About Company Section --- */}
      <section
        id="about-us"
        className="scroll-mt-28 py-20 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            ทำไม ต้องเลือก <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              JORJOY
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/90 leading-relaxed font-medium transition-colors">
            เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ
            เพื่อสรรค์สร้างความสนุกในรูปแบบใหม่
            พร้อมเปลี่ยนทุกประสบการณ์ให้ล้ำสมัยและทำให้งานของคุณให้มีระดับน่าจดจำมากยิ่งขึ้น
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#48C6EF] to-[#2272FF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#2272FF]/20">
              🚀
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Technology-Driven Fun
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              เราใช้เทคโนโลยีที่เพื่อสร้างสรรค์ความสนุกที่ไม่เหมือนใคร
              และสร้างประสบการณ์ที่เหนือกว่าให้แก่งาน Event ของคุณ
            </p>
          </article>
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
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
          </article>
          <article className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-none hover:shadow-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9B51E0] to-[#48C6EF] rounded-lg mb-6 flex items-center justify-center text-2xl shadow-lg shadow-[#48C6EF]/20">
              ✨
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">
              Premium Experience
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-white/60 leading-relaxed transition-colors">
              เราไม่ได้เพียงแค่สร้างผลิตภัณฑ์
              แต่เราช่วยยกระดับภาพลักษณ์ให้งานของคุณดูพรีเมียม ทรงคุณค่า
              และโดดเด่นกว่าที่เคย
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
      {/* --- Wedding Ideas Article Section --- */}
      <section className="px-6 py-24 w-full bg-black relative z-10 font-sans">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            ไอเดียเลือกตู้เกมให้เข้ากับ <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
              ธีมงาน และ กิจกรรมสุดคูลในงานอีเวนท์
            </span>
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto">
            หากคุณกำลังมองหาธีมงานที่สร้างสรรค์ เพื่อช่วยยกระดับอีเวนท์
            ตอบโจทย์ทุกจุดประสงค์ได้ Experience ที่น่าประทับใจ
            <br className="hidden md:block" />
            เราขอแนะนำธีมงานยอดฮิต
            พร้อมประยุกต์ให้เข้ากับตู้เกมของเราเพื่อสร้างความสนุกและประทับใจในทุกช่วงเวลา
          </p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Idea 1 */}
          <article className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2272FF]/10 group">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-6 lg:gap-8 items-center">
              {/* Left Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 1
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-3 py-4">
                <div>
                  <div className="text-[#48C6EF] text-[10px] font-black uppercase tracking-widest mb-1">
                    IDEA 01
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    ธีม Elegant / Classic Luxury
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  งานสายโรงแรมห้าดาวที่เน้นความเรียบหรู คริสตัลวิบวับ
                  ตู้เกมสามารถยกระดับให้เป็นลักชูรีอีเวนท์ได้ดีมาก
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        ตู้เกมแนะนำ:
                      </strong>{" "}
                      เกม Lucky Spin หรือ เกม Question
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        กิมมิค:
                      </strong>{" "}
                      ปรับแต่งสีตู้เกมพร้อมใส่ของรางวัลพรีเมียมเข้าไปในวงล้อ
                      ยกระดับภาพลักษณ์
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden hidden md:flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 2
                </span>
              </div>
            </div>
          </article>

          {/* Idea 2 */}
          <article className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2272FF]/10 group">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-6 lg:gap-8 items-center">
              {/* Left Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 1
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-3 py-4">
                <div>
                  <div className="text-[#48C6EF] text-[10px] font-black uppercase tracking-widest mb-1">
                    IDEA 02
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    ธีม Pastel / Fairy Tale
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  สำหรับงานบ่าวสาวสายโรแมนติกที่เน้นตกแต่งด้วยดอกไม้โทนสีพาสเทล
                  เช่น ชมพู ฟ้า หรือม่วงลาเวนเดอร์
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        ตู้เกมแนะนำ:
                      </strong>{" "}
                      เกม Bubble Shooter หรือ เกม Bubble Baby
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        กิมมิค:
                      </strong>{" "}
                      เปลี่ยนลูกโป่งในเกมให้เป็นรูปหัวใจ หรือการ์ตูนบ่าวสาว
                      ให้เพื่อนๆ ได้ถ่ายรูป
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden hidden md:flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 2
                </span>
              </div>
            </div>
          </article>

          {/* Idea 3 */}
          <article className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2272FF]/10 group">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-6 lg:gap-8 items-center">
              {/* Left Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 1
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-3 py-4">
                <div>
                  <div className="text-[#48C6EF] text-[10px] font-black uppercase tracking-widest mb-1">
                    IDEA 03
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    ธีม Garden / Rustic
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  งานแต่งงานในสวน สนามหญ้าสีเขียว หรือกลาสเฮ้าส์ (Glasshouse)
                  ที่เน้นความโปร่งสบายและเป็นกันเอง
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        ตู้เกมแนะนำ:
                      </strong>{" "}
                      เกม Catch Fruit (เกมรับผลไม้)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        กิมมิค:
                      </strong>{" "}
                      ดีไซน์ตู้เกมและกราฟิกเป็นธีมต้นไม้ ใบไม้ หรือผลไม้
                      ช่วยเพิ่มความสดชื่น
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden hidden md:flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 2
                </span>
              </div>
            </div>
          </article>

          {/* Idea 4 */}
          <article className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2272FF]/10 group">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-6 lg:gap-8 items-center">
              {/* Left Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 1
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-3 py-4">
                <div>
                  <div className="text-[#48C6EF] text-[10px] font-black uppercase tracking-widest mb-1">
                    IDEA 04
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    ธีม Retro / Arcade / Neon Night
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  บ่าวสาวสายเกมเมอร์ หรือชอบ After Party ที่มีไฟนีออนสลัวๆ
                  ดนตรีตื๊ดๆ ปาร์ตี้สนุกสุดเหวี่ยง
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        ตู้เกมแนะนำ:
                      </strong>{" "}
                      เกม Racing Run (วิ่งแข่ง) รองรับผู้เล่นพร้อมกันได้สูงสุด 4
                      คน
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        กิมมิค:
                      </strong>{" "}
                      ชวนแก๊งเพื่อนมาดวลความเร็วกันหน้างาน
                      เป็นไฮไลท์เด็ดที่ทำให้งานไม่ซ้ำใคร
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden hidden md:flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 2
                </span>
              </div>
            </div>
          </article>

          {/* Idea 5 */}
          <article className="rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#2272FF]/10 group">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.5fr] gap-6 lg:gap-8 items-center">
              {/* Left Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 1
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-3 py-4">
                <div>
                  <div className="text-[#48C6EF] text-[10px] font-black uppercase tracking-widest mb-1">
                    IDEA 05
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    ธีม Minimalist / Modern Cozy
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  เทรนด์จัดงานของคนรุ่นใหม่ที่เน้นความมินิมอล
                  ตกแต่งโทนสีเอิร์ธโทน ขาว ครีม น้ำตาล เน้นความอบอุ่น
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        ตู้เกมแนะนำ:
                      </strong>{" "}
                      เกม Matching (เกมจับคู่ภาพ)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#48C6EF] text-sm mt-0.5 leading-none">
                      •
                    </span>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">
                      <strong className="text-[#48C6EF] font-medium">
                        กิมมิค:
                      </strong>{" "}
                      นำภาพพรีเวดดิ้ง หรือความทรงจำมาใส่เป็นไอคอนในเกม
                      ช่วยเพิ่มความโรแมนติก
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-800/40 relative overflow-hidden hidden md:flex items-center justify-center border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                <span className="text-white/20 text-sm font-medium tracking-wider">
                  IMAGE 2
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#2272FF] hover:bg-[#48C6EF] rounded-lg font-bold text-xs uppercase tracking-widest transition-all group text-white shadow-xl shadow-[#2272FF]/20"
          >
            {"Let's Plan Your Event"}
            <span className="ml-3 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
          <p className="mt-6 text-slate-400 text-xs md:text-sm tracking-wide">
            เราพร้อมร่วมเป็นส่วนหนึ่งของงานให้คุณได้ประทับใจ
          </p>
        </div>
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

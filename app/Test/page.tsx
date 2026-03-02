"use client"
import Image from "next/image"

export default function HomePage() {
  return (
    // เปลี่ยน bg-black เป็น bg-[#fafafa] เพื่อความละมุน ไม่ขาวจ้าจนเกินไป
    <div className="bg-[#fafafa] text-zinc-900 min-h-screen font-sans">
      {/* --- Navbar --- */}
      <div className="fixed top-6 left-0 w-full z-50 px-4 sm:px-10">
        <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-zinc-200 rounded-full px-8 py-3 flex justify-between items-center shadow-sm">
          {/* Logo */}
          <div className="text-lg font-black tracking-[0.2em] uppercase text-zinc-900 shrink-0">
            BRIGHT <span className="text-yellow-600">VANTA</span>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Product
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-yellow-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition">
              Login
            </button>
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300 shadow-xl shadow-zinc-200">
              Get Started
            </button>
          </div>
        </nav>
      </div>

      {/* --- Hero Section --- */}
      <div className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Decorative Layer */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern แบบสว่าง */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* แสงฟุ้งแบบ Soft Pastel */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-100/30 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-[10px] uppercase tracking-[0.3em] text-yellow-600 font-bold shadow-sm">
                Digital Architects
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] uppercase italic text-zinc-900">
                Transform Your <span className="text-yellow-600">Vision</span>{" "}
                <br /> into Reality
              </h1>
              <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed uppercase tracking-wider">
                เราคือผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และประสบการณ์ดิจิทัลระดับพรีเมียม
                ที่พร้อมขับเคลื่อนธุรกิจของคุณสู่ความสำเร็จในยุคใหม่
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-10 py-4 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-600 transition shadow-2xl shadow-zinc-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Services Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-yellow-600 text-xs font-bold tracking-[0.3em] uppercase">
              Our Expertise
            </span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-zinc-900">
              My Services
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed uppercase tracking-wider text-center md:text-right">
            สร้างสรรค์ผลงานที่ตอบโจทย์ธุรกิจด้วยเทคโนโลยีที่ทันสมัยและดีไซน์ที่โดดเด่น
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card Component (Light Mode) */}
          {[
            {
              title: "Full Website",
              img: "/FullWeb.png",
              desc: "จัดเต็มเว็บไซต์สำหรับธุรกิจที่ต้องการ",
            },
            {
              title: "E-Commerce",
              img: "/ECom.png",
              desc: "ระบบร้านค้าออนไลน์ครบวงจร พร้อมปิดการขายได้ทันที",
            },
            {
              title: "AR Interactive",
              img: "/ARInteractive.png",
              desc: "สร้าง Engagement ผ่านเทคโนโลยีความจริงเสริมสุดล้ำที่งาน event ของคุณ ",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-zinc-100 rounded-[3rem] p-8 hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-[250px] mb-8 rounded-[2rem] overflow-hidden bg-zinc-50 border border-zinc-100">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-zinc-900 uppercase italic">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs uppercase tracking-wide leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex justify-between items-center pt-4">
                  <button className="text-[10px] font-black uppercase tracking-widest text-yellow-600 border-b-2 border-yellow-600 pb-1">
                    Learn More
                  </button>
                  <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Pricing Section --- */}
      <div className="bg-white py-32 px-6 border-y border-zinc-100 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic text-zinc-900">
              Pricing Plans
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Full Website",
                price: "150,000",
                featured: false,
                desc: "สมบูรณ์แบบสำหรับธุรกิจที่ต้องการความน่าเชื่อถือสูง",
              },
              {
                name: "E-Commerce",
                price: "90,000",
                featured: true,
                desc: "ระบบร้านค้าออนไลน์ครบวงจร พร้อมปิดการขายได้ทันที",
              },
              {
                name: "AR Interactive",
                price: "80,000",
                featured: false,
                desc: "สร้าง Engagement ผ่านเทคโนโลยีความจริงเสริมสุดล้ำบนหน้าเว็บไซต์",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-12 rounded-[3rem] border transition-all duration-500 ${plan.featured ? "bg-zinc-900 text-white shadow-2xl scale-105" : "bg-[#fafafa] border-zinc-200 text-zinc-900"}`}
              >
                <h4
                  className={`uppercase text-[10px] font-black tracking-[0.2em] mb-4 ${plan.featured ? "text-yellow-500" : "text-zinc-400"}`}
                >
                  {plan.name}
                </h4>
                <div className="text-4xl font-black mb-8">
                  ฿{plan.price}
                  <span className="text-sm font-normal opacity-50">+</span>
                </div>
                <ul className="space-y-4 mb-10 text-[11px] uppercase tracking-[0.1em] font-bold">
                  <li className="flex items-center gap-2">
                    ✓ Professional Design
                  </li>
                  <li className="flex items-center gap-2">✓ Responsive</li>
                  <li className="flex items-center gap-2">✓ 24/7 Support</li>
                </ul>
                <p className="text-zinc-500 text-xs uppercase leading-relaxed mb-8 h-10">
                  {plan.desc}
                </p>
                <button
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${plan.featured ? "bg-yellow-500 text-black hover:bg-white" : "bg-white border border-zinc-200 hover:bg-zinc-900 hover:text-white shadow-sm"}`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-[#fafafa] py-20 px-10 border-t border-zinc-200 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-900 font-black tracking-widest text-lg">
            BRIGHT <span className="text-yellow-600">VANTA</span>
          </div>
          <div className="flex gap-10 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-zinc-900 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-900 transition">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-900 transition">
              Contact
            </a>
          </div>
          <p>© 2026 BRIGHT VANTA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}

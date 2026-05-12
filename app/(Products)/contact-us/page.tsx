import Navbar from "@/app/components/Navbar"
import ContactForm from "@/app/components/ContactForm"

export default function ContactUs() {
  return (
    <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white min-h-screen font-sans selection:bg-[#2272FF] selection:text-white transition-colors duration-500">
      {/* --- Navbar --- */}
      <Navbar />

      <div className="pt-12">
        <ContactForm />
      </div>

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
                  Contact Us
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
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
            <p className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest transition-colors">
              © 2026 JORJOY. ALL RIGHTS RESERVED.
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

"use client"

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="py-20 px-6 max-w-4xl mx-auto relative z-10"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Contact
          <span className="text-transparent mx-4 bg-clip-text bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0]">
            US
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-white/60 font-medium transition-colors">
          สนใจบริการของเราหรือต้องการสอบถามข้อมูลเพิ่มเติม
          สามารถกรอกรายละเอียดด้านล่างเพื่อให้ทีมงานติดต่อกลับได้เลยครับ
        </p>
      </div>

      <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl dark:shadow-none shadow-slate-200/50 rounded-3xl p-8 md:p-12 transition-all">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-bold text-slate-700 dark:text-white/80 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="ชื่อของคุณ"
                className="w-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2272FF] focus:border-transparent transition-all"
                required
              />
            </div>
            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-xs font-bold text-slate-700 dark:text-white/80 uppercase tracking-wider"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="เบอร์โทรศัพท์"
                className="w-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2272FF] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-bold text-slate-700 dark:text-white/80 uppercase tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="อีเมลของคุณ"
              className="w-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2272FF] focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Details / Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs font-bold text-slate-700 dark:text-white/80 uppercase tracking-wider"
            >
              Details
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="รายละเอียดที่ต้องการสอบถาม..."
              className="w-full bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2272FF] focus:border-transparent transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 mt-4 bg-gradient-to-r from-[#48C6EF] via-[#2272FF] to-[#9B51E0] hover:opacity-90 rounded-xl text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-[#2272FF]/25 transition-all flex items-center justify-center gap-2 group"
          >
            Send Message
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

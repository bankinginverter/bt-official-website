"use client"
import Image from "next/image"

export default function GamingHub() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center transform rotate-45 shadow-lg shadow-orange-500/20">
              <span className="transform -rotate-45 font-black text-xl">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={400}
                  height={600}
                  className="object-contain"
                />
              </span>
            </div>
            <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
              <a href="#" className="hover:text-orange-500 transition">
                Explore
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Releases
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-500 rounded-md text-xs font-bold uppercase tracking-widest shadow-lg shadow-orange-600/20 transition-all">
              About Us
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-8 z-10">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">
              Discover Products You Will Love
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Crafting Joy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                In Every Moment With Our Products
              </span>
            </h1>
            <button className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all group">
              Start Exploring{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
          <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 blur-[120px] rounded-full" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/Chetar.png"
                alt="Chetar character"
                width={400}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Trending Section --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Currently Games Product
          </h2>
          <button className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest">
            See All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              title: "Fruit Crash",
              followers: "50 Followers",
              image: "/FruitCrash.png",
            },
            {
              title: "Help My Cat",
              followers: "44 Followers",
              image: "/HelpMyCat.jpg",
            },
            {
              title: "Tower",
              followers: "37 Followers",
              image: "/Tower.jpg",
            },
            {
              title: "AR Monster",
              followers: "31 Followers",
              color: "bg-orange-400",
            },
            {
              title: "Interactive Control",
              followers: "17 Followers",
              color: "bg-orange-700",
            },
            {
              title: "INTERACTIVE PRESENT",
              followers: "8 Followers",
              color: "bg-yellow-600",
            },
          ].map((game, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl bg-white/5 border border-white/5 overflow-hidden mb-3 relative transition-all group-hover:border-orange-500/50">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-[10px] font-bold text-white/80">
                    {game.followers}
                  </p>
                </div>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wide truncate">
                {game.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- News Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              What New
            </h2>
            <div className="flex gap-4 text-xs font-bold text-white/40">
              <button className="hover:text-orange-500">Game Event</button>
              <button className="hover:text-orange-500">AR</button>
              <button className="hover:text-orange-500">VR</button>
              <button className="hover:text-orange-500">Interactive</button>
            </div>
          </div>

          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-6 group cursor-pointer">
                <div className="w-48 h-32 rounded-lg bg-white/5 border border-white/10 shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded uppercase tracking-widest">
                    Game
                  </span>
                  <h4 className="text-lg font-bold leading-tight group-hover:text-orange-400 transition-colors">
                    Racing Run :
                    เกมวิ่งแข่งสำหรับไวมันส์รองรับผู้เล่นสูงสุดได้ถึง 4 คน
                  </h4>
                  <p className="text-xs text-white/40 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-white/60">
                    <span className="w-4 h-4 rounded-full bg-white/10" /> KOTAKU
                    • 2 HOURS AGO
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Newsletter & Sidebar --- */}
        <div className="space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
            <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-400">
              ✉️
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">
              Subscribe To <br /> Our Newsletter
            </h3>
            <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">
              Keep in touch with current gaming news.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-xs focus:outline-none focus:border-orange-500"
              />
              <button className="w-full py-3 bg-orange-600 hover:bg-orange-500 rounded-lg text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-orange-600/20">
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Featured Articles
            </h3>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex gap-4 items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded bg-white/5 shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-[11px] font-bold leading-tight line-clamp-2 uppercase group-hover:text-orange-400">
                    Guerilla Games Hints At New Horizon Zero Dawn Sequel
                  </h5>
                  <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">
                    22.04.2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-white/20 uppercase tracking-[0.5em]">
            BRIGHT VANTA GAMING
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase text-white/40 tracking-widest">
            <a href="#" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}

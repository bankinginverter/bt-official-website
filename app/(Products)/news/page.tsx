import type { Metadata } from "next"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Link from "next/link"

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams
  const category =
    typeof params?.category === "string" ? params.category : "game"
  const article =
    typeof params?.article === "string" ? params.article : "7-ways"

  if (category === "photo") {
    return {
      title: "ไอเดีย Photo Booth สุดชิค | JORJOY",
      description:
        "รวมไอเดียตู้ถ่ายรูป Photo Booth สำหรับงานอีเวนท์ สร้างความทรงจำดีๆ ให้กับแขกที่มาร่วมงาน",
      alternates: { canonical: "/news?category=photo" },
    }
  }

  if (category === "software") {
    return {
      title: "ระบบจัดการงานอีเวนท์ (Event Management) | JORJOY",
      description:
        "ทำความรู้จักระบบลงทะเบียนและจัดการงานอีเวนท์ที่จะช่วยให้งานของคุณราบรื่น ไร้รอยต่อ",
      alternates: { canonical: "/news?category=software" },
    }
  }

  if (article === "5-ideas") {
    return {
      title: "5 ไอเดียเลือกตู้เกมให้เข้ากับธีมงานแต่งงาน | JORJOY",
      description:
        "เทรนด์การจัดงานอีเวนท์แต่งงานยุคนี้ ให้ความสำคัญกับ Experience กิจกรรมสุดชิคในงานอีเวนท์ที่แขกประทับใจ",
      alternates: { canonical: "/news?category=game&article=5-ideas" },
    }
  }

  return {
    title: "7 วิธีดึงคนเข้าบูธด้วย Game Event | JORJOY",
    description:
      "เปลี่ยนงานออกบูธน่าเบื่อให้คนต่อคิวยาวจนล้น! ดึงเทคโนโลยีอย่างตู้เกม Interactive เข้ามาช่วย",
    alternates: { canonical: "/news?category=game&article=7-ways" },
  }
}

// Data for Article: 7 Ways (Exhibition)
const exhibitionWays = [
  {
    num: "01",
    title: "ใช้ตู้เกมดีไซน์โมเดิร์น",
    subtitle: "เป็น 'แม่เหล็ก' ดึงสายตา",
    desc: "ในฮอลล์จัด งานอีเวนท์ ที่มีบูธตั้งเรียงรายเป็นร้อยๆ บูธ สิ่งแรกที่จะทำให้คนหยุดเดินคือ 'ความแปลกใหม่' ตู้เกม Interactive ของ JORJOY ดีไซน์ออกมาให้มีความมินิมอล โมเดิร์น และล้ำสมัย แตกต่างจากตู้เกมตู้สล็อตเก่าๆ การมีหน้าจอขนาดใหญ่ที่แสงสีสวยงามตั้งอยู่หน้าบูธ จะทำหน้าที่เป็นแม่เหล็กดึงดูดความสนใจ (Visual Attractor) ให้คนเดินปรี่เข้ามาหาบูธของคุณก่อนเป็นอันดับแรก",
    tags: ["Modern Design", "Visual Attractor"],
    tip: "ข้อดี/ทริค: การวางตู้เกมไว้ด้านหน้าสุดของบูธหรือมุมที่เห็นได้ชัดเจน จะช่วยเพิ่มโอกาสให้คนหยุดดูมากยิ่งขึ้น",
    img: "/matching.png",
  },
  {
    num: "02",
    title: "เปลี่ยนของรางวัลธรรมดา",
    subtitle: "ให้สนุกด้วยเกม Lucky Spin (วงล้อเสี่ยงโชค)",
    desc: "แทนที่จะแจกของที่ระลึก ของชำร่วย หรือโบรชัวร์ให้คนเดินผ่านไปมาแบบธรรมดา (ซึ่งส่วนใหญ่คนมักจะรับไปแล้วทิ้ง) ให้เปลี่ยนมาเป็นกิมมิค Game Event โดยให้ผู้ร่วมงานได้หมุน 'ตู้เกม Lucky Spin' เพื่อลุ้นรางวัลด้วยตัวเอง",
    tags: ["Lucky Spin", "Giveaway"],
    tip: "ข้อดี/ทริค: ความรู้สึกที่ได้ 'ลุ้น' และเสียงเอฟเฟกต์ตอนวงล้อหมุน จะช่วยสร้างบรรยากาศชวนตื่นเต้น และดึงดูดให้คนที่อยู่รอบๆ อยากเข้ามาลองเสี่ยงโชคบ้าง",
    img: "/luckyspin.png",
  },
  {
    num: "03",
    title: "สร้างการแข่งขัน (Competition)",
    subtitle: "ด้วยระบบคะแนน Leaderboard",
    desc: "ธรรมชาติของคนเรามักจะชอบความท้าทายและการแข่งขัน ลองเลือกใช้เกมตู้ประเภทที่โชว์คะแนนสูงสุด เช่น เกม Racing Run (วิ่งแข่ง) หรือ เกม Catch Fruit (รับผลไม้) แล้วตั้งกระดาน Leaderboard เอาไว้หน้าบูธ ใครทำคะแนนได้สูงสุด 3 อันดับแรกของวัน รับรางวัลใหญ่ไปเลย!",
    tags: ["Racing Run", "Catch Fruit", "Leaderboard"],
    tip: "ข้อดี/ทริค: เทคนิคนี้จะทำให้คนใน งานอีเวนท์ พยายามกลับมาเล่นซ้ำเพื่อล้มแชมป์เก่า ช่วยเพิ่มยอด Traffic ให้พุ่งกระฉูด",
    img: "/catchfruit.png",
  },
  {
    num: "04",
    title: "ออกแบบเกมให้ 'เล่นง่าย จบไว'",
    subtitle: "ไม่น่าเบื่อและลดเวลารอคิว",
    desc: "การจัด กิจกรรมอีเวนท์ ด้วยตู้เกมที่ดี ต้องระวังไม่ให้เนื้อหาเกมซับซ้อนเกินไป เกมที่ดีสำหรับการ งานออกบูธ ควรใช้เวลาเล่นต่อรอบไม่เกิน 1-2 นาที เช่น เกม Matching (จับคู่ภาพ) หรือ เกม Bubble Shooter เพื่อให้แถวคิวรันได้อย่างรวดเร็ว (High Throughput)",
    tags: ["Matching", "Bubble Shooter"],
    tip: "ข้อดี/ทริค: คนที่ต่อคิวจะไม่รอนานจนถอดใจ และแบรนด์ของคุณก็จะได้ยอด Data หรือจำนวนคนที่มาร่วมสนุกต่อวันมากที่สุดด้วยครับ",
    img: "/bubbleshooter.png",
  },
  {
    num: "05",
    title: "สอดแทรก 'ภาพจำของแบรนด์'",
    subtitle: "ลงไปในตัวเกมแบบเนียนๆ",
    desc: "อย่าปล่อยให้คนเล่นเกมจบแล้วเดินจากไปโดยจำไม่ได้ว่าเราขายอะไร! ข้อดีของการเช่าตู้เกมแบบ Game Event กับ JORJOY คือคุณสามารถ Custom UI หรือปรับแต่งกราฟิกในเกมได้ 100% ตัวอย่าง: หากคุณเป็นแบรนด์อาหารเสริม คุณสามารถเปลี่ยนลูกบอลในเกมยิงโป่งให้กลายเป็นรูปส่วนผสมเด็ดของผลิตภัณฑ์ หรือในเกมจับคู่ภาพ ก็ใส่เป็นรูปสินค้าและโลโก้แบรนด์",
    tags: ["Custom UI", "Branding"],
    tip: "ข้อดี/ทริค: วิธีนี้จะช่วยให้ลูกค้าซึมซับและจดจำแบรนด์ของคุณได้โดยไม่รู้สึกว่าโดนยัดเยียดโฆษณา",
    img: "/bubblebaby.png",
  },
  {
    num: "06",
    title: "ใช้เงื่อนไข 'เล่นฟรี แค่ทำตามกติกา'",
    subtitle: "เพิ่มยอด Social Media",
    desc: "ตู้เกม Interactive ถือเป็นตัวช่วยทำ Lead Generation ที่ทรงพลังมากใน งานอีเวนท์ คุณสามารถตั้งเงื่อนไขง่ายๆ ก่อนที่ลูกค้าจะกดเริ่มเล่นเกม เช่น “เพียงแอด Line OA ของบริษัท”, “กด Like เพจ Facebook” หรือ “ถ่ายรูปคู่กับบูธแล้วเช็กอินลงโซเชียล” แลกกับการได้สิทธิ์เล่นเกมฟรี 1 ครั้ง",
    tags: ["Lead Generation", "Social Media"],
    tip: "ข้อดี/ทริค: วิธีนี้ช่วยให้แบรนด์ได้ฐานลูกค้าตัวจริง (Followers) ไปทำการตลาดต่อได้อย่างคุ้มค่าคุ้มราคาค่าบูธ",
    img: "/matching.png",
  },
  {
    num: "07",
    title: "ดึงดูดฝูงชนด้วยพลังของ",
    subtitle: "'เสียงและเอฟเฟกต์'",
    desc: "ในงานแสดงสินค้า บูธที่เงียบคือบูธที่ตายแล้ว! ตู้เกมของ JORJOY มาพร้อมกับระบบเสียง Sound Effects ที่ตื่นเต้น เร้าใจ เมื่อมีคนเล่นเกมชนะแล้วมีเสียงเอฟเฟกต์ 'Ding Ding Ding!' หรือเสียงดนตรีเฉลิมฉลองดังขึ้นมา มันจะสร้างความสงสัยให้กับคนรอบข้าง",
    tags: ["Sound Effects", "Engagement"],
    tip: "ข้อดี/ทริค: คนรอบข้างจะต้องเดินมาดูว่า 'บูธนี้เขามีอะไรกันนะ ทำไมสนุกจัง?' และนั่นคือจุดเริ่มต้นของคิวยาวเหยียดหน้าบูธของคุณครับ",
    img: "/luckyspin.png",
  },
]

// Data for Article: 5 Ideas (Wedding)
const weddingIdeas = [
  {
    num: "01",
    title: "ธีม Elegant / Classic Luxury",
    subtitle: "ซ่อนลูกเล่นความสนุกไว้ในความหรูหรา",
    desc: "เลือกตู้เกมที่มีการออกแบบเรียบหรูและสีสันโทนคลาสสิคเข้ากับสถานที่จัดงาน การนำตู้เกมดีไซน์พรีเมียมมาวางจะช่วยเพิ่มสีสันและความสนุกสนานให้กับแขก โดยยังคงความสง่างามของบรรยากาศงานแต่งงานไว้ได้ครบถ้วน",
    tags: ["Lucky Spin", "Question"],
    tip: "ข้อดี/ทริคสำหรับการจัดงานธีมนี้: ตู้เกมตกแต่งด้วยวัสดุสะท้อนแสง เช่น อะคริลิคใส หรือสีทองวาว ช่วยเสริมความแพงและเข้ากันได้ดีกับแชนเดอเลียร์ในห้องบอลรูม",
    img: "/matching.png",
  },
  {
    num: "02",
    title: "ธีม Pastel / Fairy Tale",
    subtitle: "หวานละมุน ดั่งเทพนิยาย",
    desc: "เลือกเกมที่เน้นภาพกราฟิกน่ารักและมีสีสันอ่อนหวาน เช่น เกมแนวพัซเซิล หรือยิงลูกโป่งสีพาสเทล สร้างความรู้สึกอบอุ่นและชวนฝันให้กับแขกที่มาร่วมงาน",
    tags: ["Bubble Shooter", "Bubble Baby"],
    tip: "ข้อดี/ทริคสำหรับการจัดงานธีมนี้: ทำให้แขกผู้ใหญ่และเด็กๆ สามารถร่วมสนุกด้วยกันได้อย่างกลมกลืน ช่วยสร้างรอยยิ้ม (Engagement) ได้เป็นอย่างดี",
    img: "/bubblebaby.png",
  },
  {
    num: "03",
    title: "ธีม Garden / Rustic",
    subtitle: "อบอุ่น เป็นกันเอง ในสวนธรรมชาติ",
    desc: "เพิ่มเสน่ห์ให้กับงานแต่งงานในสวนด้วยตู้เกมสไตล์ธรรมชาติ ตัวเครื่องอาจตกแต่งด้วยลายไม้ หรือจัดวางในมุมที่รายล้อมไปด้วยต้นไม้ เพื่อให้กลมกลืนกับบรรยากาศ",
    tags: ["Catch Fruit"],
    tip: "ข้อดี/ทริคสำหรับการจัดงานธีมนี้: ตั้งตู้เกมไว้ใกล้โซนเครื่องดื่ม หรือใต้ร่มไม้ ช่วยสร้างมุมพักผ่อนและมุมถ่ายรูปสุดชิคให้กับแขก",
    img: "/catchfruit.png",
  },
  {
    num: "04",
    title: "ธีม Retro / Arcade / Neon Night",
    subtitle: "ปาร์ตี้สุดมันส์ สีสันจัดจ้าน",
    desc: "เปลี่ยนช่วง After Party ให้กลายเป็นงานเทศกาลสุดสนุก ด้วยตู้เกมที่เน้นแสงสีนีออน ดนตรีจังหวะเร้าใจ และเกมสไตล์คลาสสิกอาร์เคดที่ทุกคนคิดถึง",
    tags: ["Racing Run"],
    tip: "ข้อดี/ทริคสำหรับการจัดงานธีมนี้: วางตู้เกมรวมกันเป็นโซน Arcade มุมมุมหนึ่ง ช่วยกระตุ้นเอนเนอร์จี้ สร้างความมันส์ให้กับปาร์ตี้ช่วงดึก",
    img: "/matching.png",
  },
  {
    num: "05",
    title: "ธีม Minimalist / Modern Cozy",
    subtitle: "เรียบง่าย แต่เต็มไปด้วยรายละเอียด",
    desc: "เน้นการจัดวางตู้เกมที่ออกแบบอย่างมินิมอล มีเส้นสายที่สะอาดตา ไม่แย่งความโดดเด่นของงาน แต่ยังคงทำหน้าที่สร้างเสียงหัวเราะให้กับแขกได้อย่างสมบูรณ์",
    tags: ["Matching"],
    tip: "ข้อดี/ทริคสำหรับการจัดงานธีมนี้: วางตู้เกมให้ห่างจากกันเพื่อสร้างพื้นที่ว่าง (Negative Space) ทำให้บรรยากาศงานดูโปร่งสบายและไม่แออัด",
    img: "/bubblebaby.png",
  },
]

const popularGames = [
  { name: "Lucky Spin", desc: "ลุ้นรางวัลสุดพิเศษ", img: "/matching.png" },
  { name: "Bubble Baby", desc: "เกมพัซเซิลสุดน่ารัก", img: "/bubblebaby.png" },
  { name: "Catch Fruit", desc: "เก็บผลไม้ได้คะแนน", img: "/catchfruit.png" },
  { name: "Racing Run", desc: "แข่งขันสุดมันส์", img: "/matching.png" },
  { name: "Matching", desc: "เกมจับคู่ภาพ", img: "/matching.png" },
]

export default async function NewsArticlePage({ searchParams }: Props) {
  const params = await searchParams
  const category =
    typeof params?.category === "string" ? params.category : "game"
  const article =
    typeof params?.article === "string" ? params.article : "7-ways"

  const isWedding = article === "5-ideas"
  const activeData = isWedding ? weddingIdeas : exhibitionWays

  return (
    <main className="bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white min-h-screen font-sans selection:bg-[#2272FF] selection:text-white transition-colors duration-500">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-gray-200 dark:border-white/10 overflow-hidden">
        {/* Placeholder Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-black dark:via-[#0a0f1a] dark:to-black" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#48C6EF]/10 via-transparent to-transparent opacity-100 dark:opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
          {/* Menu / Tabs */}
          <nav className="flex flex-wrap items-center gap-8 border-b border-gray-200 dark:border-white/10 pb-4 mb-4">
            <Link
              href="?category=game"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${category === "game" ? "text-[#2272FF] dark:text-[#48C6EF] border-b-2 border-[#2272FF] dark:border-[#48C6EF] pb-1" : "text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 pb-1"}`}
            >
              Game Event
            </Link>
            <Link
              href="?category=photo"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${category === "photo" ? "text-[#2272FF] dark:text-[#48C6EF] border-b-2 border-[#2272FF] dark:border-[#48C6EF] pb-1" : "text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 pb-1"}`}
            >
              Photo Booth
            </Link>
            <Link
              href="?category=software"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${category === "software" ? "text-[#2272FF] dark:text-[#48C6EF] border-b-2 border-[#2272FF] dark:border-[#48C6EF] pb-1" : "text-gray-500 dark:text-white/50 hover:text-gray-800 dark:hover:text-white/80 pb-1"}`}
            >
              Software Event Management
            </Link>
          </nav>

          {/* Conditional Hero Title based on Category */}
          {category === "game" && (
            <>
              <div>
                <span className="inline-block px-3 py-1 bg-[#2272FF]/10 dark:bg-[#2272FF]/20 text-[#2272FF] border border-[#2272FF]/20 dark:border-[#2272FF]/30 rounded-full text-xs font-bold tracking-widest">
                  EVENT IDEA
                </span>
              </div>
              <div className="max-w-4xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.3] tracking-tight text-gray-900 dark:text-white">
                  {isWedding ? (
                    <>
                      5 ไอเดียเลือกตู้เกม <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2272FF] to-[#48C6EF] dark:from-[#48C6EF] dark:to-[#2272FF]">
                        ให้เข้ากับธีมงานแต่งงาน
                      </span>
                    </>
                  ) : (
                    <>
                      7 วิธีดึงคนเข้าบูธด้วย Game Event <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2272FF] to-[#48C6EF] dark:from-[#48C6EF] dark:to-[#2272FF]">
                        เปลี่ยนงานออกบูธให้คนล้น!
                      </span>
                    </>
                  )}
                </h1>
                <p className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white/90">
                  {isWedding
                    ? "กิจกรรมสุดชิคในงานอีเวนท์ที่แขกประทับใจ"
                    : "เทคนิคที่จะทำให้บูธของคุณกลายเป็นจุดแลนด์มาร์คของงาน"}
                </p>
              </div>
            </>
          )}

          {category === "photo" && (
            <>
              <div>
                <span className="inline-block px-3 py-1 bg-[#2272FF]/10 dark:bg-[#2272FF]/20 text-[#2272FF] border border-[#2272FF]/20 dark:border-[#2272FF]/30 rounded-full text-xs font-bold tracking-widest">
                  PHOTO BOOTH
                </span>
              </div>
              <div className="max-w-4xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.3] tracking-tight text-gray-900 dark:text-white">
                  รวมไอเดียจัดตู้ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2272FF] to-[#48C6EF] dark:from-[#48C6EF] dark:to-[#2272FF]">
                    Photo Booth สุดชิค
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white/90">
                  สร้างความทรงจำดีๆ ให้กับแขกในงาน
                </p>
              </div>
            </>
          )}

          {category === "software" && (
            <>
              <div>
                <span className="inline-block px-3 py-1 bg-[#2272FF]/10 dark:bg-[#2272FF]/20 text-[#2272FF] border border-[#2272FF]/20 dark:border-[#2272FF]/30 rounded-full text-xs font-bold tracking-widest">
                  SOFTWARE MANAGEMENT
                </span>
              </div>
              <div className="max-w-4xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.3] tracking-tight text-gray-900 dark:text-white">
                  ยกระดับงานอีเวนท์ด้วย <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2272FF] to-[#48C6EF] dark:from-[#48C6EF] dark:to-[#2272FF]">
                    ระบบจัดการระดับมืออาชีพ
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white/90">
                  ราบรื่น ไร้รอยต่อ ตั้งแต่ลงทะเบียนจนจบงาน
                </p>
              </div>
            </>
          )}

          {/* Intro & Meta */}
          <div className="mt-6 max-w-3xl space-y-6">
            <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm md:text-base">
              {category === "game" &&
                isWedding &&
                'หมดยุคงานแต่งงานและงานอีเวนท์แบบเดิมๆ ที่แขกมาถึงแล้วต้องนั่งรออุดอู้เคี้ยวถั่วคั่วจนกว่าพิธีการจะเริ่มแล้วครับ! เทรนด์การจัดงานอีเวนท์แต่งงานยุคนี้ บ่าวสาวและออกาไนเซอร์ส่วนใหญ่ให้ความสำคัญกับ "Experience" หรือประสบการณ์ความสนุกของแขกในงานเป็นหลัก การเลือกกิจกรรมอีเวนท์อย่างตู้เกมแบบ Interactive จึงเป็นที่นิยม...'}
              {category === "game" &&
                !isWedding &&
                "ผู้ประกอบการหรือนักการตลาดหลายคนน่าจะเคยเจอฝันร้ายเวลาไป งานออกบูธ ตามงานแฟร์ หรือ Exhibition ใหญ่ๆ ใช่ไหมครับ? ทั้งที่อุตส่าห์เสียเงินค่าเช่าที่แพงแสนแพง ดีไซน์บูธซะสวยงาม แต่ผลลัพธ์คือคนเดินผ่านไปผ่านมา แวะมองแป๊บๆ แล้วก็เดินจากไป ทิ้งให้พนักงานในบูธยืนเหงาเฝ้าแผ่นพับ"}
              {category === "photo" &&
                "เปลี่ยนมุมถ่ายรูปธรรมดาให้กลายเป็นพื้นที่แห่งความสนุกด้วย Photo Booth ที่สามารถปรับแต่งกรอบรูป พร็อพ และพื้นหลังให้เข้ากับธีมงานได้อย่างอิสระ ไม่ว่าจะเป็นงานแต่ง ปาร์ตี้ หรืออีเวนท์เปิดตัวสินค้า..."}
              {category === "software" &&
                "หมดยุคการใช้กระดาษและแถวลงทะเบียนที่ยาวเหยียด ระบบจัดการงานอีเวนท์ที่ทันสมัยจะช่วยให้คุณประหยัดเวลา ลดความผิดพลาด และยังเก็บข้อมูลผู้เข้าร่วมงานได้อย่างเป็นระบบ นำไปต่อยอดการตลาดได้ง่ายขึ้น..."}
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-white/50 tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                12 June 2026
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {category === "game"
                  ? isWedding
                    ? "8 min read"
                    : "10 min read"
                  : "5 min read"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content & Sidebar Grid --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 space-y-12">
            {category === "game" && (
              <>
                {/* --- Article Selection Tabs --- */}
                <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl md:rounded-full w-fit">
                  <Link
                    href="?category=game&article=7-ways"
                    className={`px-6 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all text-center ${!isWedding ? "bg-white dark:bg-[#2272FF] text-[#2272FF] dark:text-white shadow-sm border border-gray-200 dark:border-transparent" : "text-gray-500 hover:text-gray-900 dark:text-white/60 dark:hover:text-white"}`}
                  >
                    ไอเดียสำหรับ งานออกบูธ
                  </Link>
                  <Link
                    href="?category=game&article=5-ideas"
                    className={`px-6 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all text-center ${isWedding ? "bg-white dark:bg-[#2272FF] text-[#2272FF] dark:text-white shadow-sm border border-gray-200 dark:border-transparent" : "text-gray-500 hover:text-gray-900 dark:text-white/60 dark:hover:text-white"}`}
                  >
                    ไอเดียสำหรับ งานแต่งงาน
                  </Link>
                </div>

                {/* Table of Contents Pills */}
                <div className="flex flex-wrap gap-3 pb-4 border-b border-gray-200 dark:border-white/10">
                  {activeData.map((idea) => (
                    <button
                      key={idea.num}
                      className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 text-xs font-bold bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition text-gray-700 dark:text-white/80 shadow-sm dark:shadow-none whitespace-nowrap"
                    >
                      <span className="text-[#2272FF] dark:text-[#48C6EF] mr-2">
                        {idea.num}
                      </span>
                      {idea.title.split(" / ")[0]}
                    </button>
                  ))}
                </div>

                {/* Main Article Paragraph */}
                <div className="prose dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-white/70 prose-p:leading-relaxed max-w-none">
                  {isWedding ? (
                    <>
                      <p>
                        เทรนด์การจัดงานอีเวนท์แต่งงานยุคนี้
                        บ่าวสาวและออร์แกไนเซอร์ส่วนใหญ่ให้ความสำคัญกับ{" "}
                        <strong>&quot;Experience&quot;</strong>{" "}
                        หรือประสบการณ์ที่แขกจะได้รับในงานเป็นอันดับต้นๆ
                        เมื่อพูดถึงประสบการณ์ที่มีความสนุกและน่าจดจำ
                        แน่นอนว่าการเพิ่มกิจกรรมสุดฮิตอย่างตู้เกม Interactive
                        (Game Event Kiosk) หรือตู้ถ่ายรูป (Photo Booth)
                        จึงเป็นตัวเลือกยอดฮิตที่จะช่วยสร้างสีสันให้กับงาน
                      </p>
                      <p>
                        ตู้เกมแต่ละเครื่องสามารถถูกออกแบบ (Customize) ตัวเกม
                        กราฟิก และโครงสร้างของตู้ให้เข้ากับ Mood & Tone
                        ของงานแต่งงานได้อย่างลงตัว มาดูกันว่า 5
                        ไอเดียการเลือกตู้เกมให้เข้ากับธีมงานมีอะไรบ้าง...
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        ถ้าคุณไม่อยากให้ <strong>งานอีเวนท์ (Event)</strong>{" "}
                        ครั้งต่อไปต้องเงียบเหงา การดึงเทคโนโลยีอย่าง{" "}
                        <strong>
                          &quot;Game Event (ตู้เกม Interactive)&quot;
                        </strong>{" "}
                        เข้ามาช่วย
                        ถือเป็นอาวุธเด็ดที่จะเปลี่ยนบรรยากาศหน้าบูธของคุณให้คึกคักขึ้นทันตาเห็น!
                      </p>
                      <p>
                        และนี่คือ 7
                        วิธีดึงคนเข้าบูธด้วยเกมอีเวนท์ที่รับรองว่าเห็นผลจริง
                        แขกต่อคิวยาวจนล้นบูธแน่นอนครับ
                      </p>
                    </>
                  )}
                </div>

                {/* Ideas / Ways Cards */}
                <div className="space-y-12">
                  {activeData.map((idea, index) => {
                    const isEven = index % 2 !== 0
                    return (
                      <div
                        key={idea.num}
                        className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-8 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#2272FF]/50 transition-colors duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none`}
                      >
                        {/* Image Area */}
                        <div className="w-full md:w-5/12 relative aspect-[4/5] md:aspect-auto rounded-xl overflow-hidden bg-gray-100 dark:bg-black flex items-center justify-center">
                          {/* Decorative gradient behind image */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2272FF]/10 dark:from-[#2272FF]/20 to-transparent" />
                          <div className="relative w-[80%] aspect-[9/16] rounded-xl overflow-hidden border border-gray-200 dark:border-white/20 shadow-2xl z-10 my-4">
                            <Image
                              src={idea.img}
                              alt={idea.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-4">
                          <span className="text-[#2272FF] dark:text-[#48C6EF] font-black text-xl">
                            {idea.num}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {idea.title}
                          </h3>
                          <p className="text-sm font-bold text-[#2272FF]">
                            {idea.subtitle}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                            {idea.desc}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-xs text-gray-400 dark:text-white/40 mb-1 w-full block">
                              แนะนำเกม/เทคนิค:
                            </span>
                            {idea.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-xs text-gray-600 dark:text-white/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Tip Box */}
                          <div className="mt-4 p-4 bg-[#2272FF]/5 dark:bg-[#2272FF]/10 border border-[#2272FF]/20 dark:border-[#2272FF]/30 rounded-lg flex gap-3 items-start">
                            <svg
                              className="w-5 h-5 text-[#2272FF] dark:text-[#48C6EF] shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                            <p className="text-xs text-gray-700 dark:text-white/80 leading-relaxed">
                              {idea.tip}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Event Insight Banner */}
                <div className="relative rounded-2xl bg-gradient-to-r from-blue-50 to-white dark:from-[#0a1930] dark:to-[#120b29] border border-blue-100 dark:border-white/10 p-8 flex items-center justify-between overflow-hidden text-gray-900 dark:text-white mt-12 shadow-sm dark:shadow-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2272FF] rounded-full blur-[100px] opacity-10 dark:opacity-20" />
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#48C6EF]/20 flex items-center justify-center shrink-0">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2272FF] dark:text-[#48C6EF] uppercase tracking-widest mb-2">
                        Event Insight
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black leading-tight text-gray-900 dark:text-white">
                        {isWedding ? (
                          <>
                            แขกจำงานแต่งไม่ได้เพราะอาหาร <br /> แต่จำได้เพราะ{" "}
                            <span className="text-[#2272FF] dark:text-[#48C6EF]">
                              Experience
                            </span>
                          </>
                        ) : (
                          <>
                            แบรนด์ที่คนจำได้ <br /> คือแบรนด์ที่ให้{" "}
                            <span className="text-[#2272FF] dark:text-[#48C6EF]">
                              Experience
                            </span>{" "}
                            ที่ดี
                          </>
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="hidden md:flex relative z-10 opacity-40 dark:opacity-80">
                    <svg
                      className="w-24 h-24 text-[#2272FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Popular Games Section */}
                <div className="space-y-6 pt-8">
                  <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                    เกมยอดฮิตสำหรับงานอีเวนท์
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {popularGames.map((game, i) => (
                      <div
                        key={i}
                        className="group bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col items-center text-center hover:border-[#2272FF] dark:hover:border-[#48C6EF]/50 transition cursor-pointer shadow-sm dark:shadow-none"
                      >
                        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden mb-3 bg-gray-100 dark:bg-black">
                          <Image
                            src={game.img}
                            alt={game.name}
                            fill
                            className="object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-1">
                          {game.name}
                        </h4>
                        <p className="text-[10px] text-gray-500 dark:text-white/50">
                          {game.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-4">
                    <Link
                      href="/games"
                      className="text-xs text-[#2272FF] dark:text-[#48C6EF] hover:text-blue-700 dark:hover:text-white transition uppercase tracking-widest font-bold"
                    >
                      ดูเกมทั้งหมดของเรา →
                    </Link>
                  </div>
                </div>
              </>
            )}

            {category === "photo" && (
              <div className="py-20 text-center border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  บทความ Photo Booth กำลังมาเร็วๆ นี้
                </h3>
                <p className="text-gray-500 dark:text-white/50">
                  เตรียมพบกับไอเดียการจัดตู้ถ่ายรูปให้ปังที่สุดในงานอีเวนท์
                </p>
              </div>
            )}

            {category === "software" && (
              <div className="py-20 text-center border border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  บทความ Software Event Management กำลังมาเร็วๆ นี้
                </h3>
                <p className="text-gray-500 dark:text-white/50">
                  เคล็ดลับการใช้ระบบจัดการเพื่อให้งานของคุณเป็นมืออาชีพ
                </p>
              </div>
            )}

            {/* Final CTA Banner (Visible on all tabs) */}
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#1c0f3b] dark:via-[#0a1930] dark:to-black border border-blue-100 dark:border-[#2272FF]/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden gap-8 text-center md:text-left mt-12 text-gray-900 dark:text-white shadow-md dark:shadow-none">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 dark:opacity-10 mix-blend-overlay" />

              <div className="relative z-10 flex-1 space-y-4">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                  ยังไม่รู้ว่าควรเลือกกิจกรรมไหนดี?
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed text-sm md:text-base">
                  เปลี่ยนงานแต่งงานของคุณให้เป็นงานอีเวนท์ที่สนุกและน่าจดจำที่สุด สนใจบริการเช่าตู้เกมสำหรับงานแต่งงานและงานอีเวนท์ (Event) ทุกประเภท สามารถทักมาเช็คคิวงานและปรึกษาทีมงาน <span className="font-bold text-[#2272FF] dark:text-[#48C6EF]">JORJOY</span> ได้ฟรี! ติดต่อเราได้ตามช่องทางด้านล่างนี้เลยครับ
                </p>
                <ul className="text-xs text-gray-500 dark:text-white/60 space-y-2 pt-2 flex flex-col md:block">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2272FF] dark:text-[#48C6EF]">
                      ✔
                    </span>{" "}
                    ปรับแต่งกราฟิกได้ 100%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2272FF] dark:text-[#48C6EF]">
                      ✔
                    </span>{" "}
                    มีบริการครอบคลุมทุกหมวดหมู่
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2272FF] dark:text-[#48C6EF]">
                      ✔
                    </span>{" "}
                    ดูแลฟรีจนจบงาน ไม่มีเทแน่นอน
                  </li>
                </ul>
              </div>

              <div className="relative z-10 flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                <a
                  href="#contact-us"
                  className="w-full md:w-auto px-8 py-4 bg-[#2272FF] hover:bg-blue-600 dark:hover:bg-[#48C6EF] rounded text-sm font-bold text-white transition-colors shadow-lg shadow-[#2272FF]/30 text-center"
                >
                  ปรึกษาฟรี คลิกเลย →
                </a>
                <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white mt-2">
                  ราคาเริ่มต้นเพียง <span className="text-[#2272FF] dark:text-[#48C6EF] font-black text-xl">9,000</span> บาท
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Area (Right) */}
          <div className="lg:col-span-4 space-y-8 relative">
            <div className="sticky top-24 space-y-8">
              {/* Share Box */}
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4 shadow-sm dark:shadow-none">
                <h4 className="text-sm font-bold mb-4 text-gray-900 dark:text-white">
                  แชร์บทความนี้
                </h4>
                <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-[#1877F2] hover:bg-[#1877F2]/90 text-white text-xs font-bold transition">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-[#00B900] hover:bg-[#00B900]/90 text-white text-xs font-bold transition">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.043 10.665c0-4.48-4.462-8.125-9.96-8.125s-9.96 3.645-9.96 8.125c0 3.99 3.518 7.391 8.287 8.04.341.071.8.216.921.5.109.255.034.654.016.809-.026.223-.122.732-.149.882-.047.247-.215.992.871.534 1.085-.458 5.845-3.444 7.925-5.856 1.334-1.545 2.049-3.134 2.049-4.919zM6.929 11.95H5.412c-.22 0-.4-.18-.4-.4V8.513c0-.22.18-.4.4h1.517c.22 0 .4.18.4.4v3.037c0 .22-.18.4-.4.4zm3.955 0H9.366c-.22 0-.4-.18-.4-.4V8.513c0-.22.18-.4.4h1.518c.22 0 .4.18.4.4v3.037c0 .22-.18.4-.4.4zm4.07 0h-2.316c-.22 0-.4-.18-.4-.4V8.513c0-.22.18-.4.4h.875v2.247h1.441c.22 0 .4.18.4.4v.79c0 .22-.18.4-.4.4zm3.834 0h-1.517c-.22 0-.4-.18-.4-.4V8.513c0-.22.18-.4.4h1.517c.22 0 .4.18.4.4v3.037c0 .22-.18.4-.4.4z" />
                  </svg>
                  Line
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white text-xs font-bold transition">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Copy Link
                </button>
              </div>

              {/* Contact Box */}
              <div className="bg-gradient-to-b from-blue-50 to-white dark:from-[#1c0f3b] dark:to-[#0a0a0a] border border-blue-100 dark:border-[#2272FF]/30 rounded-2xl p-6 text-center space-y-4 text-gray-900 dark:text-white shadow-sm dark:shadow-none">
                <div className="text-[#2272FF] dark:text-[#48C6EF] text-[10px] uppercase tracking-widest font-bold">
                  ปรึกษาออกแบบ
                </div>
                <h4 className="text-xl font-bold">Event Kiosk ฟรี!</h4>
                <p className="text-xs text-gray-500 dark:text-white/60">
                  แอดไลน์เพื่อรับข้อเสนอและโปรโมชั่นพิเศษ
                </p>
                <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center p-4">
                  {/* QR Code Placeholder */}
                  <div className="w-full h-full border-4 border-gray-200 dark:border-black border-dashed flex items-center justify-center text-gray-400 dark:text-black font-bold">
                    [QR CODE]
                  </div>
                </div>
                <p className="text-xs font-bold">Line OA: @jorjoy</p>
              </div>

              {/* Latest Articles */}
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-6 shadow-sm dark:shadow-none">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  บทความน่าสนใจ
                </h4>
                <div className="space-y-4">
                  <Link
                    href="?category=game&article=7-ways"
                    className="flex gap-4 group"
                  >
                    <div className="w-20 aspect-square rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden relative shrink-0">
                      <Image
                        src="/matching.png"
                        alt="thumbnail"
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <h5 className="text-xs font-bold text-gray-800 dark:text-white group-hover:text-[#2272FF] dark:group-hover:text-[#48C6EF] transition line-clamp-2">
                        7 วิธีดึงคนเข้าบูธด้วย Game Event
                        เปลี่ยนงานออกบูธให้คนล้น!
                      </h5>
                      <span className="inline-block px-2 py-0.5 mt-1 bg-gray-100 dark:bg-white/10 rounded text-[9px] w-fit font-bold text-gray-500 dark:text-white/60">
                        EXHIBITION
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="?category=game&article=5-ideas"
                    className="flex gap-4 group"
                  >
                    <div className="w-20 aspect-square rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden relative shrink-0">
                      <Image
                        src="/bubblebaby.png"
                        alt="thumbnail"
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                      <h5 className="text-xs font-bold text-gray-800 dark:text-white group-hover:text-[#2272FF] dark:group-hover:text-[#48C6EF] transition line-clamp-2">
                        5 ไอเดียเลือกตู้เกมให้เข้ากับธีมงานแต่งงาน (Wedding)
                      </h5>
                      <span className="inline-block px-2 py-0.5 mt-1 bg-gray-100 dark:bg-white/10 rounded text-[9px] w-fit font-bold text-gray-500 dark:text-white/60">
                        WEDDING
                      </span>
                    </div>
                  </Link>
                </div>
                <button className="w-full py-3 rounded-lg border border-gray-200 dark:border-white/20 text-xs font-bold text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition mt-4">
                  ดูบทความทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-200 dark:border-white/5 py-16 px-6 transition-colors duration-500 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.3em]">
                JORJOY
              </div>
              <p className="text-xs text-gray-500 dark:text-white/60 leading-relaxed">
                เราคือผู้นำด้านการพัฒนาเทคโนโลยีสำหรับอีเวนท์
                ที่ช่วยยกระดับงานของคุณด้วยประสบการณ์ที่สนุกและน่าจดจำไม่สิ้นสุด
              </p>
            </div>
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                Our Services
              </h4>
              <nav className="flex flex-col gap-3 text-xs text-gray-500 dark:text-white/60 font-medium">
                <Link
                  href="#game-event"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  Game Event
                </Link>
                <Link
                  href="#photo-booth"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  Photo Booth
                </Link>
                <Link
                  href="#event-management"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  Event Management
                </Link>
              </nav>
            </div>
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                Company
              </h4>
              <nav className="flex flex-col gap-3 text-xs text-gray-500 dark:text-white/60 font-medium">
                <Link
                  href="/contact-us"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  Contact Us
                </Link>
                <Link
                  href="/news"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  News & Articles
                </Link>
              </nav>
            </div>
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                Contact Us
              </h4>
              <address className="flex flex-col gap-3 text-xs text-gray-500 dark:text-white/60 font-medium not-italic">
                <a
                  href="mailto:jorjoy@gmail.com"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  jorjoy@gmail.com
                </a>
                <a
                  href="tel:+66000000000"
                  className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
                >
                  +66 (0) 00-000-0000
                </a>
              </address>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-widest">
              © 2026 JORJOY. ALL RIGHTS RESERVED.
            </p>
            <nav className="flex gap-6 text-[10px] font-bold uppercase text-gray-400 dark:text-white/40 tracking-widest">
              <Link
                href="/terms"
                className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#2272FF] dark:hover:text-[#48C6EF] transition"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}

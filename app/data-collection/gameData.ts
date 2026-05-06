export type GameItem = {
  src: string
  alt: string
  title: string
  description: string
}

interface NewsItem {
  category: string
  title: string
  detail: string
  date: string
  img: string
}

export const games: GameItem[] = [
  {
    src: "/bubblebaby.png",
    alt: "Bubble Baby",
    title: "Bubble Baby",
    description:
      "สนุกสนานไปกับเกม Bubble Baby สุดน่ารัก พร้อมให้คุณได้สัมผัสความสนุกที่เหมาะกับทุกคน",
  },
  {
    src: "/bubbleshooter.png",
    alt: "Bubble Shooter",
    title: "Bubble Shooter",
    description:
      "เพลิดเพลินไปกับเกมยิงลูกแก้วสีสันสดใส ท้าทายความแม่นยำของคุณในทุกการยิง",
  },
  {
    src: "/catchfruit.png",
    alt: "Catch Fruit",
    title: "Catch Fruit",
    description:
      "เกมรับผลไม้แสนสนุก ทดสอบความไวและประสาทสัมผัสของคุณ ยิ่งรับมาก ยิ่งได้คะแนนเยอะ!",
  },
  {
    src: "/luckyspin.png",
    alt: "Lucky Spin",
    title: "Lucky Spin",
    description:
      "หมุนวงล้อเสี่ยงโชค ลุ้นรับรางวัลสุดพิเศษในทุกๆ การหมุน สร้างความตื่นเต้นให้งานของคุณ",
  },
  {
    src: "/matching.png",
    alt: "Matching",
    title: "Matching",
    description:
      "ฝึกสมองกับเกมจับคู่รูปภาพ ท้าทายความจำของคุณ เหมาะสำหรับจัดกิจกรรมร่วมสนุก",
  },
  {
    src: "/question.png",
    alt: "Question",
    title: "Question",
    description:
      "ทดสอบความรู้กับเกมตอบคำถามสุดท้าทาย ชิงรางวัลมากมาย เพิ่มความมีส่วนร่วมให้ผู้ใช้งาน",
  },
]

export const news: NewsItem[] = [
  {
    category: "Game Event",
    title: "Racing Run เกมวิ่งแข่งสำหรับไวมันส์รองรับผู้เล่นสูงสุดได้ถึง 4 คน",
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

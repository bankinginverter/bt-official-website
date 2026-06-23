export type GameItem = {
  src: string
  alt: string
  title: string
  description: string
}

interface AllItem {
  category: string
  title: string
  detail: string
  date: string
  img: string
}

interface PhotoBoothDataItem {
  src: string
  title: string
  desc: string
}

interface NewsItem {
  src: string
  alt: string
  title: string
  description: string
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

export const all: AllItem[] = [
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

export const PhotoBoothData: PhotoBoothDataItem[] = [
  {
    src: "/photobooth1.jpeg",
    title: "Custom Frames & Stickers",
    desc: "ตกแต่งภาพถ่ายของคุณด้วยกรอบรูปและสติ๊กเกอร์ที่ออกแบบมาเฉพาะสำหรับงานของคุณ เพื่อให้เข้ากับธีมงานได้อย่างลงตัว และสร้างเอกลักษณ์ที่ไม่ซ้ำใคร",
  },
  {
    src: "/photobooth2.jpeg",
    title: "Instant Print & Digital Share",
    desc: "รับภาพพิมพ์คุณภาพสูงได้ทันทีที่หน้างาน พร้อมระบบสแกน QR Code เพื่อดาวน์โหลดไฟล์ภาพดิจิทัลและแชร์ลง Social Media ได้อย่างรวดเร็ว",
  },
  {
    src: "/photobooth3.jpeg",
    title: "Interactive Props & Effects",
    desc: "เพิ่มสีสันให้กับการถ่ายภาพด้วยพร็อพสนุกๆ และเอฟเฟกต์สุดล้ำที่จะทำให้ทุกรูปถ่ายเต็มไปด้วยรอยยิ้มและประสบการณ์ที่น่าประทับใจ",
  },
]

export const news: NewsItem[] = [
  {
    src: "/news1.png",
    alt: "News 1",
    title:
      "JorJoy เปิดตัวเกมใหม่สุดมันส์ 'Racing Run' พร้อมให้ผู้เล่นได้สัมผัสความสนุกแล้ววันนี้!",
    description:
      "JorJoy ภูมิใจนำเสนอเกมใหม่ล่าสุด 'Racing Run' เกมวิ่งแข่งสุดมันส์ที่รองรับผู้เล่นสูงสุดถึง 4 คน พร้อมให้คุณได้สัมผัสประสบการณ์การเล่นที่ไม่เหมือนใคร",
  },
  {
    src: "/news2.png",
    alt: "News 2",
    title:
      "อัปเดตฟีเจอร์ใหม่ใน JorJoy Event Management System เพิ่มความสะดวกในการจัดงานอีเวนท์",
    description:
      "JorJoy ได้ทำการอัปเดตฟีเจอร์ใหม่ในระบบ Event Management System เพื่อให้ผู้ใช้งานสามารถจัดการงานอีเวนท์ได้ง่ายขึ้นและมีประสิทธิภาพมากยิ่งขึ้น พร้อมรองรับการจัดงานในรูปแบบต่างๆ",
  },
]

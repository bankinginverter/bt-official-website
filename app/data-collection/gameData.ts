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
  link?: string
}

interface PhotoBoothDataItem {
  src: string
  title: string
  desc: string
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
    link: "/games",
  },
  {
    category: "Event Management",
    title:
      "Event Manage System ระบบดูแลงานอีเวนท์ ที่จะทำงานอีเวนท์ของคุณควบคุมได้แค่ปลายนิ้ว",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "KOTAKU • 2 HOURS AGO",
    img: "/event1.png",
    link: "/eventmanagement",
  },
  {
    category: "News",
    title: "7 วิธีดึงคนเข้าบูธด้วย Game Event เปลี่ยนงานออกบูธให้คนล้น!",
    detail: "ผู้ประกอบการหรือนักการตลาดหลายคนน่าจะเคยเจอฝันร้ายเวลาไป งานออกบูธ ตามงานแฟร์ หรือ Exhibition ใหญ่ๆ ใช่ไหมครับ? ทั้งที่อุตส่าห์เสียเงินค่าเช่าที่แพงแสนแพง ดีไซน์บูธซะสวยงาม แต่ผลลัพธ์คือคนเดินผ่านไปผ่านมา แวะมอง แป๊บๆ แล้วก็เดินจากไป",
    date: "NEWS • 1 DAY AGO",
    img: "/news1.png",
    link: "/news?category=game&article=7-ways",
  },
  {
    category: "News",
    title: "5 ไอเดียเลือกตู้เกม ให้เข้ากับธีมงานแต่งงาน",
    detail: "หมดยุคงานแต่งงานที่แขกมาถึงแล้วต้องนั่งรออุดอู้เคี้ยวถั่วคั่วจนกว่าพิธีการจะเริ่มแล้วครับ! เทรนด์การจัดงานอีเวนท์แต่งงานยุคนี้ ให้ความสำคัญกับ Experience กิจกรรมสุดชิคในงานอีเวนท์ที่แขกประทับใจ",
    date: "NEWS • 3 DAYS AGO",
    img: "/news2.png",
    link: "/news?category=game&article=5-ideas",
  },
  {
    category: "Photo Booth",
    title: "ไอเดียจัดตู้ถ่ายรูป Photo Booth สุดชิคในงานแต่งงาน",
    detail: "รวมไอเดียตู้ถ่ายรูป Photo Booth ที่สามารถปรับแต่งกรอบรูป พร็อพ และพื้นหลังให้เข้ากับธีมงานได้อย่างอิสระ สร้างความประทับใจให้แขกในงาน",
    date: "TIPS • 1 WEEK AGO",
    img: "/photobooth1.jpeg",
    link: "/photobooth",
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

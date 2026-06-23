import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import FloatingLineButton from "./components/FloatingLineButton"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "JORJOY | สร้างสรรค์นวัตกรรมและประสบการณ์สุดพิเศษสำหรับงาน Event",
  description:
    "เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ บริการ Game Event, Photo Booth และ Event Management ยกระดับงานของคุณให้พรีเมียมและน่าจดจำ",
  keywords: [
    "Event Management",
    "Photo Booth",
    "Game Event",
    "จัดงานอีเวนท์",
    "ตู้ถ่ายรูป",
    "เกมอีเวนท์",
    "JORJOY",
    "Interactive Event",
  ],
  openGraph: {
    title: "JORJOY | สร้างสรรค์นวัตกรรมและประสบการณ์สุดพิเศษ",
    description:
      "เราคือบริษัทที่ผสานรวมเทคโนโลยีเข้ากับจินตนาการ บริการ Game Event, Photo Booth และ Event Management",
    url: "https://www.jorjoy.com", // เปลี่ยนเป็น URL จริงของคุณ
    siteName: "JORJOY",
    images: [
      {
        url: "/NewLogo.png", // แนะนำให้ใช้ภาพแบนเนอร์ขนาด 1200x630px
        width: 800,
        height: 600,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JORJOY | สร้างสรรค์นวัตกรรมและประสบการณ์สุดพิเศษ",
    description:
      "บริการ Game Event, Photo Booth และ Event Management ยกระดับงานของคุณให้พรีเมียม",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingLineButton />
      </body>
    </html>
  )
}

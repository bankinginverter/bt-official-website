"use client"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center px-6 py-4 border-b border-gray-700 bg-gray-800">
        <div className="text-2xl font-bold tracking-wide text-indigo-400">
          BRIGHT VANTA
        </div>
        <nav className="flex gap-6 text-sm font-medium text-indigo-300">
          <a href="#" className="hover:text-indigo-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            Product
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            Price
          </a>
          <a href="#" className="hover:text-indigo-500 transition">
            Contact
          </a>
        </nav>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-20 justify-items-center">
        {/* Card 1 */}
        <div className="relative w-full max-w-[350px] h-[500px] bg-gray-800 rounded-xl shadow-lg p-6 text-center overflow-visible transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-indigo-500/50">
          <Image
            src="/Backoffice.png"
            alt="CMS Dashboard"
            width={300}
            height={300}
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10"
          />
          <div className="mt-96 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-indigo-400">
              Full Website
            </h3>
            <p className="text-sm mt-2">Website and management system</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full max-w-[350px] h-[500px] bg-gray-800 rounded-xl shadow-lg p-6 text-center overflow-visible transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-green-400/50">
          <Image
            src="/ShopBack.png"
            alt="CMS Dashboard"
            width={500}
            height={300}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10"
          />
          <div className="mt-96 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-green-400">
              E-Commerce Website
            </h3>
            <p className="text-sm mt-2">Website for online shopping mall</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full max-w-[350px] h-[500px] bg-gray-800 rounded-xl shadow-lg p-6 text-center overflow-visible transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-sky-400/50">
          <Image
            src="/ComLandingPage.png"
            alt="CMS Dashboard"
            width={500}
            height={300}
            className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10"
          />
          <div className="mt-96 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-sky-400">
              Landing Page Website
            </h3>
            <p className="text-sm mt-2">
              Website for product or service promotion
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-full max-w-[350px] h-[500px] bg-gray-800 rounded-xl shadow-lg p-6 text-center overflow-visible transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-purple-400/50">
          <Image
            src="/Trophy.png"
            alt="CMS Dashboard"
            width={500}
            height={300}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
          />
          <div className="mt-96 flex flex-col items-start">
            <h3 className="text-lg font-semibold text-purple-400">
              Mini Game & Game Event
            </h3>
            <p className="text-sm mt-2">
              Website for game events and mini games
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Detail Section (from your snippet, themed to Dark) */}
      <div>
        <div className="px-20 flex flex-col justify-items-center items-center">
          {/* Full Website Detail */}
          <div className="my-6 w-full h-auto lg:min-h-[700px] bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-lg transition card-xs">
            <div className="m-4 flex flex-col xl:flex-row items-center gap-10">
              {/* Image Section */}
              <div className="bg-gray-700 rounded-2xl shadow-lg p-4 text-center hover:shadow-lg transition w-full xl:w-[800px] card-image-xs">
                <Image
                  src="/Dashboard.png"
                  alt="CMS Dashboard"
                  width={800}
                  height={700}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
              {/* Text Section */}
              <div className="w-full xl:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-xl lg:text-3xl font-bold py-4 text-indigo-400">
                  Full Website
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-light text-left leading-relaxed max-w-[90%] sm:max-w-full line-clamp-6 sm:line-clamp-none">
                  Website + CMS
                  คือโซลูชันที่ช่วยยกระดับการทำงานของธุรกิจให้มีความเป็นระบบและทันสมัยมากขึ้น
                  เว็บไซต์ที่ครบถ้วนสมบูรณ์สามารถรองรับทั้งการโปรโมทองค์กร
                  การนำเสนอข้อมูล
                  และการสร้างความน่าเชื่อถือในสายตาลูกค้าได้อย่างมีประสิทธิภาพ
                  ขณะเดียวกันระบบ CMS (Content Management System)
                  ก็ช่วยให้การจัดการเนื้อหาเป็นเรื่องง่าย
                  ไม่จำเป็นต้องมีทักษะด้านเทคนิคก็สามารถแก้ไข เพิ่ม
                  หรือปรับปรุงข้อมูลได้ทันที การผสานกันระหว่าง Full Website และ
                  CMS
                  ทำให้ธุรกิจสามารถอัปเดตข้อมูลได้อย่างรวดเร็วและตรงตามความต้องการของตลาด
                  การมีระบบที่ยืดหยุ่นยังช่วยให้ทีมงานทำงานร่วมกันได้อย่างราบรื่น
                  ลดความผิดพลาดและเพิ่มความโปร่งใสในการดำเนินงาน
                  อีกทั้งยังช่วยสร้างประสบการณ์ที่ดีให้กับผู้ใช้งานด้วยการออกแบบที่ทันสมัยและตอบโจทย์การใช้งานจริง
                  Website + CMS จึงไม่ใช่เพียงเครื่องมือ
                  แต่เป็นกลยุทธ์สำคัญในการสร้างความได้เปรียบทางการแข่งขัน
                  การลงทุนในระบบนี้คือการสร้างผลตอบแทนระยะยาวที่คุ้มค่าและยั่งยืน
                  ทำให้ธุรกิจสามารถเติบโตและประสบความสำเร็จได้อย่างมั่นคงในยุคดิจิทัลที่เปลี่ยนแปลงอย่างรวดเร็ว
                </p>
              </div>
            </div>
          </div>

          {/* E-Commerce Detail */}
          <div className="my-6 w-full h-auto lg:min-h-[700px] bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-lg transition card-xs">
            <div className="m-4 flex flex-col xl:flex-row items-center gap-10">
              <div className="w-full xl:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-xl lg:text-3xl font-bold py-4 text-green-400">
                  E - Commerce Website
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-light text-left leading-relaxed max-w-[90%] sm:max-w-full line-clamp-6 sm:line-clamp-none">
                  คือเครื่องมือทรงพลังที่ช่วยให้ธุรกิจสามารถเข้าถึงลูกค้าได้ทั่วโลกอย่างไร้ขีดจำกัด
                  การมีแพลตฟอร์มออนไลน์ที่ทันสมัยทำให้การซื้อขายสินค้าและบริการเป็นเรื่องง่าย
                  สะดวก และรวดเร็ว ลูกค้าสามารถเลือกชมสินค้า เปรียบเทียบราคา
                  และตัดสินใจซื้อได้ทุกที่ทุกเวลา
                  ซึ่งช่วยเพิ่มยอดขายและสร้างโอกาสใหม่ ๆ ให้กับธุรกิจ
                  นอกจากนี้ระบบยังช่วยให้ผู้ประกอบการสามารถจัดการสต็อกสินค้า
                  การชำระเงิน และการขนส่งได้อย่างมีประสิทธิภาพ
                  ลดความผิดพลาดและเพิ่มความโปร่งใสในการทำงาน
                  การวิเคราะห์ข้อมูลลูกค้าผ่านเว็บไซต์ยังช่วยให้ธุรกิจเข้าใจพฤติกรรมการซื้อและสามารถปรับกลยุทธ์การตลาดได้ตรงจุดมากขึ้น
                  อีกทั้งยังสร้างความเชื่อมั่นและความพึงพอใจให้กับลูกค้าด้วยระบบที่ปลอดภัยและบริการที่รวดเร็ว
                  E‑Commerce Website จึงไม่ใช่เพียงช่องทางการขาย
                  แต่เป็นสะพานเชื่อมระหว่างธุรกิจกับผู้บริโภคในยุคดิจิทัล
                  การลงทุนในระบบนี้คือการสร้างความได้เปรียบทางการแข่งขันและผลตอบแทนระยะยาวที่ยั่งยืน
                  ทำให้ธุรกิจสามารถเติบโตและประสบความสำเร็จได้อย่างมั่นคงในโลกออนไลน์ที่เปลี่ยนแปลงอย่างรวดเร็ว
                </p>
              </div>
              <div className="bg-gray-700 rounded-2xl shadow-lg p-4 text-center hover:shadow-lg transition w-full xl:w-[800px] card-image-xs">
                <Image
                  src="/ECommerce.png"
                  alt="CMS Dashboard"
                  width={800}
                  height={700}
                />
              </div>
            </div>
          </div>

          {/* Landing Page Detail */}
          <div className="my-6 w-full h-auto lg:min-h-[700px] bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-lg transition card-xs">
            <div className="m-4 flex flex-col xl:flex-row items-center gap-10">
              <div className="bg-gray-700 rounded-2xl shadow-lg p-4 text-center hover:shadow-lg transition w-full xl:w-[800px] card-image-xs">
                <Image
                  src="/Landing.png"
                  alt="CMS Dashboard"
                  width={800}
                  height={700}
                />
              </div>
              <div className="w-full xl:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-xl lg:text-3xl font-bold py-4 text-sky-400">
                  Landing Page Website
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-light text-left leading-relaxed max-w-[90%] sm:max-w-full line-clamp-6 sm:line-clamp-none">
                  คือเครื่องมือทรงพลังที่ช่วยสร้างความประทับใจแรกให้กับผู้เข้าชมและเปลี่ยนพวกเขาให้กลายเป็นลูกค้าได้อย่างมีประสิทธิภาพ
                  การออกแบบที่เรียบง่ายแต่ดึงดูดสายตาช่วยให้ผู้ใช้เข้าใจสาระสำคัญของธุรกิจได้ทันที
                  เนื้อหาที่กระชับและตรงประเด็นทำให้การสื่อสารชัดเจนและโน้มน้าวใจได้ดียิ่งขึ้น
                  การใช้ภาพประกอบและกราฟิกที่สวยงามช่วยเพิ่มความน่าสนใจและสร้างความเชื่อมั่นในแบรนด์
                  ระบบที่ดีสามารถปรับแต่งให้เหมาะสมกับกลุ่มเป้าหมายและเพิ่มอัตราการแปลงเป็นยอดขายได้อย่างชัดเจน
                  นอกจากนี้ Landing Page
                  ยังช่วยให้ธุรกิจสามารถทดสอบกลยุทธ์การตลาดและวัดผลได้อย่างแม่นยำ
                  การจัดวางปุ่ม Call to Action
                  ที่โดดเด่นทำให้ผู้ใช้ตัดสินใจได้ง่ายและรวดเร็ว
                  การเชื่อมโยงกับระบบวิเคราะห์ข้อมูลช่วยให้ทีมงานเข้าใจพฤติกรรมผู้ใช้และปรับปรุงประสบการณ์ได้ต่อเนื่อง
                  Landing Page Website จึงไม่ใช่เพียงหน้าหนึ่งของเว็บไซต์
                  แต่เป็นเครื่องมือสำคัญในการสร้างโอกาสทางธุรกิจและความสำเร็จในยุคดิจิทัลที่แข่งขันสูง
                </p>
              </div>
            </div>
          </div>

          {/* Mini Game Detail */}
          <div className="my-6 w-full h-auto lg:min-h-[700px] bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 hover:shadow-lg transition card-xs">
            <div className="m-4 flex flex-col xl:flex-row items-center gap-10">
              <div className="w-full xl:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-xl lg:text-3xl font-bold py-4 text-purple-400">
                  Mini Game & Game Event
                </h3>
                <p className="text-sm sm:text-base lg:text-lg font-light text-left leading-relaxed max-w-[90%] sm:max-w-full line-clamp-6 sm:line-clamp-none">
                  การมี Mini Game และ Game Event ในงานบูธหรือกิจกรรมต่าง ๆ
                  ถือเป็นกลยุทธ์สำคัญที่ช่วยสร้างบรรยากาศให้สนุกสนานและดึงดูดผู้เข้าร่วมได้มากขึ้น
                  เกมเล็ก ๆ
                  ที่เล่นง่ายช่วยให้ผู้คนรู้สึกผ่อนคลายและเปิดใจเข้ามามีส่วนร่วมกับแบรนด์หรือองค์กรได้อย่างเป็นธรรมชาติ
                  การแข่งขันหรือกิจกรรมที่มีรางวัลเล็ก ๆ น้อย ๆ
                  ยังช่วยเพิ่มแรงจูงใจและสร้างความตื่นเต้นให้กับผู้เข้าร่วม
                  การเล่นเกมทำให้เกิดการมีส่วนร่วมเชิงบวก
                  เกิดการพูดคุยและเชื่อมสัมพันธ์ระหว่างผู้คนในงานได้ง่ายขึ้น
                  อีกทั้งยังช่วยให้บูธโดดเด่นและน่าจดจำมากกว่าการนำเสนอข้อมูลเพียงอย่างเดียว
                  Mini Game
                  ยังเป็นเครื่องมือที่ดีในการสื่อสารสาระสำคัญของแบรนด์ผ่านประสบการณ์ตรง
                  ทำให้ผู้เข้าร่วมเข้าใจและจดจำได้ดียิ่งขึ้น การจัด Game Event
                  ยังช่วยสร้างภาพลักษณ์ที่ทันสมัยและเป็นมิตรต่อผู้เข้าชม
                  สร้างความประทับใจแรกที่ดีและต่อยอดไปสู่ความสัมพันธ์ระยะยาว
                  การมีเกมในงานจึงไม่ใช่แค่ความบันเทิง
                  แต่เป็นการสร้างคุณค่าและโอกาสทางธุรกิจที่ยั่งยืน
                </p>
              </div>
              <div className="bg-gray-700 rounded-2xl shadow-lg p-4 text-center hover:shadow-lg transition w-full xl:w-[800px] card-image-xs">
                <Image
                  src="/GameEvent.png"
                  alt="CMS Dashboard"
                  width={800}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div>
        <div className="text-2xl font-bold text-center m-16 text-indigo-400">
          Product Pricing
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-10 justify-items-center">
          {/* Full Web */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm text-left border-t-4 border-indigo-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-400 mb-2">
              Full Website
            </h3>
            <p className="text-lg text-gray-100 font-semibold mb-1">฿150,000</p>
            <p className="text-sm text-gray-400 mb-4">started</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex gap-2">
                <span className="text-indigo-400">✔</span> เว็บไซต์โปรโมท
                เว็บไซต์สำหรับองค์กร
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✔</span> User Authentication
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✔</span> Database
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✔</span> CMS template
              </li>
            </ul>
          </div>

          {/* E-com */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm text-left border-t-4 border-green-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-400 mb-2">
              E-Commerce
            </h3>
            <p className="text-lg text-gray-100 font-semibold mb-1">฿90,000</p>
            <p className="text-sm text-gray-400 mb-4">started</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex gap-2">
                <span className="text-green-400">✔</span> เว็บไซต์ขายของ
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✔</span> User Authentication
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✔</span> Payment
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✔</span> Database + CMS
                template
              </li>
            </ul>
          </div>

          {/* Landing page */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm text-left border-t-4 border-sky-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-sky-400 mb-2">
              Landing page Website
            </h3>
            <p className="text-lg text-gray-100 font-semibold mb-1">฿40,000</p>
            <p className="text-sm text-gray-400 mb-4">started</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex gap-2">
                <span className="text-sky-400">✔</span> เว็บไซต์โปรโมท
                เว็บไซต์แนะนำตัวตนเอง
              </li>
              <li className="flex gap-2">
                <span className="text-sky-400">✔</span> มี template ให้เลือก
              </li>
            </ul>
          </div>

          {/* Minimal game */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-sm text-left border-t-4 border-purple-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Minimal Game & Game Event
            </h3>
            <p className="text-lg text-gray-100 font-semibold mb-1">฿80,000</p>
            <p className="text-sm text-gray-400 mb-4">started</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex gap-2">
                <span className="text-purple-400">✔</span> mini game or game
                event
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400">✔</span> มี template ให้เลือก
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center m-16">
          <button className="px-6 py-3 bg-indigo-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg transition duration-300">
            View More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">
              About
            </h4>
            <p className="text-sm">
              เราคือทีมพัฒนาเว็บไซต์ที่เน้นความเรียบง่าย ทันสมัย
              และใช้งานได้จริง
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Product</li>
              <li>Prices</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>CMS Installation</li>
              <li>E-commerce Web</li>
              <li>Landingpage Web</li>
              <li>Server Rental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>0896-888-1982</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

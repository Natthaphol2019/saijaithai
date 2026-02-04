// src/sections/ActivitiesSection.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react'; // เพิ่ม icon Quote เพื่อความสวยงาม (ถ้าไม่มีให้ลบออกได้ครับ)
import TimelineItem from './TimelineItem'; 

export default function ActivitiesSection() {
  return (
    // เพิ่ม max-w-7xl เพื่อให้กว้างขึ้นบนจอ PC และ lg:px-12
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20"> 
      
      {/* Header */}
      <div className="text-center mb-24 lg:mb-32 space-y-12">
        
        {/* Main Title - ปรับให้ใหญ่และมีมิติขึ้นบน PC */}
        <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] leading-tight py-4 drop-shadow-2xl">
              "ช่วยเพื่อให้เขา... <br className="hidden lg:block" />ช่วยเหลือตนเองได้"
            </h2>
            {/* Glow effect ด้านหลัง (เฉพาะจอใหญ่) */}
            <div className="hidden lg:block absolute -inset-4 bg-[#bf953f]/20 blur-3xl rounded-full opacity-40 -z-10"></div>
        </div>
        
        {/* Quote Box - เพิ่มความกว้าง Padding และ Effect กระจก */}
        <div className="relative group max-w-5xl mx-auto">
            <div className="bg-[#2a0e38]/60 backdrop-blur-md rounded-3xl p-8 lg:p-14 border border-[#b38728]/30 hover:border-[#d4af37]/60 transition-all duration-700 shadow-xl hover:shadow-[0_0_30px_rgba(191,149,63,0.15)]">
                
                {/* Decorative Quote Icon (ถ้ามี import Quote) */}
                <Quote className="absolute top-6 left-6 lg:top-10 lg:left-10 text-[#d4af37]/20 w-8 h-8 lg:w-16 lg:h-16 -scale-x-100" />
                
                <p className="text-[#fcf6ba]/90 text-2xl lg:text-3xl font-light italic leading-relaxed tracking-wide relative z-10 px-2 lg:px-8">
                  "การสงเคราะห์ทหารผ่านศึกนั้น... <span className="text-white font-normal text-shadow-sm">ขอให้ช่วยเพื่อให้เขาช่วยเหลือตัวเองได้</span> ไม่ใช่ให้เขาตลอดไป"
                </p>

                <Quote className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 text-[#d4af37]/20 w-8 h-8 lg:w-16 lg:h-16" />
            </div>
        </div>
        
        {/* Badge - เพิ่มความชัดและ Interaction */}
        <div className="inline-flex items-center gap-4 bg-[#1a0524]/80 backdrop-blur px-8 py-3 lg:py-4 rounded-full border border-[#b38728]/50 shadow-lg hover:scale-105 hover:bg-[#2a0e38] transition-transform duration-300 cursor-default">
          <Star size={18} className="text-[#d4af37] animate-pulse" />
          <span className="text-[#d4af37] font-semibold tracking-[0.2em] uppercase text-sm lg:text-base">
            พระราชดำรัส รัชกาลที่ ๙
          </span>
          <Star size={18} className="text-[#d4af37] animate-pulse" />
        </div>
      </div>

      {/* Timeline Content - ขยายระยะห่างระหว่าง Item บน PC */}
      <div className="space-y-20 lg:space-y-32">
        <TimelineItem 
          year="๒ เม.ย. ๒๕๑๘" 
          title="กำเนิดสายใจไทย" 
          desc="พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร ทรงก่อตั้งมูลนิธิสายใจไทยฯ เพื่อช่วยเหลือทหาร ตำรวจ และอาสาสมัคร ที่บาดเจ็บและพิการจากการปกป้องผืนแผ่นดินไทย ให้มีคุณภาพชีวิตที่ดีและยืนหยัดได้ด้วยตนเอง"
          img="/images/1003.webp" 
        />
        <TimelineItem 
          year="๒๕๒๓" 
          title="ก้าวแรกสู่อาชีพ" 
          desc="เริ่มจัดตั้ง 'แผนกฝึกอาชีพ' ขึ้นเป็นครั้งแรก โดยเริ่มจากงานเย็บกระเป๋าหนัง มีสมาชิกทหารผ่านศึกรุ่นบุกเบิกเพียง ๕ ท่าน ฝึกฝนจนชำนาญเพื่อสร้างรายได้เลี้ยงตนเองอย่างยั่งยืน ก่อนขยายสู่งานแก้วและงานฝีมือแขนงอื่น"
          img="/images/1004.webp"
        />
        <TimelineItem 
          year="๒๕๔๑" 
          title="ศักดิ์ศรีแห่งฝีมือ" 
          desc="กรมสมเด็จพระเทพฯ เสด็จฯ เปิดศูนย์ฝึกอาชีพแห่งใหม่ (บางนา) พร้อมพระราชทานพระราโชวาทให้สมาชิกสร้างสรรค์งานด้วย 'คุณภาพ' เพื่อให้สินค้าขายได้ด้วยความงามของชิ้นงาน ไม่ใช่ให้คนซื้อเพราะความสงสาร"
          img="/images/1005.webp"
        />
      </div>
    </div>
  );
}
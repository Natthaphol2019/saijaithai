// src/sections/ActivitiesSection.jsx
import React from 'react';
import { Star } from 'lucide-react';
import TimelineItem from './TimelineItem'; 

export default function ActivitiesSection() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div className="text-center mb-24 space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] leading-relaxed py-2 drop-shadow-lg">
          "ช่วยเพื่อให้เขา... ช่วยเหลือตนเองได้"
        </h2>
        
        <div className="bg-[#2a0e38]/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-[#b38728]/30 hover:border-[#d4af37]/50 transition-all duration-500">
          <p className="text-[#fcf6ba]/90 text-2xl font-light italic leading-relaxed">
            "การสงเคราะห์ทหารผ่านศึกนั้น... ขอให้ช่วยเพื่อให้เขาช่วยเหลือตัวเองได้ ไม่ใช่ให้เขาตลอดไป"
          </p>
        </div>
        
        <div className="inline-flex items-center gap-3 bg-[#2a0e38]/60 py-3 px-6 rounded-full border border-[#b38728]/50 shadow-md">
          <Star size={16} className="text-[#d4af37]" />
          <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm">พระราชดำรัส รัชกาลที่ ๙</span>
          <Star size={16} className="text-[#d4af37]" />
        </div>
      </div>

      {/* Timeline Content */}
      <div className="space-y-16">
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
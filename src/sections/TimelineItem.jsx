// src/sections/TimelineItem.jsx
import React from 'react';

export default function TimelineItem({ year, title, desc, img }) {
  return (
    // เพิ่ม lg:gap-16 เพื่อให้ระยะห่างสวยขึ้นในจอใหญ่
    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 group">
      
      {/* ส่วนรูปภาพ (ปรับแก้ตรงนี้)
         - md:w-1/2  -> ยังคงครึ่งนึงใน Tablet
         - lg:w-5/12 -> จอ PC เล็ก ลดเหลือ ~40%
         - xl:w-1/3  -> จอ PC ใหญ่ ลดเหลือ ~33% (เล็กลงชัดเจน)
      */}
      <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 overflow-hidden rounded-xl border-2 border-[#b38728]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <img 
          src={img} 
          alt={title} 
          loading="lazy"
          // เปลี่ยน h-full เป็น h-auto เพื่อรักษาสัดส่วนภาพเมื่อความกว้างลดลง
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      {/* ส่วนเนื้อหา
         - ขยายให้รับกับรูปที่เล็กลง (กินพื้นที่ที่เหลือ)
      */}
      <div className="w-full md:w-1/2 lg:w-7/12 xl:w-2/3 space-y-4 text-center md:text-left">
        <span className="text-[#d4af37] font-bold text-xl lg:text-2xl tracking-widest">{year}</span>
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed font-light text-lg lg:text-xl">
          {desc}
        </p>
      </div>
    </div>
  );
}
// src/sections/TimelineItem.jsx
import React from 'react';

export default function TimelineItem({ year, title, desc, img }) {
  // ลบ motion ออก เปลี่ยนเป็น div ธรรมดา
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 group">
      {/* ส่วนรูปภาพ */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl border-2 border-[#b38728]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
        <img 
          src={img} 
          alt={title} 
          loading="lazy" // ช่วยเรื่องโหลดรูปในมือถือ
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <span className="text-[#d4af37] font-bold text-xl tracking-widest">{year}</span>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed font-light text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
}
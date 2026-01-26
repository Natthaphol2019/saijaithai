// src/sections/TimelineItem.jsx
import React from 'react';
import { Star } from 'lucide-react';

export default function TimelineItem({ year, title, desc, img }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center bg-[#2a0e38]/40 backdrop-blur-md p-10 rounded-2xl hover:scale-[1.02] transition-all duration-500 border border-[#b38728]/30 group hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
      
      {/* ส่วนรูปภาพ */}
      <div className="md:w-2/5 w-full">
        <div className="aspect-[4/4] rounded-xl overflow-hidden border-2 border-[#b38728]/30 shadow-2xl group-hover:border-[#d4af37]/60 transition-all duration-600">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
          />
        </div>
      </div>
      
      {/* ส่วนเนื้อหา */}
      <div className="md:w-3/5 text-left space-y-4">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] px-5 py-2 rounded-full font-bold text-xl shadow-lg">
          <Star size={18} />
          {year}
        </div>
        <h4 className="text-3xl text-[#fcf6ba] font-bold font-serif leading-tight">
          {title}
        </h4>
        <p className="text-[#f4f4f0]/85 leading-loose font-sans text-lg">
          {desc}
        </p>
      </div>

    </div>
  );
}
// src/components/TimelineItem.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion'; // ต้องลง npm install framer-motion ก่อนนะ

export default function TimelineItem({ year, title, desc, img }) {
  return (
    <motion.div 
      // กำหนดค่า Animation
      initial={{ opacity: 0, x: -50 }} // เริ่มต้น: จางและอยู่ทางซ้าย
      whileInView={{ opacity: 1, x: 0 }} // เมื่อเห็น: ชัดและเลื่อนมาตรงกลาง
      viewport={{ once: true, margin: "-100px" }} // เล่นแค่รอบเดียว
      transition={{ duration: 0.7, ease: "easeOut" }} // ความเร็วและความนุ่ม
      
      className="flex flex-col md:flex-row gap-10 items-center bg-[#2a0e38]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl hover:scale-[1.02] transition-all duration-500 border border-[#b38728]/30 group hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
    >
      
      {/* ส่วนรูปภาพ */}
      <div className="md:w-2/5 w-full shrink-0">
        <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#b38728]/30 shadow-2xl group-hover:border-[#d4af37]/60 transition-all duration-600 relative">
           {/* เพิ่ม Overlay สีทองจางๆ เวลาเอาเมาส์ชี้ */}
           <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 z-10 transition-colors duration-500"></div>
           
           <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            onError={(e) => e.target.src = "https://placehold.co/400x400/2a0e38/d4af37?text=No+Image"}
          />
        </div>
      </div>
      
      {/* ส่วนเนื้อหา */}
      <div className="md:w-3/5 text-left space-y-5">
        
        {/* Badge ปีพ.ศ. */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] px-5 py-2 rounded-full font-bold text-xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
          <Star size={20} className="fill-[#1a0b2e] stroke-none animate-spin-slow" />
          {year}
        </div>
        
        <h4 className="text-3xl md:text-4xl text-[#fcf6ba] font-bold font-serif leading-tight drop-shadow-md">
          {title}
        </h4>
        
        <p className="text-[#f4f4f0]/85 leading-loose font-sans text-lg font-light">
          {desc}
        </p>
      </div>

    </motion.div>
  );
}
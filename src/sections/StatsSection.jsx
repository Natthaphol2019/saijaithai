// src/sections/StatsSection.jsx
// แหล่งข้อมูล: https://www.saijaithai.or.th/
import React from 'react';
import { Award, Users, Sparkles } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { 
      number: "๕๐", 
      label: "ปีแห่งการให้ (ก่อตั้ง พ.ศ. ๒๕๑๘)", 
      icon: Award 
    },
    { 
      number: "๔,๐๐๐+", 
      label: "สมาชิกและครอบครัวที่ดูแล", 
      icon: Users 
    },
    { 
      number: "๑,๐๐๐+", 
      label: "ผลิตภัณฑ์งานฝีมือสร้างอาชีพ", 
      icon: Sparkles 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 relative z-10 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[#2a0e38]/60 backdrop-blur-md rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-[#b38728]/30 group hover:border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
              <stat.icon className="text-[#1a0b2e] w-8 h-8" />
            </div>
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] mb-3 animate-pulse">
              {stat.number}
            </div>
            <div className="text-[#fcf6ba]/80 text-lg font-sans tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
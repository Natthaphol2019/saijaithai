// src/sections/GallerySection.jsx
import React, { useState } from 'react';
import { X, Sparkles, Feather } from 'lucide-react';

export default function GallerySection() {
  const [selectedArt, setSelectedArt] = useState(null);

  const masterpieces = [
    { 
      id: 1,
      title: "ดอกแก้วเจียระไน", 
      artist: "ร้อยเอก สมชาย ใจกล้า", 
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Glass+Flower+Art",
      desc: "ความงดงามที่เกิดจากสองมือของผู้ที่ไม่ยอมแพ้ต่อโชคชะตา แต่ละกลีบดอกคือความพยายามที่ไม่รู้จักย่อท้อ แกะสลักลวดลายลงบนแก้วด้วยเทคนิคชั้นสูง",
      category: "งานแก้ว",
      year: "๒๕๖๖"
    },
    { 
      id: 2,
      title: "กระเป๋าหนังลายไทย", 
      artist: "อาสาสมัคร วินัย ศรีสุข", 
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Thai+Leather+Craft",
      desc: "ทุกฝีเข็มคือความอดทน ทุกรอยลายคือจิตวิญญาณความเป็นไทยที่ถูกถ่ายทอดผ่านฝีมือช่างผู้ทุ่มเท ผสมผสานลวดลายกนกเข้ากับดีไซน์ร่วมสมัย",
      category: "งานหนัง",
      year: "๒๕๖๕"
    },
    { 
      id: 3,
      title: "ภาพวาดสีน้ำมัน", 
      artist: "จ่าสิบเอก ปรีชา วงศ์ดี", 
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Oil+Painting+Landscape",
      desc: "ภาพทิวทัศน์บ้านเกิด ที่วาดขึ้นด้วยความคิดถึง ความหวัง และรอยยิ้มที่ไม่เคยจางหาย สื่อถึงความสงบสุขที่เหล่าทหารกล้าได้ปกป้องไว้",
      category: "จิตรกรรม",
      year: "๒๕๖๗"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* หัวข้อ (Header) */}
      <div className="text-center mb-20">
        <Feather size={48} className="mx-auto text-[#d4af37] mb-6 opacity-80 animate-float" />
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] mb-8">
          หอศิลป์แห่งชีวิต
        </h2>
        <div className="bg-[#2a0e38]/60 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-[#b38728]/30">
          <p className="text-[#fcf6ba]/90 text-xl md:text-2xl leading-loose font-light">
            "มิใช่เพียงร่างกาย ที่ยอมแลกเพื่อแผ่นดิน<br className="hidden md:block"/>
            แต่มิสิ้นจินตนาการ และความฝันอันสดใส<br className="hidden md:block"/>
            <span className="text-[#d4af37] font-semibold">ชมผลงานจากหัวใจ... ผู้ที่ไม่ยอมแพ้ต่อโชคชะตา</span>"
          </p>
        </div>
      </div>

      {/* ตารางรูปภาพ (Gallery Grid) */}
      <div className="grid md:grid-cols-3 gap-10 pb-32">
        {masterpieces.map((art) => (
          <div 
            key={art.id} 
            onClick={() => setSelectedArt(art)} // กดเพื่อเปิด Popup
            className="group relative h-[550px] overflow-hidden rounded-3xl border-2 border-[#b38728]/40 bg-[#0d0221] hover:border-[#d4af37]/70 hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700 cursor-pointer"
          >
            {/* ป้ายหมวดหมู่ */}
            <div className="absolute top-6 left-6 z-20 bg-[#2a0e38]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#b38728]/50">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider">{art.category}</span>
            </div>

            {/* รูปภาพ */}
            <div className="h-full w-full overflow-hidden">
              <img 
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-90" 
              />
            </div>

            {/* ข้อความลอยขึ้นมา (Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#2a0e38]/90 to-transparent translate-y-[65%] group-hover:translate-y-0 transition-transform duration-700 flex flex-col justify-end p-8 text-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-2 font-serif drop-shadow-lg">
                  {art.title}
                </h3>
                <p className="text-[#d4af37] text-sm tracking-widest font-bold mb-4">{art.artist}</p>
                <div className="text-[#fcf6ba] text-sm border border-[#d4af37] px-4 py-2 rounded-full inline-block hover:bg-[#d4af37] hover:text-[#1a0b2e] transition">
                  กดเพื่อดูรายละเอียด
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ Detail Modal (หน้าต่างรายละเอียดแบบ Popup) ✨ */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* พื้นหลังสีดำจางๆ (Backdrop) */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedArt(null)} // กดพื้นหลังเพื่อปิด
          ></div>

          {/* กล่องเนื้อหา (Content Card) */}
          <div className="relative w-full max-w-5xl bg-[#1a0b2e] border border-[#b38728]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up">
            
            {/* ปุ่มปิด */}
            <button 
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-[#d4af37] hover:text-black transition"
            >
              <X size={24} />
            </button>

            {/* ฝั่งรูปภาพ (ซ้าย) */}
            <div className="md:w-1/2 h-[400px] md:h-[600px] relative">
              <img 
                src={selectedArt.img} 
                alt={selectedArt.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* ฝั่งเนื้อหา (ขวา) */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#d4af37] text-[#1a0b2e] text-xs font-bold rounded-full">{selectedArt.category}</span>
                <span className="text-[#fcf6ba]/60 text-sm">ปีที่สร้างสรรค์: {selectedArt.year}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] mb-2 font-serif">
                {selectedArt.title}
              </h2>
              
              <div className="text-xl text-[#d4af37] mb-6 flex items-center gap-2">
                <Sparkles size={20} />
                {selectedArt.artist}
              </div>

              <div className="w-20 h-1 bg-[#d4af37]/30 mb-6"></div>

              <p className="text-[#fcf6ba]/80 text-lg leading-relaxed font-light">
                {selectedArt.desc}
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                <button className="flex-1 py-3 bg-[#d4af37] text-[#1a0b2e] font-bold rounded-xl hover:bg-white transition shadow-lg">
                  สนใจสนับสนุนผลงาน
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
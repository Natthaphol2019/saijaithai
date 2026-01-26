// src/sections/GallerySection.jsx
import React, { useState } from 'react';
import { X, Sparkles, Feather } from 'lucide-react';

export default function GallerySection() {
  const [selectedArt, setSelectedArt] = useState(null);

  // ข้อมูลสินค้าจริงจากมูลนิธิสายใจไทย
  const masterpieces = [
    { 
      id: 1,
      title: "แก้วเจียระไนลายวิจิตร", 
      artist: "ช่างฝีมือทหารผ่านศึก", 
      img: "/images/1006.png", // แนะนำ: หารูปแก้วไวน์หรือแก้วน้ำที่มีลวดลายกัดทรายมาใส่
      desc: "งานศิลปะบนแก้วที่ใช้เทคนิคการพ่นทรายและเจียระไนด้วยมืออย่างประณีต ลวดลายที่งดงามเกิดจากความอดทนและสมาธิของผู้สร้างสรรค์ แต่ละใบคือความภูมิใจของผู้พิทักษ์แผ่นดิน",
      category: "งานแก้ว",
      year: "งานฝีมือ"
    },
    { 
      id: 2,
      title: "กระเป๋าหนังแท้สายใจไทย", 
      artist: "แผนกเครื่องหนัง", 
      img: "/images/1007.png", // แนะนำ: หารูปกระเป๋าถือหนังแท้เรียบหรูมาใส่
      desc: "ผลิตภัณฑ์เครื่องหนังคุณภาพสูงที่ตัดเย็บอย่างพิถีพิถัน โดยสมาชิกผู้ทุพพลภาพที่ผ่านการฝึกฝนวิชาชีพจนชำนาญ ทนทาน สวยงาม และเปี่ยมด้วยจิตวิญญาณแห่งการสู้ชีวิต",
      category: "งานหนัง",
      year: "งานฝีมือ"
    },
    { 
      id: 3,
      title: "งานพู่กันระบายสีบนไม้", 
      artist: "แผนกงานพู่กัน", 
      img: "/images/1008.png", // แนะนำ: หารูปแจกันไม้เพนต์ลายดอกไม้ หรือกล่องไม้มาใส่
      desc: "การแต้มสีสันลงบนงานไม้และกระเบื้องอย่างวิจิตรบรรจง เช่น แจกันไม้มะม่วง ลวดลายดอกไม้และภาพธรรมชาติ ที่สะท้อนถึงความละเอียดอ่อนและความหวังใหม่ในชีวิต",
      category: "งานจิตรกรรม",
      year: "งานฝีมือ"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      
      {/* หัวข้อ (Header) */}
      <div className="text-center mb-20">
        <Feather size={48} className="mx-auto text-[#d4af37] mb-6 opacity-80 animate-float" />
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] mb-8 font-serif">
          หอศิลป์แห่งชีวิต
        </h2>
        <div className="bg-[#2a0e38]/60 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-[#b38728]/30 shadow-lg">
          <p className="text-[#fcf6ba]/90 text-xl md:text-2xl leading-loose font-light">
            "มิใช่เพียงร่างกาย ที่ยอมแลกเพื่อแผ่นดิน<br className="hidden md:block"/>
            แต่มิสิ้นจินตนาการ และความฝันอันสดใส<br className="hidden md:block"/>
            <span className="text-[#d4af37] font-semibold">ชมผลงานจากหัวใจ... ผู้ที่ไม่ยอมแพ้ต่อโชคชะตา</span>"
          </p>
        </div>
      </div>

      {/* ตารางรูปภาพ (Gallery Grid) */}
      <div className="grid md:grid-cols-3 gap-10">
        {masterpieces.map((art) => (
          <div 
            key={art.id} 
            onClick={() => setSelectedArt(art)} // กดเพื่อเปิด Popup
            className="group relative h-[500px] overflow-hidden rounded-3xl border-2 border-[#b38728]/40 bg-[#0d0221] hover:border-[#d4af37]/70 hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700 cursor-pointer"
          >
            {/* ป้ายหมวดหมู่ */}
            <div className="absolute top-6 left-6 z-20 bg-[#2a0e38]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#b38728]/50 shadow-lg">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider">{art.category}</span>
            </div>

            {/* รูปภาพ */}
            <div className="h-full w-full overflow-hidden">
              <img 
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                onError={(e) => {
                    e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Sai+Jai+Thai+Art"; // รูปสำรองถ้าหาไม่เจอ
                }} 
              />
            </div>

            {/* ข้อความลอยขึ้นมา (Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#2a0e38]/80 to-transparent translate-y-[60%] group-hover:translate-y-0 transition-transform duration-700 flex flex-col justify-end p-8 text-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif drop-shadow-lg">
                  {art.title}
                </h3>
                <p className="text-[#d4af37] text-sm tracking-widest font-bold mb-4">{art.artist}</p>
                <div className="text-[#fcf6ba] text-sm border border-[#d4af37] px-6 py-2 rounded-full inline-block hover:bg-[#d4af37] hover:text-[#1a0b2e] transition font-medium">
                  ดูรายละเอียด
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
            onClick={() => setSelectedArt(null)}
          ></div>

          {/* กล่องเนื้อหา (Content Card) */}
          <div className="relative w-full max-w-5xl bg-[#1a0b2e] border border-[#b38728]/50 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)] flex flex-col md:flex-row animate-scale-up">
            
            {/* ปุ่มปิด */}
            <button 
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-[#d4af37] hover:text-black transition backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            {/* ฝั่งรูปภาพ (ซ้าย) */}
            <div className="md:w-1/2 h-[400px] md:h-auto relative">
              <img 
                src={selectedArt.img} 
                alt={selectedArt.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Sai+Jai+Thai+Art";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1a0b2e]/50"></div>
            </div>

            {/* ฝั่งเนื้อหา (ขวา) */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left bg-[#1a0b2e]">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#d4af37] text-[#1a0b2e] text-xs font-bold rounded-full">{selectedArt.category}</span>
                <span className="text-[#fcf6ba]/60 text-sm">ประเภท {selectedArt.year}</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] mb-4 font-serif leading-tight">
                {selectedArt.title}
              </h2>
              
              <div className="text-lg text-[#d4af37] mb-8 flex items-center gap-2 font-medium">
                <Sparkles size={20} />
                โดย {selectedArt.artist}
              </div>

              <div className="w-16 h-1 bg-[#d4af37]/30 mb-8"></div>

              <p className="text-[#fcf6ba]/80 text-lg leading-relaxed font-light mb-8">
                {selectedArt.desc}
              </p>

              
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
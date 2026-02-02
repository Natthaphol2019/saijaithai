// src/sections/GallerySection.jsx
import React, { useState } from 'react';
import { X, Sparkles, Feather, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [selectedArt, setSelectedArt] = useState(null);

  const masterpieces = [
    { 
      id: 1,
      title: "แก้วเจียระไนลายวิจิตร", 
      artist: "ช่างฝีมือทหารผ่านศึก", 
      img: "/images/1006.webp",
      desc: "งานศิลปะบนแก้วที่ใช้เทคนิคการพ่นทรายและเจียระไนด้วยมืออย่างประณีต ลวดลายที่งดงามเกิดจากความอดทนและสมาธิของผู้สร้างสรรค์ แต่ละใบคือความภูมิใจของผู้พิทักษ์แผ่นดิน",
      category: "งานแก้ว",
      year: "งานฝีมือ"
    },
    { 
      id: 2,
      title: "กระเป๋าหนังแท้สายใจไทย", 
      artist: "แผนกเครื่องหนัง", 
      img: "/images/1007.webp",
      desc: "ผลิตภัณฑ์เครื่องหนังคุณภาพสูงที่ตัดเย็บอย่างพิถีพิถัน โดยสมาชิกผู้ทุพพลภาพที่ผ่านการฝึกฝนวิชาชีพจนชำนาญ ทนทาน สวยงาม และเปี่ยมด้วยจิตวิญญาณแห่งการสู้ชีวิต",
      category: "งานหนัง",
      year: "งานฝีมือ"
    },
    { 
      id: 3,
      title: "งานพู่กันระบายสีบนไม้", 
      artist: "แผนกงานพู่กัน", 
      img: "/images/1008.webp",
      desc: "การแต้มสีสันลงบนงานไม้และกระเบื้องอย่างวิจิตรบรรจง เช่น แจกันไม้มะม่วง ลวดลายดอกไม้และภาพธรรมชาติ ที่สะท้อนถึงความละเอียดอ่อนและความหวังใหม่ในชีวิต",
      category: "งานจิตรกรรม",
      year: "งานฝีมือ"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
       
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
             <Feather size={32} className="text-[#d4af37]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] mb-6 font-serif leading-tight drop-shadow-lg">
            หอศิลป์แห่งชีวิต
          </h2>
          <div className="max-w-3xl mx-auto">
             <p className="text-[#fcf6ba]/80 text-lg md:text-xl font-light leading-relaxed">
               "ทุกชิ้นงาน... คือเรื่องราวของหัวใจที่ไม่ยอมแพ้"
             </p>
             <div className="h-[1px] w-20 bg-[#d4af37]/50 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {masterpieces.map((art) => (
            <div 
              key={art.id} 
              onClick={() => setSelectedArt(art)} 
              className="group relative h-[450px] overflow-hidden rounded-3xl border border-[#b38728]/30 bg-[#1a0b2e] cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-20 bg-[#1a0b2e]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#d4af37]/30 shadow-lg">
                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                   <Sparkles size={10} /> {art.category}
                </span>
              </div>

              {/* Image */}
              <div className="h-full w-full relative">
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => { e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Art+Piece"; }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#0d0221]/40 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#fcf6ba] mb-1 font-serif drop-shadow-md leading-tight">{art.title}</h3>
                <p className="text-[#d4af37] text-sm tracking-wide font-medium mb-4">{art.artist}</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1a0b2e] bg-[#d4af37] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-white">
                  <ZoomIn size={14} /> ดูรายละเอียด
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedArt && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedArt(null)}></div>
            <div className="relative w-full max-w-5xl bg-[#1a0b2e] border border-[#d4af37]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-50 max-h-[90vh]">
              <button onClick={() => setSelectedArt(null)} className="absolute top-4 right-4 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-[#d4af37] hover:text-[#1a0b2e] transition backdrop-blur-md border border-white/10">
                <X size={24} />
              </button>

              <div className="h-64 md:h-auto md:w-1/2 relative shrink-0">
                <img src={selectedArt.img} className="w-full h-full object-cover" alt={selectedArt.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1a0b2e]"></div>
              </div>

              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-[#1a0b2e] overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#d4af37] text-[#1a0b2e] text-xs font-bold rounded-full border border-[#d4af37]">{selectedArt.category}</span>
                    <span className="text-[#fcf6ba]/60 text-xs md:text-sm border border-[#fcf6ba]/20 px-2 py-0.5 rounded-md">{selectedArt.year}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#d4af37] mb-4 font-serif leading-tight">
                    {selectedArt.title}
                  </h2>
                  <div className="text-lg text-[#fcf6ba] mb-6 flex items-center gap-2 font-medium">
                    <Sparkles size={18} className="text-[#d4af37]" /> โดย {selectedArt.artist}
                  </div>
                  <div className="w-full h-[1px] bg-[#d4af37]/20 mb-6"></div>
                  <p className="text-[#fcf6ba]/90 text-base md:text-lg leading-relaxed font-light mb-8">
                    {selectedArt.desc}
                  </p>
                  <button onClick={() => setSelectedArt(null)} className="w-full md:w-auto self-start px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] font-bold hover:bg-[#d4af37] hover:text-[#1a0b2e] transition-colors">
                    ปิดหน้าต่าง
                  </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
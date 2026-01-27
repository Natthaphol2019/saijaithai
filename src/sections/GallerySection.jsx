// src/sections/GallerySection.jsx
import React, { useState } from 'react';
import { X, Sparkles, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // เพิ่ม framer-motion

export default function GallerySection() {
  const [selectedArt, setSelectedArt] = useState(null);

  const masterpieces = [
    { 
      id: 1,
      title: "แก้วเจียระไนลายวิจิตร", 
      artist: "ช่างฝีมือทหารผ่านศึก", 
      img: "/images/1006.png",
      desc: "งานศิลปะบนแก้วที่ใช้เทคนิคการพ่นทรายและเจียระไนด้วยมืออย่างประณีต ลวดลายที่งดงามเกิดจากความอดทนและสมาธิของผู้สร้างสรรค์ แต่ละใบคือความภูมิใจของผู้พิทักษ์แผ่นดิน",
      category: "งานแก้ว",
      year: "งานฝีมือ"
    },
    { 
      id: 2,
      title: "กระเป๋าหนังแท้สายใจไทย", 
      artist: "แผนกเครื่องหนัง", 
      img: "/images/1007.png",
      desc: "ผลิตภัณฑ์เครื่องหนังคุณภาพสูงที่ตัดเย็บอย่างพิถีพิถัน โดยสมาชิกผู้ทุพพลภาพที่ผ่านการฝึกฝนวิชาชีพจนชำนาญ ทนทาน สวยงาม และเปี่ยมด้วยจิตวิญญาณแห่งการสู้ชีวิต",
      category: "งานหนัง",
      year: "งานฝีมือ"
    },
    { 
      id: 3,
      title: "งานพู่กันระบายสีบนไม้", 
      artist: "แผนกงานพู่กัน", 
      img: "/images/1008.png",
      desc: "การแต้มสีสันลงบนงานไม้และกระเบื้องอย่างวิจิตรบรรจง เช่น แจกันไม้มะม่วง ลวดลายดอกไม้และภาพธรรมชาติ ที่สะท้อนถึงความละเอียดอ่อนและความหวังใหม่ในชีวิต",
      category: "งานจิตรกรรม",
      year: "งานฝีมือ"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
      
      {/* Header */}
      <div className="text-center mb-10 md:mb-20">
        <Feather size={32} className="mx-auto text-[#d4af37] mb-4 md:mb-6 opacity-80 animate-float md:w-12 md:h-12" />
        <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] mb-6 font-serif leading-tight">
          หอศิลป์แห่งชีวิต
        </h2>
        <div className="bg-[#2a0e38]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-[#b38728]/30 shadow-lg">
          <p className="text-[#fcf6ba]/90 text-lg md:text-2xl leading-relaxed md:leading-loose font-light">
            "ชมผลงานจากหัวใจ... ผู้ที่ไม่ยอมแพ้ต่อโชคชะตา"
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {masterpieces.map((art) => (
          <motion.div 
            key={art.id} 
            layoutId={`card-${art.id}`} // เตรียมไว้ทำ Morph Animation
            onClick={() => setSelectedArt(art)} 
            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl border-2 border-[#b38728]/40 bg-[#0d0221] cursor-pointer shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Tag */}
            <div className="absolute top-4 left-4 z-20 bg-[#2a0e38]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#b38728]/50 shadow-lg">
              <span className="text-[#d4af37] text-[10px] md:text-xs font-bold uppercase tracking-wider">{art.category}</span>
            </div>

            {/* Image */}
            <div className="h-full w-full overflow-hidden">
              <motion.img 
                layoutId={`img-${art.id}`}
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover transition duration-700 md:group-hover:scale-110 opacity-90"
                onError={(e) => { e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Art"; }} 
              />
            </div>

            {/* Text Overlay (Visible on Mobile / Hover on Desktop) */}
            {/* Mobile: โชว์ตลอดเวลา (opacity-100), Desktop: ซ่อนก่อน (md:opacity-0) แล้วโชว์ตอน hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#2a0e38]/60 to-transparent flex flex-col justify-end p-6 md:p-8 text-center transition-all duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-serif drop-shadow-lg">{art.title}</h3>
                <p className="text-[#d4af37] text-xs md:text-sm tracking-widest font-bold mb-3">{art.artist}</p>
                <div className="text-[#fcf6ba] text-xs border border-[#d4af37] px-4 py-1.5 rounded-full inline-block bg-[#d4af37]/10 backdrop-blur-sm">
                  กดเพื่อดูรายละเอียด
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Detail Modal with Framer Motion ✨ */}
      <AnimatePresence>
        {selectedArt && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedArt(null)}
            ></motion.div>

            {/* Content Card */}
            <motion.div 
              layoutId={`card-${selectedArt.id}`}
              className="relative w-full md:max-w-5xl h-[85vh] md:h-auto md:max-h-[90vh] bg-[#1a0b2e] border-t-2 md:border-2 border-[#b38728]/50 rounded-t-[2rem] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-50"
              initial={{ y: "100%" }} // เริ่มจากข้างล่างสุด
              animate={{ y: 0 }}      // เลื่อนขึ้นมาที่เดิม
              exit={{ y: "100%" }}    // ตอนปิดเลื่อนกลับลงไป
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedArt(null)}
                className="absolute top-4 right-4 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-[#d4af37] hover:text-black transition backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="h-64 md:h-auto md:w-1/2 relative shrink-0">
                <motion.img 
                  layoutId={`img-${selectedArt.id}`}
                  src={selectedArt.img} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1a0b2e]"></div>
              </div>

              {/* Content Section (Fade In Animation) */}
              <div className="flex-1 p-6 md:p-12 flex flex-col justify-start md:justify-center text-left bg-[#1a0b2e] overflow-y-auto">
                
                {/* Drag Handle */}
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 md:hidden shrink-0"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }} // ดีเลย์นิดนึงให้การ์ดขึ้นมาเสร็จก่อน
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#d4af37] text-[#1a0b2e] text-[10px] md:text-xs font-bold rounded-full">{selectedArt.category}</span>
                    <span className="text-[#fcf6ba]/60 text-xs md:text-sm">{selectedArt.year}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] mb-4 font-serif leading-tight">
                    {selectedArt.title}
                  </h2>
                  
                  <div className="text-base md:text-lg text-[#d4af37] mb-6 flex items-center gap-2 font-medium">
                    <Sparkles size={18} />
                    โดย {selectedArt.artist}
                  </div>

                  <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                  <p className="text-[#fcf6ba]/80 text-base md:text-lg leading-relaxed font-light mb-8">
                    {selectedArt.desc}
                  </p>
                </motion.div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
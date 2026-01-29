// src/sections/ImpactSection.jsx
import React, { useState } from 'react';
import { Heart, Hammer, BookOpen, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImpactSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const impacts = [
    {
      id: 1,
      title: "สร้างอาชีพ... สร้างชีวิตใหม่",
      desc: "เปลี่ยนจากผู้รับ... เป็นผู้ให้ ด้วยการฝึกฝนวิชาชีพ ทั้งงานหนัง งานแก้ว และงานฝีมือ ทำให้ทหารผ่านศึกสามารถเลี้ยงดูตนเองและครอบครัวได้อย่างมีศักดิ์ศรี",
      icon: <Hammer size={24} />,
      img: "/images/images1003.jpg", 
      stat: "๔,๐๐๐+ ครอบครัว",
      longDesc: "จากการที่เคยเป็นผู้เสียสละในสนามรบ วันนี้พวกเขากลับมายืนหยัดได้อีกครั้งในฐานะช่างฝีมือผู้เชี่ยวชาญ โครงการฝึกอาชีพของเราไม่เพียงแต่มอบทักษะการทำงานแก้ว งานหนัง และงานประดิษฐ์ แต่ยังเป็นการฟื้นฟูความมั่นใจและศักดิ์ศรีความเป็นมนุษย์ ให้พวกเขาสามารถสร้างรายได้เลี้ยงดูครอบครัว และเป็นที่พึ่งของสังคมต่อไป"
    },
    {
      id: 2,
      title: "การศึกษา... คืออนาคต",
      desc: "มอบทุนการศึกษาแก่บุตรธิดาของทหารผ่านศึกและผู้เสียสละ เพื่อส่งต่อโอกาสและสร้างอนาคตที่สดใส ให้เยาวชนเหล่านี้เติบโตเป็นกำลังสำคัญของชาติต่อไป",
      icon: <BookOpen size={24} />,
      img: "/images/images1004.jpg",
      stat: "๑๐,๐๐๐+ ทุน",
      longDesc: "เพราะเราเชื่อว่าการศึกษาคือรากฐานที่สำคัญที่สุด ทุนการศึกษาสายใจไทยจึงถูกส่งมอบให้กับบุตรหลานของวีรชนผู้เสียสละอย่างต่อเนื่อง เพื่อให้มั่นใจว่าการสูญเสียเสาหลักของครอบครัวจะไม่เป็นอุปสรรคต่อการเรียนรู้ของเยาวชน เรามุ่งหวังให้พวกเขาเติบโตขึ้นเป็นทรัพยากรบุคคลที่มีคุณภาพ และพร้อมที่จะพัฒนาประเทศชาติต่อไปในอนาคต"
    },
    {
      id: 3,
      title: "ดูแลกายใจ... ไม่ทอดทิ้ง",
      desc: "การเยี่ยมเยียนและดูแลสวัสดิการอย่างต่อเนื่อง เพื่อสร้างขวัญและกำลังใจ ให้พวกเขารู้ว่า 'คนไทยไม่เคยลืม' ผู้ที่เสียสละเพื่อแผ่นดิน",
      icon: <Heart size={24} />,
      img: "/images/images1005.jpg", 
      stat: "ดูแลตลอดชีพ",
      longDesc: "นอกเหนือจากการช่วยเหลือด้านวัตถุ สิ่งที่สำคัญยิ่งกว่าคือ 'กำลังใจ' มูลนิธิสายใจไทยจัดทีมงานเยี่ยมเยียนสมาชิกผู้ทุพพลภาพถึงบ้านอย่างสม่ำเสมอ พร้อมดูแลสวัสดิการด้านสุขภาพและเครื่องอุปโภคบริโภคที่จำเป็น เพื่อสื่อสารให้พวกเขารับรู้ว่า 'คนไทยไม่เคยทอดทิ้งกัน' และความเสียสละของพวกเขายังคงอยู่ในความทรงจำของเราเสมอ"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#1a0b2e]">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bf953f] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block p-3 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-4 animate-float">
             <Heart size={32} className="text-[#d4af37] fill-[#d4af37]/20" />
          </div>
          
          {/* ✅ แก้ไขจุดที่ 1: เพิ่ม py-2 และ leading-tight เพื่อให้สระ/วรรณยุกต์ไม่โดนตัด */}
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] font-serif py-2 leading-tight">
            ภารกิจแห่งการ "ให้" ที่ยั่งยืน
          </h2>

          <p className="text-[#fcf6ba]/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            "การสงเคราะห์ทหารผ่านศึกนั้น... ขอให้ช่วยเพื่อให้เขาช่วยเหลือตนเองได้ ไม่ใช่ให้เขาตลอดไป"
            <br/>
            <span className="text-[#d4af37] text-sm mt-2 block opacity-80">— พระราชดำรัสเพื่อความยั่งยืน</span>
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((item) => (
            <motion.div 
              key={item.id}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#2a0e38]/40 backdrop-blur-md border border-[#b38728]/30 rounded-3xl overflow-hidden hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Image Area */}
              <motion.div layoutId={`image-wrap-${item.id}`} className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] to-transparent z-10 opacity-80"></div>
                <motion.img 
                  layoutId={`image-${item.id}`}
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/2a0e38/d4af37?text=Sai+Jai+Thai";
                  }}
                />
              </motion.div>

              {/* Text Content */}
              <div className="p-8 pt-10">
                <motion.h3 layoutId={`title-${item.id}`} className="text-2xl font-bold text-[#fcf6ba] mb-3 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </motion.h3>
                <p className="text-[#fcf6ba]/60 text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-[#d4af37] text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  อ่านเรื่องราวเต็ม <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Modal Section --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 overflow-y-auto"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setSelectedItem(null)}></div>

            <motion.div
              layoutId={`card-container-${selectedItem.id}`}
              className="relative w-full max-w-5xl bg-[#1a0b2e] border-2 border-[#d4af37] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 my-8"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-[#d4af37] hover:text-black transition backdrop-blur-sm">
                <X size={24} />
              </button>

              {/* รูปภาพฝั่งซ้าย */}
              <motion.div layoutId={`image-wrap-${selectedItem.id}`} className="md:w-1/2 relative h-72 md:h-auto">
                 <motion.img 
                   layoutId={`image-${selectedItem.id}`}
                   src={selectedItem.img} 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent md:bg-gradient-to-r"></div>
              </motion.div>

              {/* เนื้อหาฝั่งขวา */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#1a0b2e]">
                 <div className="flex items-center gap-2 mb-4 text-[#d4af37]">
                    <Sparkles size={18}/>
                    <span className="text-sm font-bold uppercase tracking-wider">ภารกิจสายใจไทย</span>
                 </div>
                 
                 <motion.h3 layoutId={`title-${selectedItem.id}`} className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-6 font-serif leading-tight">
                    {selectedItem.title}
                 </motion.h3>

                 <div className="w-20 h-1 bg-[#d4af37]/30 mb-8"></div>

                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="space-y-6"
                 >
                    <p className="text-[#fcf6ba]/90 text-lg leading-relaxed font-light">
                      {selectedItem.longDesc}
                    </p>
                    
                    <div className="pt-6 border-t border-[#fcf6ba]/10 flex items-center justify-between">
                        <div>
                            <div className="text-[#fcf6ba]/60 text-sm">ผลลัพธ์สะสม</div>
                            <div className="text-2xl font-bold text-[#d4af37]">{selectedItem.stat}</div>
                        </div>
                        <button onClick={() => setSelectedItem(null)} className="px-6 py-2 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-[#1a0b2e] transition">
                            ปิดหน้าต่าง
                        </button>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
// src/sections/ImpactSection.jsx
import React from 'react';
import { Heart, Hammer, BookOpen, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  const impacts = [
    {
      id: 1,
      title: "สร้างอาชีพ... สร้างชีวิตใหม่",
      desc: "เปลี่ยนจากผู้รับ... เป็นผู้ให้ ด้วยการฝึกฝนวิชาชีพ ทั้งงานหนัง งานแก้ว และงานฝีมือ ทำให้ทหารผ่านศึกสามารถเลี้ยงดูตนเองและครอบครัวได้อย่างมีศักดิ์ศรี",
      icon: <Hammer size={24} />,
      img: "/images/images1003.jpg", // แนะนำ: รูปการฝึกอาชีพ หรือรูปช่างกำลังทำงาน
      stat: "๔,๐๐๐+ ครอบครัว"
    },
    {
      id: 2,
      title: "การศึกษา... คืออนาคต",
      desc: "มอบทุนการศึกษาแก่บุตรธิดาของทหารผ่านศึกและผู้เสียสละ เพื่อส่งต่อโอกาสและสร้างอนาคตที่สดใส ให้เยาวชนเหล่านี้เติบโตเป็นกำลังสำคัญของชาติต่อไป",
      icon: <BookOpen size={24} />,
      img: "/images/images1004.jpg", // แนะนำ: รูปเด็กนักเรียน หรือพิธีมอบทุน
      stat: "๑๐,๐๐๐+ ทุน"
    },
    {
      id: 3,
      title: "ดูแลกายใจ... ไม่ทอดทิ้ง",
      desc: "การเยี่ยมเยียนและดูแลสวัสดิการอย่างต่อเนื่อง เพื่อสร้างขวัญและกำลังใจ ให้พวกเขารู้ว่า 'คนไทยไม่เคยลืม' ผู้ที่เสียสละเพื่อแผ่นดิน",
      icon: <Heart size={24} />,
      img: "/images/images1005.jpg", // แนะนำ: รูปการเยี่ยมเยียน หรือมอบของขวัญ
      stat: "ดูแลตลอดชีพ"
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
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] font-serif">
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
            <div 
              key={item.id}
              className="group relative bg-[#2a0e38]/40 backdrop-blur-md border border-[#b38728]/30 rounded-3xl overflow-hidden hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] to-transparent z-10 opacity-80"></div>
                {/* รูปภาพ */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400/2a0e38/d4af37?text=Sai+Jai+Thai"; // รูปสำรอง
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="p-8 pt-10">
                <h3 className="text-2xl font-bold text-[#fcf6ba] mb-3 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#fcf6ba]/60 text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-[#d4af37] text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  อ่านเรื่องราว <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
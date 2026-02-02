// src/sections/ChairpersonSection.jsx
import React from 'react';
import { Award, BookOpen, Heart, Sparkles } from 'lucide-react';

export default function ChairpersonSection() {
  return (
    // ใช้ py-24 แทน min-h-screen เพื่อความสูงที่พอดีกับเนื้อหา
    <section className="py-24 px-6 bg-gradient-to-b from-[#1a0526] to-[#2a0e38] relative overflow-hidden text-[#fcf6ba]">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bf953f] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#d4af37] rounded-full blur-[120px] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- รูปภาพ (ซ้าย) --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-t-full rounded-b-2xl p-3 border-2 border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm">
              <div className="aspect-[3/4] rounded-t-full rounded-b-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] relative group">
                <img 
                  src="/images/images1002.webp" 
                  alt="สมเด็จพระกนิษฐาธิราชเจ้าฯ" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Royal+Portrait"; 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0e38]/80 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="absolute top-10 -right-6 w-full h-full border-2 border-[#b38728]/20 rounded-t-full rounded-b-2xl -z-10 hidden md:block"></div>
          </div>

          {/* --- เนื้อหา (ขวา) --- */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
                <Sparkles size={16} className="text-[#d4af37]" />
                <span className="text-[#d4af37] text-sm font-bold uppercase tracking-wider">องค์ประธานมูลนิธิ</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c]">
                สมเด็จพระกนิษฐาธิราชเจ้า <br />
                กรมสมเด็จพระเทพรัตนราชสุดาฯ
              </h2>
              <p className="text-xl text-[#d4af37] font-light tracking-wide">
                สยามบรมราชกุมารี
              </p>
            </div>

            <p className="text-lg text-[#fcf6ba]/80 leading-relaxed font-light">
              ทรงเป็นองค์ประธานกรรมการบริหารมูลนิธิสายใจไทยฯ ผู้ทรงสืบสานพระราชปณิธานในการดูแลผู้เสียสละเพื่อแผ่นดิน 
              ทรงเอาพระทัยใส่ในทุกข์สุขของผู้บาดเจ็บทุพพลภาพ และทรงส่งเสริมการสร้างอาชีพให้พวกเขามีชีวิตใหม่อย่างมีศักดิ์ศรี
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#fffdf5]/5 border border-[#d4af37]/20 p-6 rounded-xl hover:bg-[#d4af37]/10 transition-colors duration-300">
                <BookOpen className="text-[#d4af37] mb-4" size={32} />
                <h3 className="text-[#fcf6ba] font-bold text-lg mb-2">พระปรีชาสามารถ</h3>
                <p className="text-[#fcf6ba]/60 text-sm leading-relaxed">
                  ทรงสำเร็จการศึกษาอักษรศาสตรบัณฑิต เกียรตินิยมอันดับหนึ่ง เหรียญทอง จากจุฬาลงกรณ์มหาวิทยาลัย และทรงนำความรู้มาประยุกต์ใช้พัฒนาสังคม
                </p>
              </div>

              <div className="bg-[#fffdf5]/5 border border-[#d4af37]/20 p-6 rounded-xl hover:bg-[#d4af37]/10 transition-colors duration-300">
                <Heart className="text-[#d4af37] mb-4" size={32} />
                <h3 className="text-[#fcf6ba] font-bold text-lg mb-2">พระเมตตาธรรม</h3>
                <p className="text-[#fcf6ba]/60 text-sm leading-relaxed">
                  "ทรงเป็นผู้มีพระทัยอ่อนโยน ทรงมีพระเมตตาเอาพระทัยใส่ในทุกข์สุขของผู้อื่นอยู่เสมอ"
                  <br/>
                  <span className="text-[#b38728] text-xs mt-2 block">- พระบรมราโชวาท รัชกาลที่ ๙</span>
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#d4af37] pl-6 py-2 relative">
               <span className="text-6xl text-[#d4af37]/20 font-serif absolute -top-6 -left-2">"</span>
               <p className="italic text-[#fcf6ba]/90 text-lg relative z-10">
                 ข้าพเจ้าจึงขอเชิญชวนพี่น้องประชาชนชาวไทย พร้อมใจกันบริจาคสมทบทุนมูลนิธิสายใจไทยฯ นี้ 
                 เพื่อเป็นหลักประกันความมั่นคงแก่ชีวิตของวีรชนผู้เสียสละ
               </p>
               <footer className="text-[#b38728] text-sm mt-3 font-medium">
                 — พระราชดำรัส เนื่องในวันสายใจไทย
               </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
}
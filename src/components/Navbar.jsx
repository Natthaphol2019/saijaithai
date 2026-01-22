// src/components/Navbar.jsx
import React from 'react';
import { Heart, Star, BookOpen, Image as ImageIcon } from 'lucide-react';

export default function Navbar({ scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2a0e38]/90 backdrop-blur-md border-b border-[#b38728]/40 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo ฝั่งซ้าย */}
        <button onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4 group text-left">
           <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-md rounded-full opacity-70 group-hover:opacity-100 transition animate-glow"></div>
             <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] relative z-10 shadow-xl">
               <div className="w-full h-full bg-[#2a0e38] rounded-full flex items-center justify-center">
                 <Heart className="w-7 h-7 text-[#fcf6ba] fill-current animate-float" />
               </div>
             </div>
           </div>
           <div>
             <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] drop-shadow-lg tracking-wide">
               มูลนิธิสายใจไทย
             </h1>
             <p className="text-xs text-[#fcf6ba]/80 font-sans tracking-widest flex items-center gap-1">
               <Star size={10} className="text-[#d4af37]" /> ในพระบรมราชูปถัมภ์
             </p>
           </div>
        </button>
        
        {/* ปุ่มเมนู ฝั่งขวา */}
        <div className="flex gap-3">
          <button 
            onClick={() => scrollToSection('activities')} 
            className="px-4 py-2 rounded-lg hover:bg-white/5 text-[#fcf6ba] hover:text-[#d4af37] transition font-semibold text-sm flex items-center gap-2"
          >
            <BookOpen size={16} /> <span className="hidden sm:inline">พระราชกรณียกิจ</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="relative group px-6 py-2 rounded-full overflow-hidden border border-[#b38728]/50"
          >
             <span className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] opacity-0 group-hover:opacity-100 transition duration-500"></span>
             <div className="relative z-10 flex items-center gap-2 text-[#fcf6ba] group-hover:text-[#1a0b2e] transition font-bold text-sm">
               <ImageIcon size={16} /> หอศิลป์
             </div>
          </button>
        </div>

      </div>
    </nav>
  );
}
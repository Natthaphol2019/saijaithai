// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Heart, Star, BookOpen, Image as ImageIcon, Home, User, Activity } from 'lucide-react';

export default function Navbar({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);

  // ตรวจจับการ Scroll เพื่อปรับพื้นหลัง Topbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // รายการเมนู
  // ตัด Donate ออกตามคำสั่ง และใช้ id 'gallery' ให้ตรงกับ App.jsx
  const navItems = [
    { id: 'home', label: 'หน้าแรก', icon: Home },
    { id: 'chairperson', label: 'องค์ประธาน', icon: User },
    { id: 'activities', label: 'กิจกรรม', icon: Activity },
    { id: 'gallery', label: 'หอศิลป์', icon: ImageIcon },
  ];

  return (
    <>
      {/* ==============================================
          1. TOP NAVBAR (สำหรับ Desktop / Laptop)
         ============================================== */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#2a0e38]/95 backdrop-blur-md border-[#b38728]/40 shadow-xl py-2' 
            : 'bg-[#2a0e38]/80 backdrop-blur-sm border-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* --- LOGO (ซ้าย) --- */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group text-left">
             <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-md rounded-full opacity-60 group-hover:opacity-100 transition animate-glow"></div>
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full p-[2px] bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] relative z-10 shadow-xl">
                 <div className="w-full h-full bg-[#2a0e38] rounded-full flex items-center justify-center">
                   <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#fcf6ba] fill-current animate-float" />
                 </div>
               </div>
             </div>
             <div>
               <h1 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] drop-shadow-lg tracking-wide">
                 มูลนิธิสายใจไทย
               </h1>
               <p className="text-[10px] md:text-xs text-[#fcf6ba]/80 font-sans tracking-widest hidden sm:flex items-center gap-1">
                 <Star size={10} className="text-[#d4af37]" /> ในพระบรมราชูปถัมภ์
               </p>
             </div>
          </button>
          
          {/* --- DESKTOP MENU (ขวา) --- */}
          {/* hidden บนมือถือ, flex บนจอ md ขึ้นไป */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-300 text-[#fcf6ba] hover:bg-white/10 hover:text-[#d4af37]"
              >
                <item.icon size={18} /> 
                {item.label}
              </button>
            ))}
          </div>

        </div>
      </nav>

      {/* ==============================================
          2. BOTTOM NAVBAR (สำหรับ Mobile)
         ============================================== */}
      {/* flex บนมือถือ, hidden บนจอ md ขึ้นไป */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#1a0b2e]/95 backdrop-blur-xl border-t border-[#b38728]/30 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center justify-center w-full h-full gap-1 transition-all active:scale-95 text-[#fcf6ba]/60 hover:text-[#d4af37] focus:text-[#d4af37]"
            >
              <div className="p-1.5 rounded-full hover:bg-[#d4af37]/10 transition-colors">
                <item.icon size={22} />
              </div>
              <span className="text-[10px] font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
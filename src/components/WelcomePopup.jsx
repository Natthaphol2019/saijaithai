// src/components/WelcomePopup.jsx
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
// ลบ import framer-motion ออก

export default function WelcomePopup({ onClose }) {
  // ใช้ State เพื่อทำ Animation ง่ายๆ แทน framer-motion
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ให้เวลา browser render แป๊บนึงแล้วค่อยแสดง (เพื่อ trig transition)
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Overlay: เพิ่ม transition-opacity
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 sm:px-8 sm:py-8 bg-black/90 backdrop-blur-sm overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      
      {/* Container: เปลี่ยน motion.div เป็น div ธรรมดา + Tailwind Transition */}
      <div 
        className={`relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] flex flex-col items-center z-10 transform transition-all duration-700 ease-out ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-8 opacity-0'}`}
      >
        
        {/* ปุ่มปิด (X) */}
        <button 
          onClick={onClose}
          className="absolute -top-10 -right-2 sm:-top-12 sm:right-0 z-30 group bg-black/50 hover:bg-[#d4af37] text-white hover:text-[#0d0221] p-2 sm:p-3 rounded-full transition-all duration-300 border border-[#d4af37]/50 backdrop-blur-md"
          title="ปิดหน้าต่าง"
        >
          <X size={20} className="sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* --- ส่วนของรูปภาพ --- */}
        <div className="relative group w-full shadow-2xl">
          
          {/* 1. Golden Aura */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] rounded-xl blur-md opacity-70 animate-pulse"></div>
          
          {/* ตัวกรอบรูปภาพ */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37] bg-black">
            
            {/* 2. Corner Accents */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 border-[#d4af37] rounded-tl-lg z-20 opacity-80"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 border-[#d4af37] rounded-br-lg z-20 opacity-80"></div>

            {/* รูปภาพ Responsive */}
            <img 
              src="/images/1000years.webp" 
              alt="Welcome Banner" 
              className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain block transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out relative z-10"
            />
            
            {/* 3. Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none z-20"></div>
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-colors duration-500 z-15 pointer-events-none"></div>
          </div>
        </div>

        {/* ปุ่มกดด้านล่าง: เปลี่ยน motion.button เป็น button */}
        <button 
          onClick={onClose}
          className={`mt-4 sm:mt-6 md:mt-8 group relative px-8 py-2.5 sm:px-12 sm:py-3 overflow-hidden rounded-full bg-[#1a0b2e] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-2 text-[#d4af37] text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase group-hover:text-[#1a0b2e] transition-colors">
            เข้าสู่เว็บไซต์
          </span>
        </button>

      </div>
    </div>
  );
}
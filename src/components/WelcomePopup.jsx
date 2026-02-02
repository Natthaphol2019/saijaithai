// src/components/WelcomePopup.jsx
import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WelcomePopup({ onClose }) {
  return (
    // Overlay: พื้นหลังสีดำจางๆ + Backdrop Blur
    // ใช้ flex และ p-4 เพื่อเว้นระยะขอบไม่ให้ติดจอเกินไปในมือถือ
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 sm:px-8 sm:py-8 bg-black/90 backdrop-blur-sm overflow-hidden transition-all">
      
      {/* Container: กล่องหลัก */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] flex flex-col items-center z-10"
      >
        
        {/* ปุ่มปิด (X) */}
        {/* Mobile: อยู่มุมขวาบนของรูป (กดง่าย) / Desktop: ลอยออกไปด้านนอกนิดนึง */}
        <button 
          onClick={onClose}
          className="absolute -top-10 -right-2 sm:-top-12 sm:right-0 z-30 group bg-black/50 hover:bg-[#d4af37] text-white hover:text-[#0d0221] p-2 sm:p-3 rounded-full transition-all duration-300 border border-[#d4af37]/50 backdrop-blur-md"
          title="ปิดหน้าต่าง"
        >
          <X size={20} className="sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* --- ส่วนของรูปภาพที่มีลูกเล่น --- */}
        <div className="relative group w-full shadow-2xl">
          
          {/* 1. Golden Aura: แสงทองเรืองรองรอบๆ รูป */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] rounded-xl blur-md opacity-70 animate-pulse-slow"></div>
          
          {/* ตัวกรอบรูปภาพ */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37] bg-black">
            
            {/* 2. Corner Accents: ลวดลายมุมทอง */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 border-[#d4af37] rounded-tl-lg z-20 opacity-80"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 border-[#d4af37] rounded-br-lg z-20 opacity-80"></div>

            {/* รูปภาพ Responsive */}
            {/* max-h-[60vh] สำหรับมือถือ (จะได้เหลือที่ปุ่ม), max-h-[80vh] สำหรับจอใหญ่ */}
            <img 
              src="/images/1000years.webp" 
              alt="Welcome Banner" 
              className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain block transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out relative z-10"
            />
            
            {/* 3. Shine Effect & Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none z-20"></div>
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-colors duration-500 z-15 pointer-events-none"></div>
          </div>
        </div>

        {/* ปุ่มกดด้านล่าง */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="mt-4 sm:mt-6 md:mt-8 group relative px-8 py-2.5 sm:px-12 sm:py-3 overflow-hidden rounded-full bg-[#1a0b2e] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative flex items-center gap-2 text-[#d4af37] text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase group-hover:text-[#1a0b2e] transition-colors">
            เข้าสู่เว็บไซต์
          </span>
        </motion.button>

      </motion.div>
    </div>
  );
}
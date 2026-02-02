// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-[#b38728]/20 bg-[#0d0221]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        
        {/* Copyright */}
        <p className="text-[#fcf6ba] text-sm font-medium tracking-wide">
          © 2025 มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์
        </p>

        {/* Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[#fcf6ba]/50 text-xs font-light">
          <span>พัฒนาโดย นักศึกษา สาขาวิชาคอมพิวเตอร์ธุรกิจ คณะบริหารธุรกิจ</span>
          <span className="hidden sm:inline">•</span>
          <span>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</span>
        </div>

      </div>
    </footer>
  );
}
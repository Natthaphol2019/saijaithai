import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-2">
        
        {/* Copyright: ปรับเป็น text-sm และลดความหนาลงนิดหน่อยเพื่อให้ดูแพง */}
        <p className="text-[#fcf6ba] text-sm font-medium">
          © 2025 มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์
        </p>

        {/* Credits: ปรับเป็น text-xs และรวมบรรทัดเมื่ออยู่บนจอใหญ่ (sm ขึ้นไป) */}
        <div className="text-[#fcf6ba]/60 text-xs font-light flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span>พัฒนาโดย นักศึกษา สาขาวิชาคอมพิวเตอร์ธุรกิจ คณะบริหารธุรกิจ</span>
          <span>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</span>
        </div>

      </div>
    </footer>
  );
}
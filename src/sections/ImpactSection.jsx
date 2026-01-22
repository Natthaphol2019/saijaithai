import React from 'react';
import { Award } from 'lucide-react';

export default function ImpactSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <Award size={48} className="mx-auto text-[#d4af37] mb-6 animate-float" />
      <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] mb-6">ผลกระทบที่เกิดขึ้น</h2>
      <p className="text-[#fcf6ba]/80 text-xl max-w-3xl mx-auto font-light leading-relaxed">
        จากพระราชปณิธาน สู่การเปลี่ยนแปลงที่ยั่งยืน สร้างอาชีพและรายได้ให้แก่ทหารผ่านศึกกว่า 50,000 ครอบครัว
      </p>
    </div>
  );
}
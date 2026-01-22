import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-[#fcf6ba]/50 text-sm font-sans flex items-center justify-center gap-2 flex-wrap">
        <span>© 2025 มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์</span>
        <span className="hidden md:inline">•</span>
        <span className="flex items-center gap-1">
          สร้างด้วย <Heart size={14} className="text-red-400 fill-current animate-pulse" /> เพื่อผู้เสียสละ
        </span>
      </p>
    </div>
  );
}
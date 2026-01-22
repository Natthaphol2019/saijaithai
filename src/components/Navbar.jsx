import React from 'react';
import { Heart, Star, BookOpen, Users, Image as ImageIcon } from 'lucide-react';
function NavButton({ onClick, icon: Icon, label, primary, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden transition-all duration-300 ${primary
          ? 'px-6 py-2.5 rounded-full border border-[#b38728]/50'
          : 'px-4 py-2.5 rounded-lg hover:bg-white/5'
        } ${className}`}
    >
      {primary && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] opacity-0 group-hover:opacity-100 transition duration-500"></span>
      )}
      <div className={`relative z-10 flex items-center gap-2 ${primary
          ? 'text-[#fcf6ba] group-hover:text-[#1a0b2e]'
          : 'text-[#fcf6ba] hover:text-[#d4af37]'
        } transition font-semibold text-sm`}>
        <Icon size={16} /> <span className="hidden sm:inline">{label}</span>
      </div>
    </button>
  );
}
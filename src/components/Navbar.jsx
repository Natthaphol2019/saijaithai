import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Effect ตรวจจับการ Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชัน Scroll ไปยัง Section ต่างๆ
  const scrollToSection = (id) => {
    setIsOpen(false); // ปิดเมนูมือถือ (ถ้าเปิดอยู่)
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // ระยะห่างจากด้านบน (เผื่อ Navbar)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'หน้าแรก', id: 'home' },
    { name: 'ภารกิจของเรา', id: 'impact' },
    { name: 'กิจกรรม', id: 'activities' },
    { name: 'แกลเลอรี', id: 'gallery' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0d0221]/90 backdrop-blur-md py-3 shadow-lg border-b border-[#d4af37]/30' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#d4af37] to-[#aa771c] rounded-full p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain bg-[#1a0b2e] rounded-full p-1" onError={(e) => e.target.src = 'https://placehold.co/100x100/1a0b2e/d4af37?text=SJ'} />
          </div>
          <span className={`text-xl md:text-2xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-[#d4af37]' : 'text-[#fcf6ba] text-shadow-gold'
            }`}>
            SAI JAI THAI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-[#fcf6ba] hover:text-[#d4af37] font-medium transition-all hover:scale-105 text-sm uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </button>
          ))}

          {/* 👇 ปุ่มร่วมบริจาค (แก้ไขให้วิ่งไปที่ id="donate") */}
          <button
            onClick={() => scrollToSection('donate')}
            className="flex items-center gap-2 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all active:scale-95"
          >
            ร่วมบริจาค
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-[#d4af37] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0221]/95 backdrop-blur-xl border-b border-[#d4af37]/30 shadow-2xl py-6 flex flex-col items-center space-y-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-[#fcf6ba] text-lg font-medium hover:text-[#d4af37]"
            >
              {link.name}
            </button>
          ))}
          {/* ปุ่ม Mobile ก็วิ่งไปที่ id="donate" เช่นกัน */}
          <button
            onClick={() => scrollToSection('donate')}
            className="flex items-center gap-2 bg-[#d4af37] text-[#1a0b2e] px-8 py-3 rounded-full font-bold text-lg shadow-lg"
          > ร่วมบริจาค
          </button>
        </div>
      )}
    </nav>
  );
}
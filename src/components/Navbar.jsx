import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Copy, Check } from 'lucide-react'; // เพิ่ม icon Heart, Copy, Check

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDonate, setShowDonate] = useState(false); // State สำหรับเปิด/ปิด Modal บริจาค

  // Effect ตรวจจับการ Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ฟังก์ชัน Scroll ไปยัง Section ต่างๆ
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0d0221]/90 backdrop-blur-md py-3 shadow-lg border-b border-[#d4af37]/30' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#d4af37] to-[#aa771c] rounded-full p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
               <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain bg-[#1a0b2e] rounded-full p-1" onError={(e) => e.target.src='https://placehold.co/100x100/1a0b2e/d4af37?text=SJ'} />
            </div>
            <span className={`text-xl md:text-2xl font-bold tracking-wide transition-colors ${
              isScrolled ? 'text-[#d4af37]' : 'text-[#fcf6ba] text-shadow-gold'
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
            
            {/* 👇 ปุ่มร่วมบริจาค (เด่นพิเศษ) */}
            <button 
              onClick={() => setShowDonate(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <Heart size={18} fill="#1a0b2e" /> ร่วมบริจาค
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
            <button 
              onClick={() => { setShowDonate(true); setIsOpen(false); }}
              className="flex items-center gap-2 bg-[#d4af37] text-[#1a0b2e] px-8 py-3 rounded-full font-bold text-lg shadow-lg"
            >
              <Heart size={20} fill="#1a0b2e" /> ร่วมบริจาค
            </button>
          </div>
        )}
      </nav>

      {/* 👇 Donation Modal Component (ใส่ไว้ในไฟล์เดียวกันเลยเพื่อให้เรียกใช่ง่าย) */}
      {showDonate && <DonationModal onClose={() => setShowDonate(false)} />}
    </>
  );
}

// --- Donation Modal Component ---
function DonationModal({ onClose }) {
  const bankDetails = {
    bankName: "ธนาคารไทยพาณิชย์",
    accountName: "มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์",
    accountNumber: "065-2-19208-8", // ⚠️ ใส่เลขบัญชีจริงที่นี่
    promptPay: "0994000155099" // ⚠️ (ตัวอย่าง) ใส่เลข PromptPay ถ้ามี
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0d0221]/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="bg-[#fffdf5] w-full max-w-lg rounded-3xl shadow-2xl relative overflow-hidden animate-scale-up border-2 border-[#d4af37]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#bf953f] to-[#aa771c] p-6 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-[#1a0b2e]/60 hover:text-[#1a0b2e] bg-white/20 rounded-full p-1 transition-colors">
            <X size={24} />
          </button>
          <div className="w-16 h-16 bg-[#fffdf5] rounded-full mx-auto flex items-center justify-center shadow-inner mb-3">
             <Heart size={32} className="text-[#d4af37]" fill="#d4af37" />
          </div>
          <h3 className="text-[#1a0b2e] text-2xl font-bold font-serif">ร่วมสมทบทุน</h3>
          <p className="text-[#1a0b2e]/80 text-sm">เพื่อช่วยเหลือทหารผ่านศึกและครอบครัว</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Bank Account Info */}
          <div className="bg-white border border-[#e5d0ac] rounded-xl p-4 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-20 h-20 bg-[#d4af37]/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
             
             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">โอนเงินผ่านบัญชีธนาคาร</p>
             <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#4e2c7e] rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">SCB</div>
                <div>
                   <h4 className="text-[#1a0b2e] font-bold text-lg leading-tight">{bankDetails.bankName}</h4>
                   <p className="text-gray-600 text-xs">{bankDetails.accountName}</p>
                </div>
             </div>
             
             {/* Copy Number Section */}
             <div className="bg-[#fcf6ba]/30 rounded-lg p-3 flex justify-between items-center border border-[#d4af37]/20 mt-3">
                <span className="text-[#b38728] font-mono text-xl font-bold tracking-widest">{bankDetails.accountNumber}</span>
                <button 
                  onClick={handleCopy}
                  className="text-[#8c6b1f] hover:text-[#d4af37] p-2 hover:bg-[#d4af37]/10 rounded-full transition-all"
                  title="คัดลอกเลขบัญชี"
                >
                  {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </button>
             </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center space-y-3">
             <div className="inline-block p-3 bg-white border-2 border-dashed border-[#d4af37]/40 rounded-xl relative">
                {/* ⚠️ เปลี่ยน src เป็นรูป QR Code จริงของคุณ */}
                <img 
                  src="/images/donate-qr.jpg" 
                  alt="QR Code สำหรับบริจาค" 
                  className="w-48 h-48 object-contain rounded-lg"
                  onError={(e) => e.target.src="https://placehold.co/200x200/fff/d4af37?text=QR+CODE"}
                />
             </div>
             <p className="text-xs text-gray-400">สแกน QR Code ผ่านแอปธนาคารได้ทุกธนาคาร</p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#fcf6ba] p-4 text-center border-t border-[#d4af37]/20">
           <p className="text-[#8c6b1f] text-xs">*ใบเสร็จรับเงินสามารถนำไปลดหย่อนภาษีได้</p>
        </div>
      </div>
    </div>
  );
}
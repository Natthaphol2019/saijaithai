// src/App.jsx (เวอร์ชันที่คุณส่งมา - ถูกต้อง ✅)
import React from 'react';
import Navbar from './components/Navbar'; 

// Import Sections
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ActivitiesSection from './sections/ActivitiesSection';
import GallerySection from './sections/GallerySection';
import ImpactSection from './sections/ImpactSection'; 

// Import Components
import Footer from './components/Footer';

export default function App() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0d0221] font-serif text-white min-h-screen relative overflow-x-hidden selection:bg-[#d4af37] selection:text-[#1a0b2e]">

      {/* Background Layers */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#5e2a7e_0%,_#2a0e38_50%,_#0d0221_100%)] -z-20"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/10 blur-[200px] rounded-full pointer-events-none -z-10"></div>

      {/* Components */}
      <Navbar scrollToSection={scrollToSection} />
      
      {/* ส่วนที่ 1: หน้าแรก */}
      <HeroSection />
      
      {/* ส่วนที่ 2: สถิติ */}
      <section className="relative overflow-hidden border-b border-[#b38728]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e38]/50 to-transparent"></div>
        <StatsSection />
      </section>

      {/* ส่วนที่ 3: กิจกรรม */}
      <section id="activities" className="min-h-screen py-24 border-t border-[#b38728]/20 bg-[#2a0e38]/20 backdrop-blur-sm relative">
        <ActivitiesSection />
      </section>

      {/* ส่วนที่ 4: ผลกระทบ */}
      <section id="impact" className="min-h-screen py-24 relative">
         <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#5e2a7e]/20 blur-[120px] rounded-full -z-10"></div>
         <ImpactSection />
      </section>

      {/* ส่วนที่ 5: หอศิลป์ */}
      <section id="gallery" className="min-h-screen py-24 relative">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[150px] rounded-full -z-10"></div>
        <GallerySection />
      </section>

      {/* Footer */}
      <footer className="border-t border-[#b38728]/20 glass py-12">
        <Footer />
      </footer>

    </div>
  );
}
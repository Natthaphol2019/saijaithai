// src/App.jsx
import React, { useState, Suspense, lazy } from 'react'; 
import Navbar from './components/Navbar'; 

// ส่วนประกอบที่ต้องใช้ทันที (LCP)
import HeroSection from './sections/HeroSection';
import WelcomePopup from './components/WelcomePopup'; 

// ใช้ lazy load สำหรับส่วนอื่นๆ เพื่อ performance
const ChairpersonSection = lazy(() => import('./sections/ChairpersonSection'));
const StatsSection = lazy(() => import('./sections/StatsSection'));
const ActivitiesSection = lazy(() => import('./sections/ActivitiesSection'));
const GallerySection = lazy(() => import('./sections/GallerySection'));
const ImpactSection = lazy(() => import('./sections/ImpactSection')); 
const DonationSection = lazy(() => import('./sections/DonationSection'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="h-32 flex items-center justify-center text-[#d4af37] animate-pulse">
    กำลังโหลดข้อมูล...
  </div>
);

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0d0221] font-serif text-white min-h-screen relative overflow-x-hidden selection:bg-[#d4af37] selection:text-[#1a0b2e]">
      
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}

      {/* Background Layers */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#5e2a7e_0%,_#2a0e38_50%,_#0d0221_100%)] -z-20"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/10 blur-[200px] rounded-full pointer-events-none -z-10"></div>

      <Navbar scrollToSection={scrollToSection} />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        
        <div id="chairperson">
          <ChairpersonSection />
        </div>

        <section className="relative overflow-hidden border-b border-[#b38728]/20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e38]/50 to-transparent"></div>
          <StatsSection />
        </section>

        <div id="activities">
          <section className="min-h-screen py-24 border-t border-[#b38728]/20 bg-[#2a0e38]/20 backdrop-blur-sm relative">
            <ActivitiesSection />
          </section>
        </div>

        <div id="impact">
          <section className="min-h-screen py-24 relative">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#5e2a7e]/20 blur-[120px] rounded-full -z-10"></div>
            <ImpactSection />
          </section>
        </div>

        <div id="gallery"> 
          <section className="min-h-screen py-24 relative">
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[150px] rounded-full -z-10"></div>
            <GallerySection />
          </section>
        </div>

        <div id="donate">
          <section className="relative border-t-2 border-[#d4af37]/30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <DonationSection />
          </section>
        </div>

        <footer className="border-t border-[#b38728]/20 glass py-12">
          <Footer />
        </footer>

      </Suspense>
    </div>
  );
}
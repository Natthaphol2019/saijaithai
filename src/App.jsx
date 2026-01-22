import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Send, Heart, BookOpen, X, Flower, Star, Image as ImageIcon, Feather, ArrowUp, Sparkles, Award, Users } from 'lucide-react';

// ==========================================
// 🎨 Enhanced Custom Styles
// ==========================================
const customStyles = `
  html { scroll-behavior: smooth; }
  
  @keyframes floatUpSoft {
    0% { transform: translateY(110vh) scale(0.8) rotate(0deg); opacity: 0; }
    10% { opacity: 0.95; }
    80% { opacity: 0.85; }
    100% { transform: translateY(-10vh) scale(0.6) rotate(10deg); opacity: 0; }
  }

  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
    50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
  }

  /* Enhanced Scroll Reveal */
  .reveal {
    opacity: 0;
    transform: translateY(60px);
    transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Gradient Text Animation */
  .gradient-text {
    background: linear-gradient(90deg, #bf953f, #fcf6ba, #aa771c, #fcf6ba, #bf953f);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 4s linear infinite;
  }

  /* Glass Morphism */
  .glass {
    background: rgba(42, 14, 56, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(212, 175, 55, 0.2);
  }

  /* Particle Effect */
  @keyframes particle-float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translate(var(--tx), var(--ty)) rotate(360deg); opacity: 0; }
  }
`;

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Reveal Animation
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0d0221] font-serif text-white selection:bg-[#d4af37] selection:text-[#1a0b2e] overflow-x-hidden relative">
      <style>{customStyles}</style>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#2a0e38]/50 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Background Layers */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#5e2a7e_0%,_#2a0e38_50%,_#0d0221_100%)] -z-20"></div>
      <div className="fixed inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23d4af37' fill-opacity='1'/%3E%3C/svg%3E')" }}></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/10 blur-[200px] rounded-full pointer-events-none -z-10 animate-pulse"></div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full z-50 glass shadow-2xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4 group text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-md rounded-full opacity-70 group-hover:opacity-100 transition animate-[glow_2s_ease-in-out_infinite]"></div>
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] relative z-10 shadow-xl">
                <div className="w-full h-full bg-[#2a0e38] rounded-full flex items-center justify-center group-hover:bg-[#1a0b2e] transition">
                  <Heart className="w-7 h-7 text-[#fcf6ba] fill-current animate-[float_3s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text drop-shadow-lg tracking-wide">
                มูลนิธิสายใจไทย
              </h1>
              <p className="text-xs text-[#fcf6ba]/80 font-sans tracking-widest flex items-center gap-1">
                <Star size={10} className="text-[#d4af37]" />
                ในพระบรมราชูปถัมภ์
              </p>
            </div>
          </button>

          <div className="flex gap-3">
            <NavButton onClick={() => scrollToSection('activities')} icon={BookOpen} label="พระราชกรณียกิจ" />
            <NavButton onClick={() => scrollToSection('impact')} icon={Users} label="ผลกระทบ" className="hidden md:flex" />
            <NavButton onClick={() => scrollToSection('gallery')} icon={ImageIcon} label="หอศิลป์" primary />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-24 overflow-hidden">
        <FloatingLanterns />
        <HomeRoyal />
      </section>

      {/* Stats Section - NEW */}
      <section className="reveal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e38]/50 to-transparent"></div>
        <StatsSection />
      </section>

      {/* Activities Section */}
      <section id="activities" className="reveal min-h-screen py-24 border-t border-[#b38728]/20 glass relative">
        <ActivitiesContent />
      </section>

      {/* Impact Section - NEW */}
      <section id="impact" className="reveal min-h-screen py-24 relative">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#5e2a7e]/20 blur-[120px] rounded-full -z-10"></div>
        <ImpactSection />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="reveal min-h-screen py-24 relative">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[150px] rounded-full -z-10"></div>
        <GalleryContent />
      </section>

      {/* Footer - NEW */}
      <footer className="reveal border-t border-[#b38728]/20 glass py-12">
        <Footer />
      </footer>

      {/* Enhanced Back to Top Button */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-[#bf953f] to-[#aa771c] text-[#1a0b2e] p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] transition-all duration-300 z-40 opacity-0 hover:opacity-100 hover:-translate-y-2 group animate-[glow_2s_ease-in-out_infinite]"
        style={{ opacity: scrollProgress > 10 ? 0.8 : 0 }}
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
      </button>
    </div>
  );
}

// ==========================================
// 🧩 Enhanced Components
// ==========================================



function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            '--tx': `${(Math.random() - 0.5) * 200}px`,
            '--ty': `${(Math.random() - 0.5) * 200}px`,
            animation: `particle-float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

// ==========================================
// 🏛️ แก้ไข: ฟังก์ชัน HomeRoyal (ฉบับแก้บั๊ก)
// ==========================================
function HomeRoyal() {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      {/* Decorative Corners */}
      <div className="absolute top-20 left-6 w-32 h-32 border-t-2 border-l-2 border-[#b38728]/40 rounded-tl-[60px] hidden lg:block animate-pulse"></div>
      <div className="absolute top-20 right-6 w-32 h-32 border-t-2 border-r-2 border-[#b38728]/40 rounded-tr-[60px] hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-20 left-6 w-32 h-32 border-b-2 border-l-2 border-[#b38728]/40 rounded-bl-[60px] hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-20 right-6 w-32 h-32 border-b-2 border-r-2 border-[#b38728]/40 rounded-br-[60px] hidden lg:block animate-pulse"></div>

      <div className="space-y-8 max-w-6xl mx-auto z-10 text-center relative flex flex-col items-center">

        {/* Icon */}
        <div className="relative animate-[float_4s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-xl opacity-50 rounded-full animate-pulse"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] p-[3px] rounded-full shadow-[0_0_60px_rgba(212,175,55,0.5)] relative">
            <div className="w-full h-full bg-[#2a0e38] rounded-full flex items-center justify-center">
              <Star className="text-[#fcf6ba] w-12 h-12 fill-[#fcf6ba]/30 animate-[spinSlow_20s_linear_infinite]" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-9xl font-bold leading-tight">
            <span className="gradient-text block mb-3 drop-shadow-2xl">
              สายใจไทย
            </span>
            <span className="text-3xl md:text-6xl text-[#fcf6ba] font-light tracking-wide block relative">
              ใต้ร่มพระบารมี
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </span>
          </h1>
        </div>

        {/* Marquee */}
        <div className="w-full max-w-4xl h-16 glass rounded-full flex items-center overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.15)] my-6 border border-[#b38728]/30">
          <div className="flex items-center h-full px-8 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] font-bold z-20 text-sm whitespace-nowrap shadow-lg rounded-l-full">
            <Flower size={18} className="mr-2 animate-[spinSlow_8s_linear_infinite]" />
            <Sparkles size={14} className="mr-2" />
            เสียงจากหัวใจ
          </div>
          <MarqueeMessage />
        </div>

        {/* Description */}
        <div className="glass rounded-2xl p-8 max-w-3xl border border-[#b38728]/30 shadow-xl">
          <p className="text-[#f4f4f0]/95 text-xl md:text-2xl font-light leading-relaxed font-sans">
            "ร่วมร้อยรวมดวงใจ... ส่งไปถึงทหารผู้เสียสละ <br className="hidden md:block" />
            เปรียบเสมือน <span className="text-[#fcf6ba] font-semibold border-b-2 border-[#d4af37]/50 px-2">สายใยแห่งความห่วงใย</span> ที่ไม่มีวันจางหาย"
          </p>
        </div>

        {/* Button */}
        <div className="pt-8">
          <button
            onClick={() => setShowInput(true)}
            className="group relative px-14 py-5 rounded-full transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] rounded-full animate-pulse opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] rounded-full blur-xl opacity-50 group-hover:opacity-80 transition"></div>
            <div className="absolute inset-[3px] bg-[#2a0e38] rounded-full group-hover:bg-opacity-70 transition"></div>
            <span className="relative z-10 flex items-center gap-3 gradient-text font-bold text-xl group-hover:text-white transition">
              <Send className="w-6 h-6 text-[#fcf6ba] group-hover:translate-x-1 transition" />
              เขียนคำอวยพร
              <Sparkles className="w-5 h-5 text-[#fcf6ba]" />
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Modal (แก้ไขจุดที่ error แล้ว) */}
      {showInput && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-lg glass rounded-2xl shadow-2xl relative overflow-hidden border-2 border-[#b38728]/50 transform scale-95 animate-[float_0.5s_ease-out_forwards]">
            <div className="h-20 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] flex items-center justify-center relative overflow-hidden">
              {/* ลายพื้นหลังแบบปลอดภัย ไม่ Error */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%231a0b2e' fill-opacity='.1'/%3E%3C/svg%3E")` }}
              ></div>

              <h3 className="text-[#1a0b2e] font-bold text-2xl flex items-center gap-3 relative z-10">
                <Flower className="animate-[spinSlow_10s_linear_infinite]" />
                ส่งกำลังใจแด่ผู้กล้า
                <Sparkles />
              </h3>
              <button
                onClick={() => setShowInput(false)}
                className="absolute right-4 text-[#1a0b2e]/70 hover:text-[#1a0b2e] transition p-2 hover:bg-white/20 rounded-full z-20"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-10 bg-[#fffdf5]">
              <MessageInput onClose={() => setShowInput(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MarqueeMessage() {
  const [messages, setMessages] = useState([
    { text: "ขอให้ทหารทุกท่านปลอดภัย", sender: "คนไทย" },
    { text: "เป็นกำลังใจให้เสมอครับ", sender: "ครอบครัวทหาร" },
    { text: "ขอบคุณที่เสียสละเพื่อพวกเรา", sender: "เด็กน้อย" },
  ]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(20);
      if (data && data.length > 0) setMessages(data);
    };
    fetchMessages();
    const channel = supabase.channel('marquee-room')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages(prev => [payload.new, ...prev]);
      })
      .subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="flex-1 overflow-hidden relative h-full flex items-center group cursor-default">
      <div className="flex gap-20 items-center animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap px-6 w-max">
        {[...messages, ...messages].map((msg, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Flower size={16} className="text-[#d4af37] animate-[spinSlow_8s_linear_infinite]" />
            <span className="text-[#fcf6ba] text-base font-serif tracking-wide drop-shadow-md">"{msg.text}"</span>
            <span className="text-[10px] text-[#b38728] border border-[#b38728]/60 bg-[#b38728]/20 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              {msg.sender}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

function FloatingLanterns() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(15);
      if (data) setMessages(data);
    };
    fetchMessages();
    const channel = supabase.channel('lanterns')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages(prev => [payload.new, ...prev]);
      })
      .subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {messages.map((msg, i) => {
        const randomLeft = Math.floor(Math.random() * 90) + 5;
        const randomDuration = 25 + Math.random() * 20;
        const randomDelay = Math.random() * 15;
        const randomScale = 0.75 + Math.random() * 0.35;

        return (
          <div
            key={msg.id || i}
            className="absolute -bottom-40 flex flex-col items-center opacity-0"
            style={{
              left: `${randomLeft}%`,
              animation: `floatUpSoft ${randomDuration}s linear infinite`,
              animationDelay: `${randomDelay}s`,
              transform: `scale(${randomScale})`
            }}
          >
            <div className="glass px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)] max-w-[250px] text-center relative border border-[#d4af37]/30 hover:scale-110 transition-transform duration-500">
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-400/30 blur-2xl rounded-full animate-pulse"></div>
              <Sparkles size={12} className="absolute top-2 right-2 text-[#d4af37] opacity-70" />
              <p className="text-[#fcf6ba] text-sm font-serif leading-relaxed drop-shadow-lg relative z-10">"{msg.text}"</p>
            </div>
            <div className="w-[2px] h-16 bg-gradient-to-b from-[#d4af37]/60 to-transparent"></div>
            <div className="text-[10px] text-[#1a0b2e] font-bold tracking-wider bg-[#d4af37] px-3 py-1 rounded-full mt-[-12px] shadow-lg">
              {msg.sender}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// 📊 NEW: Stats Section
// ==========================================
function StatsSection() {
  const stats = [
    { number: "48", label: "ปีแห่งการเสียสละ", icon: Award },
    { number: "50,000+", label: "ทหารผ่านศึกที่ได้รับความช่วยเหลือ", icon: Users },
    { number: "1,200+", label: "ผลงานศิลปะที่สร้างสรรค์", icon: Sparkles },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 border border-[#b38728]/30 group hover:border-[#d4af37]/60">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition">
              <stat.icon className="text-[#1a0b2e] w-8 h-8" />
            </div>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">{stat.number}</div>
            <div className="text-[#fcf6ba]/80 text-sm font-sans tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 📖 Enhanced Activities Content
// ==========================================
function ActivitiesContent() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-24 space-y-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-2xl opacity-30 rounded-full"></div>
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full p-[3px] shadow-2xl relative">
            <div className="w-full h-full bg-[#0d0221] rounded-full flex items-center justify-center text-4xl">👑</div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
          "ช่วยเพื่อให้เขา... ช่วยเหลือตนเองได้"
        </h2>

        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-[#b38728]/30">
          <p className="text-[#fcf6ba]/90 text-2xl font-light italic leading-relaxed">
            "การสงเคราะห์ทหารผ่านศึกนั้น... ขอให้ช่วยเพื่อให้เขาช่วยเหลือตัวเองได้ ไม่ใช่ให้เขาตลอดไป"
          </p>
        </div>

        <div className="inline-flex items-center gap-3 glass py-3 px-6 rounded-full border border-[#b38728]/50">
          <Star size={16} className="text-[#d4af37]" />
          <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm">พระราชดำรัส รัชกาลที่ ๙</span>
          <Star size={16} className="text-[#d4af37]" />
        </div>
      </div>

      <div className="space-y-16">
        <TimelineItem
          year="๒๕๑๘"
          title="จุดกำเนิดสายใจไทย"
          desc="พระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ ๙ เสด็จฯ เยี่ยมทหารเจ็บป่วย ทรงตระหนักว่าลำพังเงินช่วยเหลือราชการอาจไม่เพียงพอ จึงพระราชทานพระราชทรัพย์ส่วนพระองค์ก่อตั้งมูลนิธิฯ เพื่อสร้างอนาคตที่ยั่งยืนให้กับทหารผ่านศึกและครอบครัว"
          img="https://placehold.co/700x500/2a0e38/d4af37?text=Rama+IX+Visit+1975"
        />
        <TimelineItem
          year="๒๕๒๓"
          title="ศูนย์ฝึกอาชีพทหารผ่านศึก"
          desc="เริ่มโครงการฝึกอาชีพเพื่อให้ผู้ทุพพลภาพมีรายได้เลี้ยงตนเองอย่างยั่งยืน โดยเริ่มจากงานเย็บกระเป๋าหนังและงานแก้ว ส่งจำหน่ายที่ร้านจิตรลดา พัฒนาทักษะให้เป็นช่างฝีมือระดับมืออาชีพที่สามารถแข่งขันในตลาดได้"
          img="https://placehold.co/700x500/2a0e38/d4af37?text=Vocational+Training+1980"
        />
        <TimelineItem
          year="๒๕๔๕"
          title="ขยายโครงการสู่ภูมิภาค"
          desc="เปิดศูนย์ฝึกอาชีพในภูมิภาคต่างๆ ครอบคลุมทั่วประเทศ พร้อมพัฒนาหลักสูตรให้สอดคล้องกับความต้องการของตลาดแรงงานในแต่ละพื้นที่ รวมทั้งสร้างเครือข่ายการจำหน่ายผลิตภัณฑ์ในวงกว้าง"
          img="https://placehold.co/700x500/2a0e38/d4af37?text=Regional+Expansion+2002"
        />
      </div>
    </div>
  );
}

// ==========================================
// 🌟 NEW: Impact Section
// ==========================================
function ImpactSection() {
  const impacts = [
    {
      title: "เศรษฐกิจพอเพียง",
      desc: "สร้างอาชีพยั่งยืนให้ทหารผ่านศึกและครอบครัว ผ่านการฝึกอบรมทักษะอาชีพที่หลากหลาย",
      icon: "💰",
    },
    {
      title: "คุณภาพชีวิต",
      desc: "ฟื้นฟูสุขภาพกายและใจ พร้อมสร้างขวัญกำลังใจให้กับผู้เสียสละเพื่อชาติ",
      icon: "❤️",
    },
    {
      title: "สืบสานภูมิปัญญา",
      desc: "อนุรักษ์และส่งเสริมงานฝีมือไทย ผ่านการสร้างสรรค์ผลิตภัณฑ์คุณภาพ",
      icon: "🎨",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <Award size={48} className="mx-auto text-[#d4af37] mb-6 animate-[float_3s_ease-in-out_infinite]" />
        <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">ผลกระทบที่เกิดขึ้น</h2>
        <p className="text-[#fcf6ba]/80 text-xl max-w-3xl mx-auto font-light leading-relaxed">
          จากพระราชปณิธาน สู่การเปลี่ยนแปลงที่ยั่งยืน
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {impacts.map((impact, idx) => (
          <div key={idx} className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 border border-[#b38728]/30 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{impact.icon}</div>
            <h3 className="text-2xl font-bold text-[#fcf6ba] mb-4 font-serif">{impact.title}</h3>
            <p className="text-[#f4f4f0]/80 leading-relaxed font-sans">{impact.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 🎨 Enhanced Gallery Content
// ==========================================
function GalleryContent() {
  const masterpieces = [
    {
      title: "ดอกแก้วเจียระไน",
      artist: "ร้อยเอก สมชาย ใจกล้า",
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Glass+Flower+Art",
      desc: "ความงดงามที่เกิดจากสองมือของผู้ที่ไม่ยอมแพ้ต่อโชคชะตา แต่ละกลีบดอกคือความพยายามที่ไม่รู้จักย่อท้อ",
      category: "งานแก้ว"
    },
    {
      title: "กระเป๋าหนังลายไทย",
      artist: "อาสาสมัคร วินัย ศรีสุข",
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Thai+Leather+Craft",
      desc: "ทุกฝีเข็มคือความอดทน ทุกรอยลายคือจิตวิญญาณความเป็นไทยที่ถูกถ่ายทอดผ่านฝีมือช่างผู้ทุ่มเท",
      category: "งานหนัง"
    },
    {
      title: "ภาพวาดสีน้ำมัน",
      artist: "จ่าสิบเอก ปรีชา วงศ์ดี",
      img: "https://placehold.co/600x800/2a0e38/d4af37?text=Oil+Painting+Landscape",
      desc: "ภาพทิวทัศน์บ้านเกิด ที่วาดขึ้นด้วยความคิดถึง ความหวัง และรอยยิ้มที่ไม่เคยจางหาย",
      category: "จิตรกรรม"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <Feather size={48} className="mx-auto text-[#d4af37] mb-6 opacity-80 animate-[float_3s_ease-in-out_infinite]" />
        <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-8">
          หอศิลป์แห่งชีวิต
        </h2>
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-[#b38728]/30">
          <p className="text-[#fcf6ba]/90 text-xl md:text-2xl leading-loose font-light">
            "มิใช่เพียงร่างกาย ที่ยอมแลกเพื่อแผ่นดิน<br className="hidden md:block" />
            แต่มิสิ้นจินตนาการ และความฝันอันสดใส<br className="hidden md:block" />
            <span className="text-[#d4af37] font-semibold">ชมผลงานจากหัวใจ... ผู้ที่ไม่ยอมแพ้ต่อโชคชะตา</span>"
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 pb-32">
        {masterpieces.map((art, idx) => (
          <div key={idx} className="group relative h-[550px] overflow-hidden rounded-3xl border-2 border-[#b38728]/40 bg-[#0d0221] hover:border-[#d4af37]/70 hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] transition-all duration-700">
            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-20 glass px-4 py-2 rounded-full border border-[#b38728]/50">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider">{art.category}</span>
            </div>

            {/* Image */}
            <div className="h-full w-full overflow-hidden">
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-90"
              />
            </div>

            {/* Gradient Overlay & Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-[#2a0e38]/90 to-transparent translate-y-[65%] group-hover:translate-y-0 transition-transform duration-700 flex flex-col justify-end p-8 text-center">

              <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="mb-3 flex items-center justify-center gap-2">
                  <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                  <span className="text-[#d4af37] text-sm tracking-widest font-bold">{art.artist}</span>
                  <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-5 font-serif drop-shadow-lg">
                  {art.title}
                </h3>

                <p className="text-[#fcf6ba]/90 font-sans text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500">
                  {art.desc}
                </p>
              </div>
            </div>

            {/* Sparkle Effect on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <Sparkles className="text-[#d4af37] w-16 h-16 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pb-16">
        <p className="text-[#b38728]/60 text-sm italic">*ผลงานจัดแสดงเพื่อเชิดชูเกียรติและเป็นแรงบันดาลใจเท่านั้น</p>
      </div>
    </div>
  );
}

// ==========================================
// 🦶 NEW: Footer
// ==========================================
function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-[#d4af37] font-bold text-lg mb-4 flex items-center gap-2">
            <Heart size={20} /> เกี่ยวกับเรา
          </h3>
          <p className="text-[#fcf6ba]/70 text-sm leading-relaxed font-sans">
            มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์ ก่อตั้งขึ้นเพื่อช่วยเหลือและพัฒนาคุณภาพชีวิตของทหารผ่านศึกและครอบครัว
          </p>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-bold text-lg mb-4 flex items-center gap-2">
            <BookOpen size={20} /> ลิงก์ที่เป็นประโยชน์
          </h3>
          <ul className="space-y-2 text-[#fcf6ba]/70 text-sm font-sans">
            <li><a href="#" className="hover:text-[#d4af37] transition">• โครงการและกิจกรรม</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition">• วิธีการบริจาค</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition">• รายงานประจำปี</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-bold text-lg mb-4">ติดต่อเรา</h3>
          <p className="text-[#fcf6ba]/70 text-sm leading-relaxed font-sans">
            สำนักงานมูลนิธิสายใจไทย<br />
            กรุงเทพมหานคร 10400<br />
            โทร: 02-XXX-XXXX
          </p>
        </div>
      </div>

      <div className="border-t border-[#b38728]/20 pt-8 text-center">
        <p className="text-[#fcf6ba]/50 text-sm font-sans flex items-center justify-center gap-2 flex-wrap">
          <span>© 2025 มูลนิธิสายใจไทย ในพระบรมราชูปถัมภ์</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1">
            สร้างด้วย <Heart size={14} className="text-red-400 fill-current animate-pulse" /> เพื่อผู้เสียสละ
          </span>
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 📝 Enhanced Message Input
// ==========================================
function MessageInput({ onClose }) {
  const [text, setText] = useState('');
  const [sender, setSender] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus('sending');
    await supabase.from('messages').insert([{ text, sender: sender || 'ผู้หวังดี' }]);
    setText('');
    setSender('');
    setStatus('success');
    setTimeout(() => { setStatus('idle'); onClose(); }, 2000);
  };

  return (
    <form onSubmit={handleSend} className="space-y-6 font-sans">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
          <Users size={16} /> ชื่อผู้ส่ง <span className="text-gray-400 font-normal">(ไม่บังคับ)</span>
        </label>
        <input
          type="text"
          value={sender}
          onChange={e => setSender(e.target.value)}
          className="w-full bg-white/80 border-2 border-[#b38728]/30 rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none transition text-gray-800"
          placeholder="เช่น ครอบครัวใจดี"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
          <Heart size={16} /> คำอวยพร
        </label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full bg-white/80 border-2 border-[#b38728]/30 rounded-xl px-5 py-3 h-32 focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none resize-none transition text-gray-800"
          placeholder="ขอให้ปลอดภัย มีสุขภาพแข็งแรง..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-4 rounded-xl text-white font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${status === 'success'
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-[#bf953f] to-[#aa771c] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1'
          }`}
      >
        {status === 'sending' && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
        {status === 'sending' ? 'กำลังส่ง...' : status === 'success' ? '✓ ส่งเรียบร้อย' : (
          <>
            <Send size={18} /> ส่งข้อความ
          </>
        )}
      </button>
    </form>
  );
}

// ==========================================
// 📅 Enhanced Timeline Item
// ==========================================
function TimelineItem({ year, title, desc, img }) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center glass p-10 rounded-2xl hover:scale-[1.02] transition-all duration-500 border border-[#b38728]/30 group hover:border-[#d4af37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
      <div className="md:w-2/5 w-full">
        <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#b38728]/30 shadow-2xl group-hover:border-[#d4af37]/60 transition-all duration-500">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </div>

      <div className="md:w-3/5 text-left space-y-4">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] px-5 py-2 rounded-full font-bold text-xl shadow-lg">
          <Star size={18} />
          {year}
        </div>
        <h4 className="text-3xl text-[#fcf6ba] font-bold font-serif leading-tight">
          {title}
        </h4>
        <p className="text-[#f4f4f0]/85 leading-loose font-sans text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
}
// src/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Star, Flower, X, Users, Heart, Sparkles } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

export default function HeroSection() {
  const [showInput, setShowInput] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-28 pb-20 overflow-hidden bg-[#0d0221]">
      
      {/* 1. ฉากหลัง (โคมลอย) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingParticles />
      </div>

      <div className="container mx-auto z-10 max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* --- ฝั่งซ้าย: รูปภาพ --- */}
          <div className="relative order-2 md:order-1 animate-fade-in-up">
            <div className="relative p-3 border border-[#d4af37]/30 rounded-2xl bg-[#d4af37]/5 backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.15)] group hover:shadow-[0_0_70px_rgba(212,175,55,0.3)] transition-all duration-700">
              <div className="aspect-[3/4] overflow-hidden rounded-xl border border-[#d4af37]/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221]/60 to-transparent z-10"></div>
                {/* รูปภาพ */}
                <img 
                  src="/images/images1001.jpg" 
                  alt="พระบาทสมเด็จพระบรมชนกาธิเบศรฯ" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* ลายไทยตกแต่งมุม */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-[3px] border-l-[3px] border-[#d4af37] rounded-tl-2xl opacity-70"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-[3px] border-r-[3px] border-[#d4af37] rounded-br-2xl opacity-70"></div>
            </div>
          </div>

          {/* --- ฝั่งขวา: เนื้อหาและปุ่ม --- */}
          <div className="text-left space-y-8 order-1 md:order-2 animate-fade-in-down">
            
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-md shadow-lg">
               <Star size={16} className="text-[#d4af37] animate-pulse" />
               <span className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase">พระบรมราโชวาท</span>
            </div>

            <blockquote className="relative pl-8 border-l-4 border-[#d4af37]/50">
              <span className="text-8xl text-[#d4af37]/10 font-serif absolute -top-10 -left-6 z-0">"</span>
              <div className="relative z-10 space-y-6">
                <p className="text-2xl md:text-3xl font-light text-[#fcf6ba] leading-relaxed font-serif italic tracking-wide text-shadow-gold">
                  เจ้าหน้าที่ทุก ๆ ฝ่ายซึ่งเสียชีวิตลงนี้ เป็นผู้พิทักษ์ปกป้องไทยให้เป็นไท 
                  ฉะนั้น คนไทยทุกคนจะต้องตอบแทน ด้วยการรักษาความสุจริตยุติธรรมในแผ่นดินไว้ให้มั่นคง
                </p>
                <p className="text-xl md:text-2xl font-light text-[#fcf6ba]/90 font-serif italic">
                  ต้องตั้งหน้าปฏิบัติหน้าที่การงานของตน ด้วยความเข้มแข็งสามัคคี 
                  และด้วยความสำนึกตระหนักในประเทศชาติทุกขณะจิต
                </p>
              </div>
            </blockquote>

            <div className="flex items-center gap-4 pt-2">
              <div className="h-[1px] w-12 bg-[#d4af37]/50"></div>
              <p className="text-[#b38728] text-sm font-light">
                ๘ มีนาคม ๒๕๒๔
              </p>
            </div>

            {/* ส่วน Interactive */}
            <div className="pt-6 space-y-8">
              {/* Marquee (ตัววิ่ง) */}
              <div className="w-full max-w-md h-12 bg-[#1a0b2e]/60 border border-[#b38728]/40 rounded-full flex items-center overflow-hidden relative shadow-lg hover:border-[#d4af37]/80 transition-colors">
                 <div className="flex items-center h-full px-6 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] font-bold z-20 text-xs whitespace-nowrap shadow-md">
                    <Flower size={14} className="mr-2 animate-spin-slow" /> ส่งใจถึงแนวหน้า
                 </div>
                 <MarqueeMessage />
              </div>

              {/* ปุ่มกดส่งข้อความ (ปรับ Layout ใหม่) */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <button 
                  onClick={() => setShowInput(true)}
                  className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)]"
                >
                  {/* พื้นหลังปุ่มแบบไล่เฉดสี */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#aa771c] animate-pulse-slow"></div>
                  
                  {/* แสงเงาด้านใน */}
                  <div className="absolute inset-[2px] bg-[#1a0526] rounded-full group-hover:bg-[#1a0526]/80 transition-colors duration-300"></div>
                  
                  {/* เนื้อหาในปุ่ม */}
                  <span className="relative z-10 flex items-center gap-3 text-[#d4af37] font-bold text-lg group-hover:text-[#fffdf5] transition-colors">
                    <Sparkles size={22} className="group-hover:animate-ping" /> 
                    ร่วมเขียนคำอวยพร
                    <Send size={20} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                
                <p className="text-[#fcf6ba]/40 text-sm max-w-[200px] leading-tight pt-2">
                  *ข้อความของคุณจะปรากฏบนหน้าเว็บไซต์ทันที
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal Popup (Send Message) --- */}
      {showInput && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0d0221]/90 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-lg bg-[#fffdf5] rounded-2xl shadow-2xl relative overflow-hidden border-2 border-[#b38728] animate-slide-up">
            
            {/* Header */}
            <div className="h-20 bg-gradient-to-r from-[#bf953f] to-[#aa771c] flex items-center justify-between px-8 shadow-md">
               <h3 className="text-[#1a0b2e] font-bold text-xl flex items-center gap-2 font-serif">
                 <Flower className="animate-spin-slow"/> ส่งกำลังใจแด่ผู้กล้า
               </h3>
               <button 
                 onClick={() => setShowInput(false)} 
                 className="text-[#1a0b2e]/60 hover:text-[#1a0b2e] bg-white/20 hover:bg-white/50 rounded-full p-2 transition-all"
               >
                 <X size={24}/>
               </button>
            </div>

            {/* Content */}
            <div className="p-8 text-[#1a0b2e]">
               <MessageInput onClose={() => setShowInput(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// --- Component: Message Input Form (AJAX Logic) ---
function MessageInput({ onClose }) {
  const [text, setText] = useState('');
  const [sender, setSender] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    // 1. เปลี่ยนสถานะเป็น Sending (UI แสดง Loading)
    setStatus('sending');
    
    // 2. ยิง Request ไป Supabase (AJAX - ไม่รีเฟรชหน้า)
    const { error } = await supabase
      .from('messages')
      .insert([{ text, sender: sender || 'ผู้หวังดี' }]);

    if (error) {
        console.error("Error:", error);
        setStatus('error');
        return;
    }

    // 3. ถ้าสำเร็จ เคลียร์ค่าและแสดง Success
    setText('');
    setStatus('success');
    
    // 4. รอ 1.5 วิ แล้วปิด Modal
    setTimeout(() => { 
      setStatus('idle'); 
      onClose(); 
    }, 1500);
  };

  return (
    <form onSubmit={handleSend} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[#8c6b1f] text-sm font-bold flex items-center gap-2">
          <Users size={16}/> ชื่อของคุณ (ไม่บังคับ)
        </label>
        <input 
          type="text" 
          value={sender} 
          onChange={e => setSender(e.target.value)} 
          className="w-full bg-white border-2 border-[#e5d0ac] rounded-xl px-4 py-3 focus:border-[#b38728] focus:ring-4 focus:ring-[#b38728]/10 outline-none text-gray-800 transition-all font-medium placeholder:text-gray-400" 
          placeholder="ระบุชื่อ หรือ 'คนไทยผู้ห่วงใย'" 
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-[#8c6b1f] text-sm font-bold flex items-center gap-2">
          <Heart size={16}/> ข้อความให้กำลังใจ
        </label>
        <textarea 
          value={text} 
          onChange={e => setText(e.target.value)} 
          className="w-full bg-white border-2 border-[#e5d0ac] rounded-xl px-4 py-3 h-32 focus:border-[#b38728] focus:ring-4 focus:ring-[#b38728]/10 outline-none resize-none text-gray-800 transition-all font-medium placeholder:text-gray-400" 
          placeholder="เขียนความในใจถึงพี่ๆ ทหาร..."
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'sending' || status === 'success'}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
          status === 'success' 
            ? 'bg-green-600 text-white shadow-green-600/30' 
            : status === 'error'
            ? 'bg-red-500 text-white'
            : 'bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0526] hover:brightness-110 shadow-[#d4af37]/40'
        }`}
      >
        {status === 'sending' ? (
          <>
            <Flower className="animate-spin" size={24}/> กำลังส่งข้อความ...
          </>
        ) : status === 'success' ? (
          <>
            <Star className="fill-current animate-bounce" size={24}/> ส่งเรียบร้อย!
          </>
        ) : status === 'error' ? (
          "เกิดข้อผิดพลาด ลองใหม่"
        ) : (
          <>
            ส่งกำลังใจ <Send size={20} className="-rotate-45 mt-[-4px]"/>
          </>
        )}
      </button>
    </form>
  );
}

// --- Component: Marquee Message (Real-time Logic) ---
function MarqueeMessage() {
  const [messages, setMessages] = useState([
    { text: "ขอให้ทหารทุกท่านปลอดภัย", sender: "คนไทย" },
    { text: "เป็นกำลังใจให้เสมอครับ", sender: "ครอบครัวใจดี" },
  ]);

  useEffect(() => {
    // 1. ดึงข้อความเก่า
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      if (data && data.length > 0) setMessages(data);
    };
    fetchMessages();

    // 2. Real-time Subscription: ฟัง Event 'INSERT'
    // เมื่อมีคนกดส่ง (Insert) Supabase จะส่งข้อมูลกลับมาที่นี่ทันทีโดยไม่ต้องรีหน้า
    const channel = supabase.channel('marquee-room')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
          console.log("New message received!", payload.new);
          setMessages(prev => [payload.new, ...prev]);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="flex-1 overflow-hidden relative h-full flex items-center group cursor-default">
      <div className="flex gap-12 items-center animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap px-4 w-max">
        {messages.map((msg, i) => (
          <div key={i} className="inline-flex items-center gap-2">
             <Flower size={12} className="text-[#d4af37] animate-spin-slow" />
             <span className="text-[#fcf6ba] text-sm font-serif tracking-wide drop-shadow-md">"{msg.text}"</span>
             <span className="text-[10px] text-[#b38728] border border-[#b38728]/50 bg-[#b38728]/10 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">คุณ {msg.sender}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
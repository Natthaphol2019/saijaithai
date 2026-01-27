// src/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Star, Flower, X, Users, Heart, Sparkles, MessageCircle, Quote } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

export default function HeroSection() {
  const [showInput, setShowInput] = useState(false);
  const [showAllMessages, setShowAllMessages] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#0d0221]">
      
      {/* 1. ฉากหลัง */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingParticles />
      </div>

      <div className="container mx-auto z-10 max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* --- ฝั่งซ้าย: รูปภาพ --- */}
          {/* Mobile: Order 1, Desktop: Order 1 */}
          <div className="relative order-1 md:order-1 animate-fade-in-up">
            {/* ✨ ปรับปรุง: เพิ่ม max-w-xs mx-auto เพื่อบีบรูปไม่ให้เต็มจอเกินไปในมือถือ ดูสบายตาขึ้น */}
            <div className="max-w-[280px] sm:max-w-xs md:max-w-none mx-auto relative p-3 border border-[#d4af37]/30 rounded-[2rem] bg-[#d4af37]/5 backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.1)] group hover:shadow-[0_0_60px_rgba(212,175,55,0.2)] transition-all duration-700">
              
              {/* ✨ ปรับปรุง: Mobile ใช้ aspect-[4/5] (เตี้ยลงนิดนึง), Desktop ใช้ aspect-[3/4] */}
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-[#d4af37]/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221]/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/images1001.jpg" 
                  alt="พระบาทสมเด็จพระบรมชนกาธิเบศรฯ" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                  onError={(e) => e.target.src = "https://placehold.co/600x800/2a0e38/d4af37?text=Royal+Portrait"}
                />
              </div>
              
              {/* ลายไทยตกแต่งมุม (ปรับขนาดให้เล็กลงในมือถือ) */}
              <div className="absolute -top-1.5 -left-1.5 w-10 h-10 md:w-16 md:h-16 border-t-[3px] border-l-[3px] border-[#d4af37] rounded-tl-2xl opacity-70"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-10 h-10 md:w-16 md:h-16 border-b-[3px] border-r-[3px] border-[#d4af37] rounded-br-2xl opacity-70"></div>
            </div>
          </div>

          {/* --- ฝั่งขวา: เนื้อหาและปุ่ม --- */}
          <div className="text-left space-y-6 md:space-y-8 order-2 md:order-2 animate-fade-in-down px-2 md:px-0">
            
            {/* Badge หัวข้อ */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-md shadow-lg">
                 <Star size={14} className="text-[#d4af37] animate-pulse" />
                 <span className="text-[#d4af37] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">พระบรมราโชวาท</span>
              </div>
            </div>

            {/* เนื้อหาพระบรมราโชวาท */}
            <blockquote className="relative pl-6 md:pl-8 border-l-2 md:border-l-4 border-[#d4af37]/50">
              <span className="text-5xl md:text-8xl text-[#d4af37]/10 font-serif absolute -top-6 -left-3 md:-top-8 md:-left-4 z-0">"</span>
              <div className="relative z-10 space-y-4 text-center md:text-left">
                {/* ✨ ปรับ Font มือถือให้อ่านง่าย ไม่ใหญ่คับจอ */}
                <p className="text-lg sm:text-xl md:text-3xl font-light text-[#fcf6ba] leading-relaxed font-serif italic tracking-wide text-shadow-gold">
                  เจ้าหน้าที่ทุก ๆ ฝ่ายซึ่งเสียชีวิตลงนี้ เป็นผู้พิทักษ์ปกป้องไทยให้เป็นไท...
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-light text-[#fcf6ba]/80 font-serif italic hidden sm:block">
                  ฉะนั้น คนไทยทุกคนจะต้องตอบแทน ด้วยการรักษาความสุจริตยุติธรรมในแผ่นดินไว้ให้มั่นคง...
                </p>
              </div>
            </blockquote>

            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <div className="h-[1px] w-8 md:w-12 bg-[#d4af37]/50"></div>
              <p className="text-[#b38728] text-xs md:text-sm font-light">
                ๘ มีนาคม ๒๕๒๔
              </p>
            </div>

            {/* ส่วน Interactive */}
            <div className="pt-2 md:pt-6 space-y-6 md:space-y-8">
              
              {/* Marquee (ตัววิ่ง) */}
              <div 
                onClick={() => setShowAllMessages(true)} 
                className="w-full max-w-sm md:max-w-md mx-auto md:mx-0 h-10 md:h-12 bg-[#1a0b2e]/60 border border-[#b38728]/40 rounded-full flex items-center overflow-hidden relative shadow-lg hover:border-[#d4af37]/80 transition-colors cursor-pointer group"
              >
                 <div className="flex items-center h-full px-4 md:px-6 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] font-bold z-20 text-[10px] md:text-xs whitespace-nowrap shadow-md">
                    <Flower size={12} className="mr-1 md:mr-2 animate-spin-slow" /> ส่งใจถึงแนวหน้า
                 </div>
                 <MarqueeMessage />
              </div>

              {/* ปุ่มกด */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button 
                  onClick={() => setShowInput(true)}
                  className="group relative px-6 py-3.5 md:px-8 md:py-4 rounded-full overflow-hidden transition-all duration-300 shadow-lg active:scale-95 flex-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#aa771c] animate-pulse-slow"></div>
                  <div className="absolute inset-[2px] bg-[#1a0526] rounded-full group-hover:bg-[#1a0526]/80 transition-colors"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[#d4af37] font-bold text-base md:text-lg group-hover:text-[#fffdf5]">
                    <Sparkles size={18} /> ร่วมเขียนคำอวยพร
                  </span>
                </button>

                <button 
                  onClick={() => setShowAllMessages(true)}
                  className="group relative px-6 py-3.5 md:px-8 md:py-4 rounded-full overflow-hidden transition-all duration-300 border-2 border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 flex-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[#fcf6ba] font-bold text-base md:text-lg group-hover:text-[#d4af37]">
                    <MessageCircle size={18} /> อ่านทั้งหมด
                  </span>
                </button>
              </div>
              <p className="text-[#fcf6ba]/40 text-xs text-center md:text-left">*ข้อความจะปรากฏทันที</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal Components (คงเดิม) --- */}
      {showInput && <ModalWrapper onClose={() => setShowInput(false)} title="ส่งกำลังใจ"><MessageInput onClose={() => setShowInput(false)} /></ModalWrapper>}
      {showAllMessages && <ModalWrapper onClose={() => setShowAllMessages(false)} title="รวมพลังน้ำใจไทย"><AllMessagesList /></ModalWrapper>}

    </section>
  );
}

// ... (Sub-components: ModalWrapper, AllMessagesList, MessageInput, MarqueeMessage ใช้โค้ดเดิมได้เลยครับ ไม่ต้องแก้)
// ถ้าต้องการโค้ด Sub-components ซ้ำ บอกได้นะครับ เดี๋ยวแปะให้ครบชุด
// --- Component ย่อย: Modal Wrapper (Responsive) ---
function ModalWrapper({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-[#0d0221]/90 backdrop-blur-md p-0 sm:p-4 animate-fade-in">
      <div className="w-full sm:max-w-2xl bg-[#fffdf5] rounded-t-2xl sm:rounded-2xl shadow-2xl relative overflow-hidden border-t-2 sm:border-2 border-[#b38728] animate-slide-up flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        <div className="h-14 sm:h-16 bg-gradient-to-r from-[#bf953f] to-[#aa771c] flex items-center justify-between px-4 sm:px-6 shadow-md shrink-0">
            <h3 className="text-[#1a0b2e] font-bold text-lg sm:text-xl flex items-center gap-2 font-serif">
              <Flower className="animate-spin-slow w-5 h-5 sm:w-6 sm:h-6"/> {title}
            </h3>
            <button onClick={onClose} className="text-[#1a0b2e]/60 hover:text-[#1a0b2e] bg-white/20 hover:bg-white/50 rounded-full p-2 transition-all">
              <X size={20} className="sm:w-6 sm:h-6"/>
            </button>
        </div>
        <div className="overflow-y-auto p-0 bg-[#fffdf5] flex-1">
           {children}
        </div>
      </div>
    </div>
  );
}

function AllMessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(100);
      if (data) setMessages(data);
      setLoading(false);
    };
    fetchAll();
  }, []);

  if (loading) return <div className="p-10 text-center text-[#b38728] flex items-center justify-center gap-2 text-sm md:text-base"><Flower className="animate-spin w-5 h-5"/> กำลังโหลดข้อความ...</div>;

  return (
    <div className="p-4 sm:p-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
      {messages.length === 0 ? (
        <div className="col-span-1 sm:col-span-2 text-center text-gray-500 py-10 text-sm md:text-base">ยังไม่มีข้อความ เป็นคนแรกที่ส่งกำลังใจกันเถอะ!</div>
      ) : (
        messages.map((msg, i) => (
          <div key={i} className="bg-white border border-[#d4af37]/20 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#d4af37]/50 transition duration-300 break-words relative overflow-hidden group">
            <Quote size={32} className="absolute top-2 right-2 text-[#d4af37]/10 group-hover:text-[#d4af37]/20 transition sm:w-10 sm:h-10" />
            
            <p className="text-[#2a0e38] text-base sm:text-lg font-serif italic mb-3 sm:mb-4 relative z-10 leading-relaxed">
              "{msg.text}"
            </p>
            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[#fcf6ba] relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#b38728]">
                <Users size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="text-xs sm:text-sm text-[#8c6b1f] font-bold">
                คุณ {msg.sender || "ผู้หวังดี"}
              </div>
            </div>
          </div>
        ))
      )}
      <div className="col-span-1 sm:col-span-2 text-center text-gray-400 text-xs sm:text-sm mt-4">
        แสดง 100 ข้อความล่าสุด
      </div>
    </div>
  );
}

function MessageInput({ onClose }) {
  const [text, setText] = useState('');
  const [sender, setSender] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus('sending');
    const { error } = await supabase.from('messages').insert([{ text, sender: sender || 'ผู้หวังดี' }]);
    if (error) { setStatus('error'); return; }
    setText('');
    setStatus('success');
    setTimeout(() => { setStatus('idle'); onClose(); }, 1500);
  };

  return (
    <form onSubmit={handleSend} className="space-y-4 sm:space-y-6 p-4 sm:p-8">
      <div className="space-y-2">
        <label className="text-[#8c6b1f] text-xs sm:text-sm font-bold flex items-center gap-2"><Users size={14} className="sm:w-4 sm:h-4"/> ชื่อของคุณ</label>
        <input type="text" value={sender} onChange={e => setSender(e.target.value)} className="w-full bg-white border-2 border-[#e5d0ac] rounded-xl px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#b38728] outline-none text-gray-800" placeholder="เช่น ครอบครัวใจดี" />
      </div>
      <div className="space-y-2">
        <label className="text-[#8c6b1f] text-xs sm:text-sm font-bold flex items-center gap-2"><Heart size={14} className="sm:w-4 sm:h-4"/> ข้อความ</label>
        <textarea value={text} onChange={e => setText(e.target.value)} className="w-full bg-white border-2 border-[#e5d0ac] rounded-xl px-4 py-2 sm:py-3 h-24 sm:h-32 text-sm sm:text-base focus:border-[#b38728] outline-none resize-none text-gray-800" placeholder="เขียนความในใจ..." required></textarea>
      </div>
      <button type="submit" disabled={status === 'sending' || status === 'success'} className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg transition-all ${status === 'success' ? 'bg-green-600 text-white' : 'bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0526] hover:brightness-110'}`}>
        {status === 'sending' ? 'กำลังส่ง...' : status === 'success' ? 'ส่งเรียบร้อย!' : 'ส่งกำลังใจ'}
      </button>
    </form>
  );
}

function MarqueeMessage() {
  const [messages, setMessages] = useState([{ text: "ขอให้ทหารทุกท่านปลอดภัย", sender: "คนไทย" }]);
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(20);
      if (data && data.length > 0) setMessages(data);
    };
    fetchMessages();
    const channel = supabase.channel('marquee-room').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => setMessages(prev => [payload.new, ...prev])).subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="flex-1 overflow-hidden relative h-full flex items-center">
      <div className="flex gap-8 md:gap-12 items-center animate-marquee whitespace-nowrap px-4 w-max">
        {messages.map((msg, i) => (
          <div key={i} className="inline-flex items-center gap-2">
             <Flower size={10} className="text-[#d4af37] animate-spin-slow md:w-3 md:h-3" />
             <span className="text-[#fcf6ba] text-xs md:text-sm font-serif">"{msg.text}"</span>
             <span className="text-[9px] md:text-[10px] text-[#b38728] border border-[#b38728]/50 bg-[#b38728]/10 px-1.5 py-0.5 rounded-full uppercase">คุณ {msg.sender}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
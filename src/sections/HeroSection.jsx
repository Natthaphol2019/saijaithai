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
      
      {/* CSS Animation สำหรับเลื่อนแนวตั้ง (ใส่ไว้ตรงนี้เพื่อให้ทำงานได้เลยโดยไม่ต้องแก้ไฟล์ CSS) */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. ฉากหลัง */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingParticles />
      </div>

      <div className="container mx-auto z-10 max-w-7xl relative">
        {/* ✨ ปรับ Grid เป็น 12 คอลัมน์ เพื่อแบ่งพื้นที่ใหม่ (รูป 4 : เนื้อหา 5 : กระดานขวา 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start lg:items-center">
          
          {/* --- ส่วนที่ 1: รูปภาพ (ซ้ายสุด) --- */}
          {/* Mobile: บนสุด, Desktop: ซ้ายสุด (4/12 ส่วน) */}
          <div className="relative lg:col-span-4 flex justify-center lg:justify-start animate-fade-in-up order-1">
            <div className="max-w-[280px] sm:max-w-xs lg:max-w-full w-full relative p-3 border border-[#d4af37]/30 rounded-[2rem] bg-[#d4af37]/5 backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.1)] group hover:shadow-[0_0_60px_rgba(212,175,55,0.2)] transition-all duration-700">
              <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-[#d4af37]/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221]/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/images1001.webp" 
                  alt="พระบาทสมเด็จพระบรมชนกาธิเบศรฯ" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                  onError={(e) => e.target.src = "/images/images1001.webp"}
                />
              </div>
              {/* ลายไทยตกแต่ง */}
              <div className="absolute -top-1.5 -left-1.5 w-10 h-10 border-t-[3px] border-l-[3px] border-[#d4af37] rounded-tl-2xl opacity-70"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-10 h-10 border-b-[3px] border-r-[3px] border-[#d4af37] rounded-br-2xl opacity-70"></div>
            </div>
          </div>

          {/* --- ส่วนที่ 2: เนื้อหาหลัก (ตรงกลาง) --- */}
          {/* Mobile: กลาง, Desktop: กลาง (5/12 ส่วน) */}
          <div className="text-left space-y-6 lg:space-y-8 lg:col-span-5 animate-fade-in-down px-2 lg:px-0 order-2">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-md shadow-lg">
                 <Star size={14} className="text-[#d4af37] animate-pulse" />
                 <span className="text-[#d4af37] text-xs font-bold tracking-[0.15em] uppercase">พระบรมราโชวาท</span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 lg:pl-8 border-l-2 lg:border-l-4 border-[#d4af37]/50">
              <span className="text-5xl lg:text-8xl text-[#d4af37]/10 font-serif absolute -top-6 -left-3 lg:-top-8 lg:-left-4 z-0">"</span>
              <div className="relative z-10 space-y-4 text-center lg:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-[#fcf6ba] leading-relaxed font-serif italic tracking-wide text-shadow-gold">
                  เจ้าหน้าที่ทุก ๆ ฝ่ายซึ่งเสียชีวิตลงนี้ เป็นผู้พิทักษ์ปกป้องไทยให้เป็นไท...
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-light text-[#fcf6ba]/80 font-serif italic hidden sm:block">
                  ฉะนั้น คนไทยทุกคนจะต้องตอบแทน ด้วยการรักษาความสุจริตยุติธรรมในแผ่นดินไว้ให้มั่นคง...
                </p>
              </div>
            </blockquote>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="h-[1px] w-8 lg:w-12 bg-[#d4af37]/50"></div>
              <p className="text-[#b38728] text-xs lg:text-sm font-light">๘ มีนาคม ๒๕๒๔</p>
            </div>

            {/* ปุ่มกด (Marquee ถูกย้ายออกไปแล้ว) */}
            <div className="pt-4 lg:pt-6 space-y-4">
               <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setShowInput(true)}
                  className="group relative px-6 py-3.5 rounded-full overflow-hidden transition-all duration-300 shadow-lg active:scale-95 flex-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#aa771c] animate-pulse-slow"></div>
                  <div className="absolute inset-[2px] bg-[#1a0526] rounded-full group-hover:bg-[#1a0526]/80 transition-colors"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[#d4af37] font-bold text-base group-hover:text-[#fffdf5]">
                    <Send size={18} /> ร่วมส่งกำลังใจให้พี่ ๆ ทหาร
                  </span>
                </button>

                <button 
                  onClick={() => setShowAllMessages(true)}
                  className="group relative px-6 py-3.5 rounded-full overflow-hidden transition-all duration-300 border-2 border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 flex-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[#fcf6ba] font-bold text-base group-hover:text-[#d4af37]">
                    <MessageCircle size={18} /> อ่านทั้งหมด
                  </span>
                </button>
              </div>
              <p className="text-[#fcf6ba]/40 text-xs text-center lg:text-left">*ข้อความจะปรากฏทันทีที่กระดานฝั่งขวา</p>
            </div>
          </div>

          {/* --- ส่วนที่ 3: กระดานข้อความแนวตั้ง (ขวาสุด) --- */}
          {/* Mobile: ล่างสุด, Desktop: ขวาสุด (3/12 ส่วน) */}
          <div className="lg:col-span-3 w-full animate-fade-in-right order-3 mt-8 lg:mt-0">
             {/* ✨ นี่คือ Card แนวตั้งที่ซีต้องการครับ */}
             <div className="relative w-full max-w-sm mx-auto lg:mx-0 bg-[#1a0b2e]/60 border border-[#b38728]/40 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col h-[400px] lg:h-[500px]">
                
                {/* Header ของการ์ด (เอา Code ที่ซีให้มา มาใส่ตรงนี้ครับ) */}
                <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] font-bold z-20 shadow-md">
                   <div className="flex items-center gap-2 text-sm lg:text-base">
                      <Flower size={16} className="animate-spin-slow" /> 
                      <span>ส่งใจถึงแนวหน้า</span>
                   </div>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#1a0b2e]/30"></div>
                      <div className="w-2 h-2 rounded-full bg-[#1a0b2e]/30"></div>
                   </div>
                </div>

                {/* พื้นที่แสดงข้อความแบบแนวตั้ง (Vertical Scroll) */}
                <div className="flex-1 overflow-hidden relative group">
                   <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#1a0b2e]/80 to-transparent z-10 pointer-events-none"></div>
                   <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#1a0b2e]/80 to-transparent z-10 pointer-events-none"></div>
                   
                   {/* Component แสดงรายการข้อความวิ่งขึ้น */}
                   <VerticalMarqueeList />
                </div>

                {/* Footer ของการ์ด */}
                <div onClick={() => setShowAllMessages(true)} className="shrink-0 p-3 bg-[#1a0b2e]/80 border-t border-[#b38728]/20 text-center cursor-pointer hover:bg-[#b38728]/10 transition-colors">
                   <span className="text-[#d4af37] text-xs font-bold flex items-center justify-center gap-1">
                      คลิกเพื่อดูทั้งหมด <Users size={12} />
                   </span>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* --- Modal Components --- */}
      {showInput && <ModalWrapper onClose={() => setShowInput(false)} title="ส่งกำลังใจ"><MessageInput onClose={() => setShowInput(false)} /></ModalWrapper>}
      {showAllMessages && <ModalWrapper onClose={() => setShowAllMessages(false)} title="รวมพลังน้ำใจไทย"><AllMessagesList /></ModalWrapper>}

    </section>
  );
}

// --- Component ใหม่: สำหรับแสดงข้อความวิ่งแนวตั้ง ---
function VerticalMarqueeList() {
  const [messages, setMessages] = useState([
    { text: "ขอให้ทหารทุกท่านปลอดภัย", sender: "คนไทย" },
    { text: "เป็นกำลังใจให้เสมอนะคะ", sender: "น้องเอ" },
    { text: "สู้ๆ ครับพี่น้องทหาร", sender: "คุณบี" }
  ]);

  useEffect(() => {
    const fetchMessages = async () => {
      // ดึง 20 ข้อความล่าสุด
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(20);
      if (data && data.length > 0) setMessages(data);
    };
    fetchMessages();
    const channel = supabase.channel('vertical-feed').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages(prev => [payload.new, ...prev]);
    }).subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  // สร้าง list 2 ชุดเพื่อให้ loop เนียนๆ
  const displayList = [...messages, ...messages]; 

  return (
    <div className="h-full overflow-hidden py-2">
       {/* animate-scroll-up คือ class ที่เราประกาศ style ไว้ข้างบน */}
       <div className="animate-scroll-up flex flex-col gap-3 px-4">
          {displayList.map((msg, i) => (
             <div key={i} className="bg-white/5 border border-[#d4af37]/20 rounded-lg p-3 hover:bg-white/10 transition-colors relative">
                <Quote size={12} className="absolute top-2 right-2 text-[#d4af37]/20" />
                <p className="text-[#fcf6ba] text-sm font-serif italic mb-2 leading-relaxed opacity-90">
                   "{msg.text}"
                </p>
                <div className="flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#b38728]">
                      <Users size={10} />
                   </div>
                   <span className="text-[10px] text-[#b38728] font-bold truncate">
                      คุณ {msg.sender}
                   </span>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
}

// --- Component ย่อยเดิม (ModalWrapper, AllMessagesList, MessageInput) ---
// (Copy ของเดิมมาวางต่อได้เลยครับ หรือถ้าต้องการให้แปะให้ครบชุด บอกได้เลยครับ)
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
            <p className="text-[#2a0e38] text-base sm:text-lg font-serif italic mb-3 sm:mb-4 relative z-10 leading-relaxed">"{msg.text}"</p>
            <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[#fcf6ba] relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#b38728]">
                <Users size={12} className="sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="text-xs sm:text-sm text-[#8c6b1f] font-bold">คุณ {msg.sender || "ผู้หวังดี"}</div>
            </div>
          </div>
        ))
      )}
      <div className="col-span-1 sm:col-span-2 text-center text-gray-400 text-xs sm:text-sm mt-4">แสดง 100 ข้อความล่าสุด</div>
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
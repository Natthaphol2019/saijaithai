// src/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Send, Star, Flower, Sparkles, X, Users, Heart } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles'; // ดึงโคมลอยมาใช้

export default function HeroSection() {
  const [showInput, setShowInput] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-24 overflow-hidden">
      
      {/* 1. เรียกใช้โคมลอยเป็นฉากหลัง */}
      <FloatingParticles />

      {/* Decorative Corners (กรอบลายไทย) */}
      <div className="absolute top-24 left-6 w-24 h-24 border-t-2 border-l-2 border-[#b38728]/40 rounded-tl-[50px] hidden lg:block animate-pulse-slow"></div>
      <div className="absolute top-24 right-6 w-24 h-24 border-t-2 border-r-2 border-[#b38728]/40 rounded-tr-[50px] hidden lg:block animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-6 w-24 h-24 border-b-2 border-l-2 border-[#b38728]/40 rounded-bl-[50px] hidden lg:block animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-6 w-24 h-24 border-b-2 border-r-2 border-[#b38728]/40 rounded-br-[50px] hidden lg:block animate-pulse-slow"></div>

      {/* 2. เนื้อหาหลักตรงกลาง */}
      <div className="space-y-8 max-w-6xl mx-auto z-10 text-center relative flex flex-col items-center">
        
        {/* Icon ดาวหมุนๆ */}
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] blur-xl opacity-50 rounded-full"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-[#bf953f] via-[#fcf6ba] to-[#aa771c] p-[3px] rounded-full shadow-[0_0_60px_rgba(212,175,55,0.5)] relative">
            <div className="w-full h-full bg-[#2a0e38] rounded-full flex items-center justify-center">
              <Star className="text-[#fcf6ba] w-12 h-12 fill-[#fcf6ba]/30 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-9xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] block drop-shadow-2xl">
              สายใจไทย
            </span>
            <span className="text-3xl md:text-6xl text-[#fcf6ba] font-light tracking-wide block relative mt-2">
              ใต้ร่มพระบารมี
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </span>
          </h1>
        </div>

        {/* ✨ Marquee Section (ตัววิ่งตรงกลาง) */}
        <div className="w-full max-w-4xl h-14 bg-[#1a0b2e]/60 border border-[#b38728]/40 backdrop-blur-md rounded-full flex items-center overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.15)] my-6">
           <div className="flex items-center h-full px-6 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-[#1a0b2e] font-bold z-20 text-sm whitespace-nowrap shadow-lg">
              <Flower size={16} className="mr-2 animate-spin-slow" /> เสียงจากหัวใจ
           </div>
           <MarqueeMessage />
        </div>

        {/* คำบรรยาย */}
        <p className="text-[#f4f4f0]/90 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed font-sans drop-shadow-md">
          "ร่วมร้อยรวมดวงใจ... ส่งไปถึงทหารผู้เสียสละ <br className="hidden md:block"/> 
          เปรียบเสมือน <span className="text-[#fcf6ba] font-medium border-b border-[#d4af37]/50">สายใยแห่งความห่วงใย</span> ที่ไม่มีวันจางหาย"
        </p>

        {/* ปุ่มกด */}
        <div className="pt-6">
          <button 
            onClick={() => setShowInput(true)}
            className="group relative px-12 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#aa771c] rounded-full animate-pulse"></div>
            <div className="absolute inset-[2px] bg-[#2a0e38] rounded-full group-hover:bg-opacity-80 transition"></div>
            <span className="relative z-10 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] font-bold text-xl group-hover:text-white transition">
              <Send className="w-6 h-6 text-[#fcf6ba]" /> เขียนคำอวยพร
            </span>
          </button>
        </div>
      </div>

      {/* 3. Modal เขียนข้อความ (Popup) */}
      {showInput && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-lg bg-[#fffdf5] rounded-xl shadow-2xl relative overflow-hidden border border-[#b38728] animate-float">
            <div className="h-16 bg-gradient-to-r from-[#bf953f] to-[#aa771c] flex items-center justify-center relative">
               <h3 className="text-[#1a0b2e] font-bold text-xl flex items-center gap-2">
                 <Flower className="animate-spin-slow"/> ส่งกำลังใจแด่ผู้กล้า
               </h3>
               <button onClick={() => setShowInput(false)} className="absolute right-4 text-[#1a0b2e]/70 hover:text-[#1a0b2e] bg-white/20 rounded-full p-1"><X size={20}/></button>
            </div>
            <div className="p-8 text-[#1a0b2e]">
               <MessageInput onClose={() => setShowInput(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// --- Component ย่อย: ตัววิ่ง (Marquee) ---
function MarqueeMessage() {
  const [messages, setMessages] = useState([
    { text: "ขอให้ทหารทุกท่านปลอดภัย", sender: "คนไทย" },
    { text: "ขอบคุณที่เสียสละเพื่อพวกเรา", sender: "เด็กน้อย" },
  ]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(20);
      if (data && data.length > 0) setMessages(data);
    };
    fetchMessages();
    const channel = supabase.channel('marquee-room').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages(prev => [payload.new, ...prev]);
    }).subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="flex-1 overflow-hidden relative h-full flex items-center group cursor-default">
      <div className="flex gap-16 items-center animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap px-4 w-max">
        {[...messages, ...messages].map((msg, i) => (
          <div key={i} className="inline-flex items-center gap-3">
             <Flower size={14} className="text-[#d4af37] animate-spin-slow" />
             <span className="text-[#fcf6ba] text-lg font-serif tracking-wide drop-shadow-md">"{msg.text}"</span>
             <span className="text-[10px] text-[#b38728] border border-[#b38728]/50 bg-[#b38728]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">คุณ {msg.sender}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#2a0e38] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

// --- Component ย่อย: ฟอร์มส่งข้อความ ---
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
    setStatus('success');
    setTimeout(() => { setStatus('idle'); onClose(); }, 1500);
  };

  return (
    <form onSubmit={handleSend} className="space-y-4 font-sans">
      <div>
        <label className="block text-gray-600 text-sm font-bold mb-1 flex items-center gap-1"><Users size={14}/> ชื่อผู้ส่ง</label>
        <input type="text" value={sender} onChange={e => setSender(e.target.value)} className="w-full bg-gray-50 border border-[#b38728]/30 rounded px-4 py-2 focus:ring-1 focus:ring-[#b38728] outline-none" placeholder="เช่น ครอบครัวใจดี" />
      </div>
      <div>
        <label className="block text-gray-600 text-sm font-bold mb-1 flex items-center gap-1"><Heart size={14}/> ข้อความ</label>
        <textarea value={text} onChange={e => setText(e.target.value)} className="w-full bg-gray-50 border border-[#b38728]/30 rounded px-4 py-2 h-24 focus:ring-1 focus:ring-[#b38728] outline-none resize-none" placeholder="ขอให้ปลอดภัย..."></textarea>
      </div>
      <button type="submit" className={`w-full py-3 rounded text-white font-bold transition shadow-md ${status === 'success' ? 'bg-green-600' : 'bg-gradient-to-r from-[#bf953f] to-[#aa771c] hover:opacity-90'}`}>
        {status === 'sending' ? 'กำลังส่ง...' : status === 'success' ? 'ส่งเรียบร้อย' : 'ส่งข้อความ'}
      </button>
    </form>
  );
}
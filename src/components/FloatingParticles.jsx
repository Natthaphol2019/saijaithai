// src/components/FloatingParticles.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Sparkles } from 'lucide-react';

export default function FloatingParticles() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // ดึงข้อความจาก Supabase
    const fetchMessages = async () => {
      const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(15);
      if (data) setMessages(data);
    };
    fetchMessages();

    // ฟัง Realtime
    const channel = supabase.channel('lanterns')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages(prev => [payload.new, ...prev]);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {messages.map((msg, i) => {
        // สุ่มตำแหน่งและความเร็วของแต่ละโคม
        const randomLeft = Math.floor(Math.random() * 90) + 5; 
        const randomDuration = 20 + Math.random() * 15; // 20-35 วินาที
        const randomDelay = Math.random() * 10;
        const randomScale = 0.7 + Math.random() * 0.3;

        return (
          <div 
            key={msg.id || i}
            className="absolute -bottom-40 flex flex-col items-center opacity-0"
            style={{
              left: `${randomLeft}%`,
              animation: `floatUp ${randomDuration}s linear infinite`,
              animationDelay: `${randomDelay}s`,
              transform: `scale(${randomScale})`
            }}
          >
            {/* ตัวโคม/ข้อความ */}
            <div className="bg-[#fffdf5]/10 backdrop-blur-[2px] border border-[#d4af37]/30 px-4 py-3 rounded-t-lg rounded-b-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] max-w-[220px] text-center relative">
               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500/20 blur-xl rounded-full animate-pulse"></div>
               <Sparkles size={12} className="absolute top-1 right-1 text-[#d4af37] opacity-60" />
               <p className="text-[#fcf6ba] text-sm font-serif leading-relaxed drop-shadow-md relative z-10">"{msg.text}"</p>
            </div>
            {/* หางโคม */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37]/50 to-transparent"></div>
            
            {/* ชื่อผู้ส่ง */}
            <div className="text-[10px] text-[#1a0b2e] font-bold tracking-wider bg-[#d4af37] px-2 py-0.5 rounded-full mt-[-10px] shadow-md">
               {msg.sender}
            </div>
          </div>
        );
      })}
    </div>
  );
}
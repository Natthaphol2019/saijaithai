// src/App.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // import ตัวเชื่อมต่อ
import { Send, Heart, MapPin, Shield, CheckCircle, User } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-yellow-500/30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
             <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center border-2 border-yellow-500 shadow-md">
               <Heart className="text-yellow-400 w-5 h-5 fill-current" />
             </div>
             <div>
               <h1 className="font-bold text-purple-900">สายใจไทย</h1>
               <p className="text-[10px] text-slate-500 uppercase">ใต้ร่มพระบารมี</p>
             </div>
          </div>
          <button 
            onClick={() => setActivePage(activePage === 'home' ? 'messages' : 'home')}
            className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-bold hover:bg-purple-200 transition"
          >
            {activePage === 'home' ? 'เขียนคำอวยพร' : 'กลับหน้าหลัก'}
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow">
        {activePage === 'home' ? (
          <HomePage onNavigateToMessages={() => setActivePage('messages')} />
        ) : (
          <MessageBoardPage />
        )}
      </div>

      <footer className="bg-purple-950 text-white py-6 text-center text-sm border-t-4 border-yellow-500">
        <p>© 2024 สายใจไทย - เพื่อทหารผู้กล้า</p>
      </footer>
    </div>
  );
}

// --- หน้าแรก (Home) ---
function HomePage({ onNavigateToMessages }) {
  return (
    <div>
      <section className="bg-purple-900 text-white py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            สายใจไทย <span className="text-yellow-400">ใต้ร่มพระบารมี</span>
          </h1>
          <p className="text-purple-200 mb-8 text-lg">
            "เชื่อมโยงน้ำพระราชหฤทัยสู่ทหารผู้เสียสละ เพื่อปกป้องผืนแผ่นดินไทย"
          </p>
          <button onClick={onNavigateToMessages} className="bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Send className="w-5 h-5" /> ร่วมส่งกำลังใจ
          </button>
        </div>
      </section>
      
      {/* ส่วนเนื้อหา 2 ฝั่ง (จำลองจาก PDF) */}
      <section className="py-12 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-900">
            <h3 className="text-xl font-bold text-slate-800 flex gap-2 mb-3">
              <MapPin className="text-purple-600" /> พื้นที่ปฏิบัติการ
            </h3>
            <p className="text-slate-600">ทหารผู้กล้ายังคงปฏิบัติหน้าที่ตามแนวชายแดน เผชิญความเสี่ยงเพื่อความสงบสุขของพวกเรา</p>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-yellow-500 text-right">
            <h3 className="text-xl font-bold text-slate-800 flex gap-2 mb-3 justify-end">
              ความเสียสละ <Shield className="text-yellow-600" />
            </h3>
            <p className="text-slate-600">"เบื้องหลังความสงบสุขของแผ่นดิน คือความกล้าหาญของทหารไทย"</p>
         </div>
      </section>
    </div>
  );
}

// --- หน้าส่งข้อความ (ใช้ Supabase) ---
function MessageBoardPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [status, setStatus] = useState('idle');

  // ดึงข้อมูล Realtime จาก Supabase
  useEffect(() => {
    // 1. โหลดข้อมูลครั้งแรก
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error) setMessages(data);
    };
    fetchMessages();

    // 2. ตั้งค่า Realtime (ใครพิมพ์มา มันเด้งขึ้นเลย)
    const channel = supabase
      .channel('messages-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setStatus('sending');

    try {
      // ส่งข้อมูลเข้า Supabase
      const { error } = await supabase
        .from('messages')
        .insert([{ 
          text: newMessage, 
          sender: senderName || 'ผู้หวังดี' 
        }]);

      if (error) throw error;

      setStatus('success');
      setNewMessage('');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      console.error("Error:", error);
      alert("ส่งไม่สำเร็จ");
      setStatus('idle');
    }
  };

  // ฟังก์ชันสุ่มสีพื้นหลังโพสต์อิท
  const getColor = (index) => {
    const colors = ['bg-yellow-100', 'bg-purple-100', 'bg-pink-100', 'bg-blue-100'];
    return colors[index % colors.length];
  }

  return (
    <div className="py-8 px-4 bg-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* ฟอร์มส่งข้อความ */}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-purple-900">ส่งกำลังใจถึงรั้วของชาติ</h2>
            <form onSubmit={handleSendMessage} className="space-y-3">
              <input 
                type="text" 
                placeholder="ชื่อของคุณ (ไม่บังคับ)"
                className="w-full p-2 border rounded"
                value={senderName}
                onChange={e => setSenderName(e.target.value)}
              />
              <textarea 
                className="w-full p-2 border rounded h-32 resize-none"
                placeholder="เขียนข้อความให้กำลังใจ..."
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                required
              />
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className={`w-full py-2 rounded font-bold text-white ${status === 'success' ? 'bg-green-600' : 'bg-purple-900 hover:bg-purple-800'}`}
              >
                {status === 'success' ? 'ส่งเรียบร้อย!' : 'ส่งข้อความ'}
              </button>
            </form>
          </div>
        </div>

        {/* กระดานข้อความ */}
        <div className="space-y-4">
           <h3 className="font-bold text-slate-700 flex items-center gap-2">
             <User size={18} /> เสียงจากประชาชน
           </h3>
           <div className="grid grid-cols-1 gap-3">
             {messages.length === 0 && <p className="text-gray-400 text-center">ยังไม่มีข้อความ...</p>}
             {messages.map((msg, idx) => (
               <div key={msg.id || idx} className={`${getColor(idx)} p-4 rounded-lg shadow-sm relative`}>
                 <p className="text-slate-800 text-lg font-medium">"{msg.text}"</p>
                 <div className="text-right text-xs text-slate-500 mt-2 font-bold">- {msg.sender}</div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
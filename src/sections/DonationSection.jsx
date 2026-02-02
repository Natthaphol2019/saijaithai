import React, { useState } from 'react';
import { Copy, Download, Check, Phone, Mail, MapPin, Building, QrCode, Share2, Wallet, X, ZoomIn, Save } from 'lucide-react';

export default function DonationSection() {
    // --- State Management ---
    const [activeTab, setActiveTab] = useState('bank');
    const [copied, setCopied] = useState('');
    const [selectedQrIndex, setSelectedQrIndex] = useState(0);
    const [zoomImage, setZoomImage] = useState(null);

    // --- Data Configuration ---
    const bankAccounts = [
        {
            bank: 'ไทยพาณิชย์',
            branch: 'สาขาสวนจิตรลดา',
            accName: 'มูลนิธิสายใจไทยฯ',
            accNo: '067-2-02100-0',
            gradient: 'from-[#4e2c7e] to-[#7846ba]',
            logo: 'SCB'
        },
        {
            bank: 'กสิกรไทย',
            branch: 'สำนักพหลโยธิน',
            accName: 'มูลนิธิสายใจไทยฯ',
            accNo: '099-2-63222-4',
            gradient: 'from-[#138f2d] to-[#2dcc53]',
            logo: 'KBANK'
        },
        {
            bank: 'กรุงไทย',
            branch: 'สาขาถนนศรีอยุธยา',
            accName: 'มูลนิธิสายใจไทยฯ',
            accNo: '013-6-02398-3',
            gradient: 'from-[#00a5e5] to-[#4dd0e1]',
            logo: 'KTB'
        },
    ];

    const qrData = [
        // ตรวจสอบ path รูปภาพให้ถูกต้อง
        { name: 'พร้อมเพย์', img: '/images/qr1.webp', fileName: 'donataion_promtpay.webp', color: 'bg-[#003d68]' },
    ];

    // --- Actions ---

    // ฟังก์ชัน Copy เลขบัญชี
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
    };

    // ฟังก์ชันดาวน์โหลดรูปภาพ (รองรับ PC และ Mobile ส่วนใหญ่)
    const handleDownloadImage = (imgUrl, fileName) => {
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="donate" className="relative py-24 px-4 bg-[#f8f5f0] overflow-hidden min-h-screen">
            
            {/* --- Lightbox Modal (Zoom View) --- */}
            {zoomImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setZoomImage(null)}>
                    <div className="relative w-full max-w-lg flex flex-col items-center">
                        <button className="absolute -top-12 right-0 text-white/70 hover:text-white bg-white/10 rounded-full p-2 transition-colors">
                            <X size={24} />
                        </button>
                        
                        <img
                            src={zoomImage}
                            alt="Full Size QR"
                            className="w-full h-auto object-contain rounded-xl shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* ปุ่ม Download ในหน้า Zoom */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadImage(zoomImage, 'donation-qr.webp');
                            }}
                            className="mt-6 flex items-center gap-2 bg-[#d4af37] text-[#1a0b2e] px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                            <Download size={20} /> บันทึกรูปภาพ
                        </button>
                        <p className="text-white/50 text-xs mt-3">หรือกดค้างที่รูปเพื่อบันทึก</p>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a0b2e] font-serif">
                        ร่วมเป็นส่วนหนึ่งของ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c]">การให้</span>
                    </h2>
                    <p className="text-gray-600 font-light">ทุนทรัพย์เพื่อพัฒนาคุณภาพชีวิตวีรชนผู้เสียสละ</p>
                </div>

                {/* Main Card Container */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-[#d4af37]/20 overflow-hidden">
                    
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-100">
                        {[
                            { id: 'bank', icon: Wallet, label: 'เลขบัญชี' },
                            { id: 'qr', icon: QrCode, label: 'สแกน QR' },
                            { id: 'contact', icon: Share2, label: 'แจ้งโอน' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-5 flex items-center justify-center gap-2 text-sm md:text-base font-bold transition-all duration-300 relative
                                    ${activeTab === tab.id ? 'text-[#1a0b2e] bg-[#f8f5f0]' : 'text-gray-400 hover:text-[#b38728] hover:bg-gray-50'}`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37]"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-10 min-h-[400px]">
                        
                        {/* 1. BANK ACCOUNTS */}
                        {activeTab === 'bank' && (
                            <div className="space-y-4 animate-fade-in-up">
                                {bankAccounts.map((acc, index) => (
                                    <div key={index} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 hover:border-[#d4af37]/50 hover:shadow-lg transition-all flex items-center gap-4 group">
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${acc.gradient} flex items-center justify-center text-white text-xs md:text-base font-bold shadow-md shrink-0`}>
                                            {acc.logo}
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <h4 className="font-bold text-[#1a0b2e] text-sm md:text-lg truncate">{acc.bank}</h4>
                                            <p className="text-xs text-gray-500 mb-1">{acc.accName}</p>
                                            <p className="text-lg md:text-2xl font-mono font-bold text-[#b38728] truncate tracking-tight">{acc.accNo}</p>
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(acc.accNo)} 
                                            className="p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-[#b38728] hover:text-white transition-all active:scale-95"
                                        >
                                            {copied === acc.accNo ? <Check size={20} /> : <Copy size={20} />}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 2. QR CODE (Download Logic Improved) */}
                        {activeTab === 'qr' && (
                            <div className="animate-fade-in-up flex flex-col items-center">
                                {/* Selector (ถ้ามีหลาย QR) */}
                                {qrData.length > 1 && (
                                    <div className="flex gap-2 mb-6">
                                        {qrData.map((qr, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedQrIndex(index)}
                                                className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all ${
                                                    selectedQrIndex === index ? 'bg-[#1a0b2e] text-[#d4af37] border-transparent' : 'border-gray-200 text-gray-500'
                                                }`}
                                            >
                                                {qr.name}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* QR Display Card */}
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative group max-w-xs w-full">
                                    <div 
                                        className="aspect-square bg-[#f8f5f0] rounded-xl flex items-center justify-center overflow-hidden cursor-zoom-in relative"
                                        onClick={() => setZoomImage(qrData[selectedQrIndex].img)}
                                    >
                                        <img 
                                            src={qrData[selectedQrIndex].img} 
                                            alt="QR Code" 
                                            className="w-full h-full object-contain p-2"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                            <ZoomIn className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all text-[#1a0b2e]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-xs">
                                    <button 
                                        onClick={() => handleDownloadImage(qrData[selectedQrIndex].img, qrData[selectedQrIndex].fileName)}
                                        className="w-full flex items-center justify-center gap-2 bg-[#1a0b2e] text-white py-3.5 rounded-xl font-bold shadow-lg hover:bg-[#2d1b4e] active:scale-95 transition-all"
                                    >
                                        <Save size={20} className="text-[#d4af37]" /> 
                                        บันทึก QR Code
                                    </button>
                                    
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <Phone size={12} /> หากบันทึกไม่ได้ ให้กดค้างที่รูปภาพ
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* 3. CONTACT */}
                        {activeTab === 'contact' && (
                            <div className="animate-fade-in-up">
                                <div className="bg-[#1a0b2e] text-[#fcf6ba] rounded-2xl p-6 md:p-8 shadow-inner relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                    
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                                        <Share2 size={20} /> ช่องทางแจ้งหลักฐาน
                                    </h3>
                                    
                                    <div className="grid gap-4">
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="p-3 rounded-full bg-white/10"><Phone className="text-[#d4af37]" size={20} /></div>
                                            <div>
                                                <p className="text-xs text-white/50 uppercase tracking-wider">Fax</p>
                                                <p className="font-mono text-lg">02-281-6403</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="p-3 rounded-full bg-white/10"><Mail className="text-[#d4af37]" size={20} /></div>
                                            <div>
                                                <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                                                <p className="font-mono text-lg break-all">aintawongsa@yahoo.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-12 grid md:grid-cols-2 gap-6 text-gray-500 text-sm border-t border-[#d4af37]/20 pt-8">
                    <div className="flex gap-3">
                        <Building className="text-[#d4af37] shrink-0" size={18} />
                        <div>
                            <strong className="block text-[#1a0b2e] mb-1">สนง. สวนจิตรลดา</strong>
                            <span className="font-light">ถนนราชวิถี แขวงสวนจิตรลดา เขตดุสิต กทม. 10303</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <MapPin className="text-[#d4af37] shrink-0" size={18} />
                        <div>
                            <strong className="block text-[#1a0b2e] mb-1">สนง. พญาไท</strong>
                            <span className="font-light">306/1 ถนนศรีอยุธยา เขตราชเทวี กทม. 10400</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
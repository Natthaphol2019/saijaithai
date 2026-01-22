/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif Thai"', 'serif'],
        sans: ['"Noto Sans Thai"', 'sans-serif'],
      },
      colors: {
        royal: {
          dark: '#1a0b2e',   // ม่วงมืด (พื้นหลัง)
          purple: '#431259', // ม่วงหลัก
          gold: '#d4af37',   // ทองมาตรฐาน
        }
      },
      backgroundImage: {
        // ไล่เฉดสีทองคำเปลว (มีเงา มีแสง)
        'gold-gradient': 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
        // ไล่เฉดสีม่วงไหมไทย
        'purple-gradient': 'radial-gradient(circle at center, #5e2a7e 0%, #2a0e38 100%)',
        'thai-pattern': "url('https://www.transparenttextures.com/patterns/black-scales.png')",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite', // ตัววิ่ง
        'shimmer': 'shimmer 3s linear infinite', // แสงวิบวับ
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}
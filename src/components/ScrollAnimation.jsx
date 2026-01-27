// src/components/ScrollAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollAnimation({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // เริ่มต้น: จางและอยู่ต่ำ
      whileInView={{ opacity: 1, y: 0 }} // เมื่อเห็น: ชัดและลอยขึ้นมา
      viewport={{ once: true, margin: "-100px" }} // เล่นแค่รอบเดียวเมื่อเลื่อนมาถึง
      transition={{ duration: 0.8, ease: "easeOut" }} // ความนุ่มนวล
      className={className}
    >
      {children}
    </motion.div>
  );
}
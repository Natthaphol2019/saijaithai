// src/components/ScrollAnimation.jsx
import React from 'react';

// แก้ไขให้เป็นแค่กล่องธรรมดา ไม่ต้องมี Animation ซ่อน/แสดง
export default function ScrollAnimation({ children, className = "" }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
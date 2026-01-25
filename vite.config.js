import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // อนุญาตให้เข้าถึงจาก ngrok หรือ domain ภายนอกได้
    allowedHosts: true
  }
})

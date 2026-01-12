import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.CF_PAGES ? '/' : '/ui-guide/',
  server: {
    port: 10000,
    host: true,
    allowedHosts: ['ui.hyung.life', 'localhost']
  }
})

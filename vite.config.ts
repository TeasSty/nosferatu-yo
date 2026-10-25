import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages: https://teassty.github.io/nosferatu-yo/
export default defineConfig({
  plugins: [react()],
  base: '/nosferatu-yo/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://emrebengu.dev/',
  build: {
    chunkSizeWarningLimit: 1600,
  },
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      output: { manualChunks: { testimonials: ['react', 'react-dom/client', 'motion/react'] } },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) return
        warn(warning)
      },
    },
  },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  base: process.env.GITHUB_ACTIONS ? '/newprismaprovider/' : '/',
})

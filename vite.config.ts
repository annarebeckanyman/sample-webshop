import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@api': path.resolve('src/api'),
      '@app': path.resolve('src/app'),
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@constants': path.resolve('src/constants'),
      '@features': path.resolve('src/features'),
      '@pages': path.resolve('src/pages'),
      '@store': path.resolve('src/store'),
      '@styles': path.resolve('src/styles'),
      '@typings': path.resolve('src/typings'),
      '@utils': path.resolve('src/utils'),
    },
  },
})

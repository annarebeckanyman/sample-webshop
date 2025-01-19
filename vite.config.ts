import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
      '@components': path.resolve('src/components'),
      '@features': path.resolve('src/features'),
      '@pages': path.resolve('src/pages'),
      '@store': path.resolve('src/store'),
      '@styles': path.resolve('src/styles'),
      '@typings': path.resolve('src/typings'),
      '@utils': path.resolve('src/utils'),
    },
  },
})

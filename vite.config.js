import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  worker: {
    format: 'es',
    plugins: []
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'pglite': ['@electric-sql/pglite']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['@electric-sql/pglite']
  }
})

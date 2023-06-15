import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // API Server Address in development environment
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})

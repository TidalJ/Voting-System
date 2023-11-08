import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Local running configuration, and reverse proxy configuration
  server: {
    proxy: {// The local development environment realizes cross-domain through proxy, and the production environment uses nginx forwarding.
      '^/api': {
        target: 'http://localhost:8080', // Access the real address through the proxy interface. Here is the actual address visited. Vue will proxy the request through the proxy server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Replace api with empty
      }
    }
  }
})

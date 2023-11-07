import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 本地运行配置，及反向代理配置
  server: {
    proxy: {// 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      '^/api': {
        target: 'http://localhost:8080', // 通过代理接口访问实际地址。这里是实际访问的地址。vue会通过代理服务器来代理请求
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 将api替换为空
      }
    }
  }
})

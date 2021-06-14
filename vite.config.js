import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteMockServe({
    supportTs: false // 不使用ts
  })],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      '@coms': path.resolve(__dirname,'src/components')
    }
  },
  server:{
    host: '0.0.0.0',
    port: 4065,
    strictPort: true, // 端口占用时会直接退出
    open: true,
    proxy:{
      '/api': {
        target: 'http://127.0.0.0:4055',
        changeOrigin: true
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myCaozhi/', // 这里是你的仓库名，前后斜杠必须保留！
  plugins: [vue()],
})

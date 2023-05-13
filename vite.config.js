import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
export default defineConfig({
  plugins: [
    vue(),
    qiankun(
      'subApp',
      {
        useDevMode: true
      }
    )
  ],
  server: {
    port: 5174,
    // cors: {
    //   origin: "*",
    //   methods: ["GET","HEAD","PUT","PATCH","POST","DELETE","FETCH"],
    //   preflightContinue: false,
    //   optionsSuccessStatus: 204
    // }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
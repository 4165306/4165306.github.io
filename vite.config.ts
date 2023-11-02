import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import { NgmiPolyfill } from 'vite-plugin-ngmi-polyfill'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    NgmiPolyfill()
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      timers: 'rollup-plugin-node-polyfills/polyfills/timers',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
      events: 'rollup-plugin-node-polyfills/polyfills/events'
    }
  }
})

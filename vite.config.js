// yes
import {
  fileURLToPath,
  URL
} from 'node:url'
//change 2
import {
  defineConfig
} from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'
import {
  fileURLToPath,
  URL
} from 'node:url'


export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  base: "./",
  devServer: {
    client: {
      overlay: false
    }
  }

})
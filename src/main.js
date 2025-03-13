import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/index.css';
import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts/highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import highcharts3dpie from '@/utils/highcharts3dpie'
const app = createApp(App)
app.use(router)
app.use(HighchartsVue)
app.mount('#app')
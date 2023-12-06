import './assets/main.css'

import { createApp, type Component } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import WithoutNavbarLayout from '@/layouts/WithoutNavbarLayout.vue'
const app = createApp(App);
app.use(router)
  .component('DefaultLayout', DefaultLayout)
  .component('WithoutNavbarLayout', WithoutNavbarLayout)


  .mount('#app');




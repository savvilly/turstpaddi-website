import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './index.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'


createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/style.css";
import {vMaska} from 'maska';

createApp(App).use(store).directive("maska", vMaska).use(router).mount('#app')

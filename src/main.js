import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import store from './store'
import Navbar from "./components/Navbar.vue"

Vue.component(Navbar,"navbar")
createApp(App).use(store).use(router).mount('#app')

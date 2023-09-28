import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './styles/typography.css'
import './styles/style.css'

import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')

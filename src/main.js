// import { createApp } from 'vue'
// import App from './views/App.vue'
// import './assets/styles/main.css'  // Note o caminho atualizado

// const app = createApp(App)
// app.mount('#app')

import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import './assets/styles/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
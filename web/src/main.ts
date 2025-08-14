import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import { setupStore } from './store'

import 'element-plus/dist/index.css'

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import installElementPlus from './plugins/element'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import router from './router'

const app = createApp(App)
installElementPlus(app)
app.use(VueTheMask)
app.use(router)
app.mount('#app')
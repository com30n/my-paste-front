import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
const rootComponent = app.use(store).use(router).mount('#app')
const config = () => {
    return {
        CONFIG_PRODUCTION_TIP: false
    }
}

console.log(app.config)
console.log(process.env.VUE_APP_HOSTNAME)
app.config.globalProperties.$hostname = process.env.VUE_APP_HOSTNAME

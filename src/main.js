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
// app.config.globalProperties.hostname = config.CONFIG_PRODUCTION_TIP ? 'https://mypaste' : 'http://localhost:8000'
console.log(app.config)
app.config.globalProperties.$hostname = 'http://localhost:8000'
console.log(app.config)

import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'

import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import './styles/index.scss'

createApp(App).use(router).use(store).use(element3).mount('#app')
//  mount 不返回应用本身，它返回的是根组件实例
 
import Vue from 'vue'
import { curi } from '@curi/router';
import Browser from '@hickory/browser'
import { CuriPlugin } from '@curi/vue'

import routes from './routes';
import App from './App.vue'

Vue.config.productionTip = false

const history = Browser()
const router = curi(history, routes)
Vue.use(CuriPlugin, { router })

new Vue({
  render: h => h(App)
}).$mount('#app')

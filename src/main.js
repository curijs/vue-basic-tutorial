import Vue from 'vue'
import { createRouter } from '@curi/router';
import { browser } from '@hickory/browser'
import { CuriPlugin } from '@curi/vue'

import routes from './routes';
import App from './App.vue'

Vue.config.productionTip = false

const router = createRouter(browser, routes)
Vue.use(CuriPlugin, { router })

new Vue({
  render: h => h(App)
}).$mount('#app')

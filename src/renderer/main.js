import Vue from 'vue'
import VueVuelidateJsonschema from 'vue-vuelidate-jsonschema'
import Vuelidate from 'vuelidate'
import VTooltip from 'v-tooltip'
import axios from 'axios'

import App from './App'
import i18n from './i18n'
import router from './router'
import store from './store'

import assets from '@/mixins/assets'
import electron from '@/mixins/electron'
import collections from '@/mixins/collections'

import { client } from '@/plugins/api-client'

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
}

Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$client = client

Vue.use(VueVuelidateJsonschema)
Vue.use(Vuelidate)
Vue.use(VTooltip, {
  defaultHtml: false,
  defaultContainer: '#app'
})

Vue.mixin(assets)
Vue.mixin(electron)
Vue.mixin(collections)

/* eslint-disable no-new */
new Vue({
  components: { App },
  i18n,
  router,
  store,
  template: '<App/>'
}).$mount('#app')

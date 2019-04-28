import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import { createProvider } from './vue-apollo'
import store from "./store";

new Vue({

  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')

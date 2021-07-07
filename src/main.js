import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import * as VueGoogleMaps from 'vue2-google-maps'
import {GOOGLE_MAPS_API_KEY} from '../src/assets/api-key/maps-api.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/_main.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: `${GOOGLE_MAPS_API_KEY}`,
    libraries: 'places', 
  
  },
})



Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')

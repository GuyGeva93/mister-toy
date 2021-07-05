import Vue from 'vue'
import vueRouter from 'vue-router'
import toyApp from '../views/toy-app.vue'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    component: toyApp
  },

]

const router = new vueRouter({
  routes
})

export default router

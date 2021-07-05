import Vue from 'vue'
import vueRouter from 'vue-router'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../cmps/toy-edit.vue'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    component: toyApp
  },
  {
    path: '/edit/:toyId',
    component: toyEdit
  }

]

const router = new vueRouter({
  routes
})

export default router

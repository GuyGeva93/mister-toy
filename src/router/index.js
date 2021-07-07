import Vue from 'vue'
import vueRouter from 'vue-router'
import toyApp from '../pages/toy-app.vue'
import toyEdit from '../cmps/toy-edit.vue'
import toyDetails from '../cmps/toy-details.vue'
import toyStats from '../cmps/toy-stats.vue'
import toyMaps from '../cmps/toy-maps.vue'
import toyAdd from '../cmps/toy-add.vue'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    component: toyApp
  },
  {
    path: '/edit/:toyId',
    component: toyEdit
  },
  {
    path: '/details/:toyId',
    component: toyDetails
  },
  {
    path: '/stats',
    component: toyStats
  }, 
  {
    path: '/maps',
    component: toyMaps
  },
  {
    path: '/add',
    component: toyAdd
  }

]

const router = new vueRouter({
  routes
})

export default router

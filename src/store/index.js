import Vue from 'vue'
import Vuex from 'vuex'
import { toyStore } from './modules/toy-store.js'
import {userStore} from './modules/user-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    
  },

  getters: {},
  mutations: {},
  actions: {},
  modules: {
    toyStore,
    userStore
  },
})

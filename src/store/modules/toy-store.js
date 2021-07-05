import Vue from 'vue'
import Vuex from 'vuex'
import { toyService } from '../../services/toy-service.js'

Vue.use(Vuex)


export const toyStore = {
  state: {
    toys: []
  },

  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    }
  },

  // getters: {

  // },

  actions: {

  }
}
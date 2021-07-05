import Vue from 'vue'
import Vuex from 'vuex'
// import { toyStore } from './modules/toy-store.js'
import { toyService } from '../services/toy-service.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: []

  },

  getters: {
    toysToShow(state) {
      const toysToShow = JSON.parse(JSON.stringify(state.toys))
      return toysToShow
    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    }
  },
  actions: {
    loadToys(context) {
      return toyService.query()
        .then(toys => {
          context.commit({ type: 'setToys', toys })
        })
        .catch(err => {
          console.log(`Can't load toys`, err)
          throw err
        })
    }
  },
  modules: {
    // toyStore
  }
})

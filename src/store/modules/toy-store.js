import Vue from 'vue'
import Vuex from 'vuex'
import { toyService } from '../../services/toy-service.js'

Vue.use(Vuex)


export const toyStore = {
  strict: true,

  state: {
    toys: []
  },

  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    }
  },

  getters: {
    toysToShow(state) {
      const toysToShow = JSON.parse(JSON.stringify(state.toys))
      return toysToShow
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
  }
}
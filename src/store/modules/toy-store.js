import Vue from 'vue'
import Vuex from 'vuex'
import { toyService } from '../../services/toy-service.js'

Vue.use(Vuex)

export const toyStore = {
  strict: true,

  state: {
    toys: [],
    filterBy: '',
  },

  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },

  getters: {
    toysToShow(state) {
      return state.toys
    },
  },

  actions: {
    loadToys(context) {
      return toyService.query(context.state.filterBy)
        .then((toys) => {
          context.commit({ type: 'setToys', toys })
        })
        .catch((err) => {
          console.log(`Can't load toys`, err)
          throw err
        })
    },
    setFilter(context, {filterBy}) {
      
    }
  },
}

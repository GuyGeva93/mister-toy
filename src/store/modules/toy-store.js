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
    setToy(state, { savedToy }) {
      state.toys.unshift(savedToy)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    removeToy(state, {toyId}){
      const idx = state.toys.findIndex(toy => toy._id===toyId)
      if (idx < 0) return console.log('Can not delete toy from state')
      state.toys.splice(idx, 1)
    }
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
    addToy(context, { newToy }) {
      toyService.save(newToy)
        .then(savedToy => {
          context.commit({ type: 'setToy', savedToy })
        })
        .catch(err => console.log('Could not save', err))
    },
    removeToy(context, {toyId}){
      toyService.remove(toyId)
        .then(() => {
          context.commit({type: 'removeToy', toyId})
        })
        .catch(err => console.log('Could not remove', err))
    }

  },
}

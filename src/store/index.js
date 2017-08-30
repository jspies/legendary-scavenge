import Vue from 'vue'
import Vuex from 'vuex'
import predatorData from '@/assets/predator.json'
import achievements from './resources/achievements'

Vue.use(Vuex)

const state = {
  predatorItems: {},
  predatorData: []
}

const getters = {
  predatorItems: state => {
    state.predatorData.map((item) => {
      if (state.predatorItems[item.item]) {
        item.checked = true
      }
    })
    return state.predatorData
  }
}

const actions = {
  addItem ({commit}, item) {
    commit('addItem', item)
  },

  removeItem ({commit}, item) {
    commit('removeItem', item)
  },

  loadItems ({commit}) {
    let items = localStorage.getItem('predator')
    items = JSON.parse(items)
    commit('storeItems', items)
    commit('storeData')
  }
}

const mutations = {
  storeItems (state, items) {
    state.predatorItems = items
  },

  storeData (state) {
    state.predatorData = predatorData
  },

  addItem (state, item) {
    state.predatorItems[item] = true
    localStorage.setItem('predator', JSON.stringify(state.predatorItems))
  },

  removeItem (state, item) {
    delete state.predatorItems[item]
    localStorage.setItem('predator', JSON.stringify(state.predatorItems))
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

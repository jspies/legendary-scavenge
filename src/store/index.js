import Vue from 'vue'
import Vuex from 'vuex'
import predatorData from '@/assets/2534.json'
import achievements from './resources/achievements'

Vue.use(Vuex)

const state = {
  bits: [],
  personal: []
}

const getters = {
  predatorItems: state => {
    state.bits.map((bit, index) => {
      if (state.personal.bits && state.personal.bits.indexOf(index) > -1) {
        bit.checked = true
      }
      bit.extra = predatorData.items[bit.id]
    })

    return state.bits
  }
}

const actions = {
  getPersonalAchievement ({commit}, apikey) {
    achievements.getPersonalAchievement(achievements.ACHIEVEMENTS.PREDATOR1, apikey)
    .then((response) => {
      commit('storePersonal', response)
    })
  },

  loadAchievement ({commit}) {
    achievements.getAchievement(achievements.ACHIEVEMENTS.PREDATOR1)
    .then((response) => {
      commit('storeBits', response)
    })
  }
}

const mutations = {
  storeBits (state, bits) {
    state.bits = bits
  },

  storePersonal (state, bits) {
    state.personal = bits
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

import * as types from '../mutation-types'
import people from '../data/people'

// initial state
const state = {
  currentPage: 'home',
  search: '',
  people: people
}

// getters
const getters = {
  currentPage: state => state.currentPage,
  people: state => state.people,
  search: state => state.search
}

// actions
const actions = {
  setCurrentPage ({ commit }, name) {
    commit('SET_CURRENT_PAGE', name)
  },
  setSearch ({ commit }, value) {
    commit('SET_SEARCH', value)
  }
}

// mutations
const mutations = {
  [types.SET_CURRENT_PAGE] (state, name) {
    state.currentPage = name
  },
  [types.SET_SEARCH] (state, value) {
    state.search = value
  }
}

export default {state, getters, actions, mutations}

import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarOpen: false,
    pages: [
      {
        name: 'Dashboard',
      },
      {
        name: 'Products',
      },
      {
        name: 'Analytics',
      },
      {
        name: 'Settings',
      }
    ]
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    CLOSE_SIDEBAR(state) {
      state.sidebarOpen = true
    },
    
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSidebar({ commit }) {
      commit('CLOSE_SIDEBAR')
    }
  },
  getters: {
    
  }
})
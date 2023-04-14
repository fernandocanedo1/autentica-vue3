import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      data: null
    };
  },
  getters: {
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {
    submitData({ commit }, data) {
      commit('SET_DATA', data);
    }
  },
  modules: {
  }
})

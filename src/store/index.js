import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      data: null,
      name: ''
    };
  },
  getters: {
    name: state => state.name,
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_NAME(state, name) {
      state.name = name;
    },
  },
  actions: {
    submitData({ commit }, data) {
      commit('SET_DATA', data);
    },
    submitName({ commit }, name) {
      commit('SET_NAME', name);
    }
  },
  modules: {
  }
})

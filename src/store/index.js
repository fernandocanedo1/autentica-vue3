import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state() {
    return {
      data: null,
      name: '',
      email: '',
      password: '',
      login: false
    };
  },
  getters: {
    name: state => state.name,
    password: state => state.password,
    isLoggedIn: state => state.login,
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_PASSWORD(state, password) {
      state.password = password;
    },
    SET_LOGIN(state, login) {
      state.login = login;
    },
  },
  actions: {
    submitData({ commit }, data) {
      commit('SET_DATA', data);
    },
    submitName({ commit }, name) {
      commit('SET_NAME', name);
    },
    submitLogin({ commit }, { email, password }) {
        commit('SET_EMAIL', email);
        commit('SET_PASSWORD', password);
      // if (state.email === email && state.password === password) {
        commit('SET_LOGIN', true);
        if(email == '' && password == '') {
          commit('SET_LOGIN', false);
        }
      // }
    },
  },
  plugins: [createPersistedState()], // adicionando o plugin para manter o estado persistente,
  modules: {
  }
})

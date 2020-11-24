import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, user) {
      //call API

      commit('SET_USER', user);
    }
  },
  modules: {
    movies
  },
  getters: {
    isUserAdmin: state => {
      return state.user.role === 'admin';
    }
  }
})

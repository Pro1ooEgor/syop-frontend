import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article: {
      html: 'halo'
    }
  },
  getters: {
    getArticle (state) {
      return state.article.html
    }
  },
  mutations: {
    changeArticle (state, payload) {
      state.article.html = payload
    }
  },
  actions: {

  }
})

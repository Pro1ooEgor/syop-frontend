import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { baseUrl } from './constants/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    article: {
      html: 'halo'
    },
    comment: String,
    author: {},
    error: {}
  },
  getters: {
    getArticle (state) {
      return state.article.html
    },
    getArticles (state) {
      return state.articles
    },
    getComment (state) {
      return state.comment
    },
    getAuthor (state) {
      return state.author
    },
    getError (state) {
      return state.error
    }
  },
  mutations: {
    changeArticle (state, payload) {
      state.article.html = payload
    },
    setArticles (state, payload) {
      state.articles = payload
    },
    setComment (state, payload) {
      state.comment = payload
    },
    setAuthor (state, payload) {
      state.author = payload
    },
    setError (state, payload) {
      state.author = payload
    }
  },
  actions: {
    setAuthor ({ commit }, payload) {
      axios
        .get(baseUrl + 'checkToken?token=' + payload)
        .then(response => {
          commit('setAuthor', response.data)
        })
        .catch(error => {
          commit('setError', error.response.data)
        })
    }
  }
})

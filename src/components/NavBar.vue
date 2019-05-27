<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <router-link tag="a" class="navbar-brand ml-4" to="/">Syop.ml</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <router-link
            tag="li"
            class="nav-item mx-2"
            to="/articles"
            active-class="active">
            <a class="nav-link">Articles</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item mx-2"
            to="/article/new"
            active-class="active"
            v-if="isAuthorized">
            <a class="nav-link">New Article</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item mx-2"
            to="/some"
            active-class="active">
            <a class="nav-link">Some</a>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            v-model="search"
            type="search"
            placeholder="Search"
            aria-label="Search">
          <router-link
            to="/articles">
            <button
                class="btn btn-outline-success my-2 my-sm-0 mr-5"
                type="button"
                @click="searchTitle">
                Search
              </button>
          </router-link>
        </form>
        <div v-if="isAuthorized">
          <b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">{{ author.username}}</template>
              <b-dropdown-item to="/articles">Profile</b-dropdown-item>
              <b-dropdown-item to="/" @click="singOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
        <div v-else="isAuthorized">
          <router-link
              to="/login"
              active-class="active">
            <button type="button" class="btn btn-outline-primary mx-2">Sing In</button>
          </router-link>
          <router-link
              to="/register"
              active-class="active">
            <button type="submit" class="btn btn-primary">Sing Up</button>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from './../constants/api'

export default {
  name: 'NavBar',
  data () {
    return {
      token: '',
      isAuthorized: false,
      errors: '',
      author: '',
      search: ''
    }
  },
  methods: {
    singOut () {
      axios
        .get(baseUrl + 'logout/' + this.author.id)
        .then(response => {
          console.log(response)
          console.log(response.data.token)
          this.$localStorage.remove('token')
          this.isAuthorized = false
          this.token = ''
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          this.errors = error.response.data
        })
    },
    searchTitle () {
      axios
        .get(baseUrl + 'articles/?search=' + this.search)
        .then(response => {
          if (response.data !== undefined)
          {
            console.log(response.data)
            this.$state.mutations.setArticles(response.data)
          }
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          this.errors = error.response.data
        })
    }
  },
  mounted () {
    this.token = this.$localStorage.get('token')
    if (this.token) {
      this.isAuthorized = true
      axios
        .get(baseUrl + 'checkToken?token=' + this.token)
        .then(response => {
          this.author = response.data
          this.$store.commit('setAuthor', response.data)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
          this.errors = error.response.data
        })
    }
  }
}
</script>

<style scoped>

</style>

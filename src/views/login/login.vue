<template>
  <div>
    <div class="logotype-login text-center">
      <img src="./../../img/logotype.png" alt="logotype">
    </div>
    <div class="container">
      <form
        ref="form"
        action="/articles"
        methos="GET"
      >
        <div class="form-row justify-content-center pt-3">
          <div class="col-lg-7 col-sm-9 text-center">
            <h3>Login</h3>
          </div>
          <div class="col-lg-7 col-sm-9 pt-0">
            <label>Username</label>
            <v-input
              type="text"
              placeholder="Login"
              v-model="username"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Password</label>
            <v-input
              type="password"
              placeholder="Password"
              v-model="password"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center" v-if="errors">
            <div class="pl-2" v-for="(value, key) in errors">
              <h6 class="text-danger text-uppercase">
                {{ key }}
                <div class="badge badge-danger text-wrap">Please, check the errors</div>
              </h6>
              <div>{{ value }}</div>
            </div>
          </div>
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center">
            <div id="buttonTooltip">
              <button
                ref="buttonTooltip"
                type="button"
                class="btn btn-success"
                @click="sendData"
              >
                Login
              </button>
              <b-tooltip
                target="buttonTooltip"
                placement="rightbottom"
              >
                Fill in <strong>all</strong> fields <strong>correctly</strong>
              </b-tooltip>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VInput from './../../components/input/Input'
import { baseUrl } from './../../constants/api'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      errors: ''
    }
  },
  LocalStorage: {
    token: {
      type: String
    }
  },
  methods: {
    sendData () {
      this.errors = false
      axios
        .post(baseUrl + 'login/', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response)
          console.log(response.data.token)
          this.$localStorage.set('token', response.data.token)
          if (!this.errors)
            this.$refs.form.submit()
        })
        .catch(error => {
          console.log(error)
          this.errors = error.response.data
        })
    }
  },
  components: {
    VInput
  }
}
</script>

<style scoped>

</style>

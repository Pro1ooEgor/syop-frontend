<template>
  <div>
    <div class="container">
      <form class="needs-validation" ref="form" novalidate methos="get">
        <div class="form-row justify-content-center pt-4">
          <div class="col-lg-7 col-sm-9 text-center">
            <h3>your profile, {{ getAuthor.username }}</h3>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Username</label>
            <v-input
              type="text"
              placeholder="Login"
              v-model="getAuthor.username"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Email</label>
            <v-input
              type="email"
              placeholder="Email"
              v-model="getAuthor.email"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>First name</label>
            <v-input
              type="text"
              placeholder="Enter first name"
              v-model="getAuthor.first_name"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Last name</label>
            <v-input
              type="text"
              placeholder="Enter last name"
              v-model="getAuthor.last_name"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <div>Date joined: {{displayedDate(getAuthor.date_joined)}}</div>
          </div>
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center">
            <div id="buttonTooltip">
              <button
                type="button"
                class="btn btn-success"
                @click="sendData"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import VInput from './../components/input/Input'
import { baseUrl } from './../constants/api'

export default {
  name: 'Profile',
  data () {
    return {
      author: this.$store.getters.getAuthor
    }
  },
  methods: {
    displayedDate (date) {
      moment.locale('ru')
      return moment(date).format('DD MMMM YYYY')
    },
    sendData () {
      axios
        .put(baseUrl + 'changeAccountDetails/' + this.getAuthor.id + '/', {
          username: this.getAuthor.username,
          email: this.getAuthor.email,
          first_name: this.getAuthor.first_name,
          last_name: this.getAuthor.last_name
        })
        .then(response => {
          console.log(response.data)
          this.$bvToast.toast(
            'Information saved. At any moment you can change it in your profile.',
            {
              title: `Successfully saved`,
              variant: 'success',
              toaster: 'b-toaster-bottom-left',
              solid: true,
              appendToast: true
            })
        })
        .catch(error => {
          console.log(error)
          this.$bvToast.toast(
            'Information doesn\'t saved. ' + error,
            {
              title: `Error`,
              variant: 'danger',
              toaster: 'b-toaster-bottom-left',
              solid: true,
              appendToast: true
            })
          this.errors = error.response.data
        })
    }
  },
  computed: {
    getAuthor () {
      return this.$store.getters.getAuthor
    }
  },
  components: {
    VInput
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="container">
      <form class="needs-validation" novalidate action="/articles" methos="GET">
        <div class="form-row justify-content-center pt-4">
          <div class="col-lg-7 col-sm-9 text-center">
            <h3>Register your account</h3>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Username</label>
            <v-input
                    type="text"
                    placeholder="Login"
                    :isInvalid="$v.username.$error"
                    :isValid="!$v.username.$invalid"
                    :errors="checkedErrors('username')"
                    v-model="username"
                    @blur="$v.username.$touch()"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Email</label>
            <v-input
                    type="email"
                    placeholder="Email"
                    :isInvalid="$v.email.$error"
                    :isValid="!$v.email.$invalid"
                    :errors="checkedErrors('email')"
                    v-model="email"
                    @blur="$v.email.$touch()"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Password</label>
            <v-input
                    type="password"
                    placeholder="Password"
                    :isInvalid="$v.password.$error"
                    :isValid="!$v.password.$invalid"
                    :errors="checkedErrors('password')"
                    v-model="password"
                    @blur="$v.password.$touch()"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Confirm password</label>
            <v-input
                    type="password"
                    placeholder="Confirm password"
                    :isInvalid="$v.confirmPassword.$error"
                    :isValid="!$v.confirmPassword.$invalid"
                    :errors="checkedErrors('confirmPassword')"
                    v-model="confirmPassword"
                    @blur="$v.confirmPassword.$touch()"
            ></v-input>
          </div>
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center" v-if="errors">
            <div class="pl-2" v-for="(value, key) in errors">
              <h6 class="text-danger text-uppercase">
                {{ key }}
                <div class="badge badge-danger text-wrap">Please, check the errors</div>
              </h6>
              <div v-for="val in value">{{ val }}</div>
            </div>
          </div>
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center">
            <div id="buttonTooltip">
              <button
                ref="buttonTooltip"
                type="submit"
                class="btn btn-success"
                :disabled="!isCorrectlyFilled"
                @click="sendData"
              >
                Register
              </button>
              <b-tooltip
                target="buttonTooltip"
                placement="rightbottom"
                v-if="!isCorrectlyFilled"
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { baseUrl } from './../../constants/api'

const uniqueUsername = (username) => {
  return axios
    .get(baseUrl + 'checkUsername?username=' + username)
    .then(response => {
      console.log(response)
      return !response.data.error
    })
    .catch(error => {
      console.log(error)
    })
}

const uniqueEmail = (email) => {
  return axios
    .get(baseUrl + 'checkEmail?email=' + email)
    .then(response => {
      console.log(response)
      return !response.data.error
    })
    .catch(error => {
      console.log(error)
    })
}

export default {
  name: 'register',
  mixins: [validationMixin],
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: ''
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
      uniqueUsername
    },
    email: {
      required,
      email,
      uniqueEmail
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password')
    }
  },
  methods: {
    checkedErrors (type) {
      let errors = []
      if (type === 'username') {
        this.$v.username.required ? errors : errors.push('Login field is required')
        this.$v.username.minLength ? errors : errors.push('Minimum username length is 4')
        if (this.$v.username.$model !== '')
          this.$v.username.uniqueUsername ? errors : errors.push('Account with this username exist, try another')
      }
      if (type === 'email') {
        this.$v.email.required ? errors : errors.push('Email field is required')
        this.$v.email.email ? errors : errors.push('This field should be an email')
        if (this.$v.email.$model !== '')
          this.$v.email.uniqueUsername ? errors : errors.push('Account with this email exist, try another')
      }
      if (type === 'password') {
        this.$v.password.required ? errors : errors.push('Password field is required')
        this.$v.password.minLength ? errors : errors.push('Minimum password length is 8')
      }
      if (type === 'confirmPassword') {
        this.$v.confirmPassword.required ? errors : errors.push('Confirm password field is required')
        if (this.$v.confirmPassword.$model !== '')
          this.$v.confirmPassword.sameAs ? errors : errors.push('Entered passwords don\'t match')
      }
      return errors
    },
    sendData () {
      axios
        .post(baseUrl + 'register/', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          this.errors = error.response.data
        })
    }
  },
  computed: {
    isCorrectlyFilled () {
      return !this.$v.$anyError && !this.$v.$invalid && !this.errors
    }
  },
  components: {
    VInput
  }
}
</script>

<style scoped>

</style>

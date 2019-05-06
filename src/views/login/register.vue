<template>
  <div class="container">
    <form class="needs-validation" novalidate>
      <div class="form-row justify-content-center pt-5">
        <div class="col-lg-7 col-sm-9">
          <label>Login</label>
          <v-input
              type="text"
              placeholder="Login"
              :isInvalid="$v.login.$error"
              :isValid="!$v.login.$invalid"
              :errors="checkedErrors"
              v-model="login"
              @blur="$v.login.$touch()"
          ></v-input>
        </div>
        <div class="col-lg-7 col-sm-9 pt-3">
          <label>Email</label>
          <v-input
              type="email"
              placeholder="Email"
              :isInvalid="$v.email.$error"
              :isValid="!$v.email.$invalid"
              :errors="checkedErrors"
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
              :errors="checkedErrors"
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
              :errors="checkedErrors"
              v-model="confirmPassword"
              @blur="$v.confirmPassword.$touch()"
          ></v-input>
        </div>
        <div class="col-lg-7 col-sm-9 pt-3 d-flex justify-content-center">
          <button type="submit" class="btn btn-success">Register</button>
        </div>
      </div>
      <pre>{{$v}}</pre>
    </form>
  </div>
</template>

<script>
  import VInput from './../../components/input/Input'
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: "register",
    mixins: [validationMixin],
    data() {
      return {
        login: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations: {
      login: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      confirmPassword: {
        required
      }
    },
    computed: {
      checkedErrors() {
        let errors = []
        !this.$v.login.required ? errors.push('Login field is required') : errors
        !this.$v.email.required ? errors.push('Email field is required') : errors
        !this.$v.email.email ? errors.push('This field should be an email') : errors
        !this.$v.password.required ? errors.push('Password field is required') : errors
        return errors
      }
    },
    components: {
      VInput
    }
  }
</script>

<style scoped>

</style>

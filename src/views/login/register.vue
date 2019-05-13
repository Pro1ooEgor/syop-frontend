<template>
  <div>
    <div class="container">
      <form class="needs-validation" novalidate>
        <div class="form-row justify-content-center pt-4">
          <div class="col-lg-7 col-sm-9 text-center">
            <h3>Register your account</h3>
          </div>
          <div class="col-lg-7 col-sm-9 pt-3">
            <label>Login</label>
            <v-input
                    type="text"
                    placeholder="Login"
                    :isInvalid="$v.login.$error"
                    :isValid="!$v.login.$invalid"
                    :errors="checkedErrors('login')"
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
          <div class="col-lg-7 col-sm-9 mt-4 d-flex justify-content-center">
            <div id="buttonTooltip">
              <button
                ref="buttonTooltip"
                type="submit"
                class="btn btn-success"
                :disabled="!isCorrectlyFilled"
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
        <pre>{{$v}}</pre>
      </form>
    </div>
  </div>
</template>

<script>
import VInput from './../../components/input/Input'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  mixins: [validationMixin],
  data () {
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
      if (type === 'login') {
        this.$v.login.required ? errors : errors.push('Login field is required')
      }
      if (type === 'email') {
        this.$v.email.required ? errors : errors.push('Email field is required')
        this.$v.email.email ? errors : errors.push('This field should be an email')
      }
      if (type === 'password') {
        this.$v.password.required ? errors : errors.push('Password field is required')
        this.$v.password.minLength ? errors : errors.push('Minimum password length is 8')
      }
      if (type === 'confirmPassword') {
        this.$v.password.required ? errors : errors.push('Confirm password field is required')
        this.$v.password.sameAs ? errors : errors.push('Entered passwords don\'t match')
      }
      return errors
    }
  },
  computed: {
    isCorrectlyFilled () {
      return !this.$v.$anyError && !this.$v.$invalid
    }
  },
  components: {
    VInput
  }
}
</script>

<style scoped>

</style>

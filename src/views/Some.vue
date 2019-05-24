<template>
  <div class="container-fluid">
    <h3 class="d-flex justify-content-center mt-3">Some</h3>
    <div class="row justify-content-center">
      <div class="col-8 mt-3 ql-editor" v-html="articleTextHtml"></div>
      <input type="text" @blur="inputText" v-model="testText">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Some',
  data () {
    return {
      testText: ''
    }
  },
  methods: {
    inputText () {
      console.log(this.testText)
      this.$store.commit('changeArticle', this.testText)
    }
  },
  computed: {
    articleTextHtml () {
      return this.$store.getters.getArticle
    }
  }
}
</script>

<style scoped>

</style>

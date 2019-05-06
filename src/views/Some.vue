<template>
  <div class="container-fluid">
    <h3 class="d-flex justify-content-center mt-3">Some</h3>
    <div class="row justify-content-center">
      <div class="col-8 mt-3 ql-editor" v-html="articleTextHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Some',
  computed: {
    articleTextHtml () {
      return this.$store.getters.getArticle
    }
  }
}
</script>

<style scoped>

</style>

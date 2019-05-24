<template>
  <div class="row justify-content-center">
    <div class="col-9 pt-3">
      <h2 class="title text-center">{{ title }}</h2>
      <p v-html="html" class="ql-editor"></p>
<!--      <div class="ql-editor">{{ html }}</div>-->
      <div class="row pb-4">
        <div class="col-5 text-left">{{ displayedDate }}</div>
        <div class="col text-right">{{ author.username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ArticleView',
  props: {
    title: String,
    text: String,
    html: String,
    author: Object,
    date: String
  },
  computed: {
    displayedDate () {
      moment.locale('ru')
      return moment(this.date).format('DD MMMM YYYY HH:mm')
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 1.2em;
  font-weight: 500;
}
  .ql-editor {
    font-size: 1.2em;
  }
</style>

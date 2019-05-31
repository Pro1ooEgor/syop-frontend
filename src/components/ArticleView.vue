<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8">
        <h2 class="title text-center pt-3">{{ title }}</h2>
        <p v-html="html" class="ql-editor"></p>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div class="col-8">
        <div class="row">
          <div class="col text-left">{{ displayedDate }}</div>
          <div class="col text-right">{{ author.username }}</div>
        </div>
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
  font-size: 1.4em;
  font-weight: 500;
}
  .ql-editor {
    font-size: 1.1em;
    padding-left: 0;
  }
</style>

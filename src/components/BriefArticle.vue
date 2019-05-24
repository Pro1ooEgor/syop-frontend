<template>
  <div>
    <router-link
      tag="div"
      :to="'/article/' + id"
      class="cursor-pointer">
      <h3>{{ title }}</h3>
      <p class="text">{{ text }}</p>
    </router-link>
    <div class="row">
      <div class="col-5 text-left">{{ displayedDate }}</div>
      <div class="col text-right">{{ author }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BriefArticle',
  props: {
    id: Number,
    title: String,
    text: String,
    date: String,
    author: String
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
.cursor-pointer{
  cursor: pointer;
}
  .text {
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 200px;
  }
</style>

<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <p>{{ displayedDate }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BriefArticle',
  props: {
    title: String,
    text: String,
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

</style>

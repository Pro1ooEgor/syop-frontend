<template>
  <div class="container">
    <div v-for="item in data" class="pt-3">
      <brief-article
        :title="item.title"
        :text="item.text"
        :date="item.date"
      ></brief-article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BriefArticle from './../components/BriefArticle'

export default {
  name: 'Articles',
  data () {
    return {
      data: Object,
      title: String,
      text: String,
      date: Date
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/api/articles/')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    BriefArticle
  }
}
</script>

<style scoped>

</style>

<template>
  <div >
    <article-view
      :title="data.title"
      :text="data.text"
      :html="data.html"
      :date="data.date"
      :author="data.author"
    ></article-view>
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from './../constants/api'
import articleView from './../components/ArticleView'

export default {
  name: 'ArticleView',
  data () {
    return {
      data: Object
    }
  },
  components: {
    articleView
  },
  mounted () {
    console.log(baseUrl + 'article/' + this.$route.params.id + '/')
    axios
      .get(baseUrl + 'article/' + this.$route.params.id + '/')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-for="item in checkArticles" class="row justify-content-center pt-3">
      <brief-article
        class="col-9"
        :id="item.id"
        :title="item.title"
        :text="item.text"
        :date="item.date"
        :author="item.author.username"
      ></brief-article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BriefArticle from './../components/BriefArticle'
import { baseUrl } from './../constants/api'

export default {
  name: 'Articles',
  props: {
  },
  data () {
    return {
      data: Object,
      title: String,
      text: String,
      date: Date
    }
  },
  methods: {
    getData () {
      axios
        .get(baseUrl + 'articles/')
        .then(response => {
          this.data = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    checkArticles () {
      if (this.$store.getters.getArticles.length > 0) {
        return this.$store.getters.getArticles
      } else {
        return this.data
      }
    }
  },
  destroyed () {
    this.$store.commit('setArticles', [])
  },
  components: {
    BriefArticle
  }
}
</script>

<style scoped>

</style>

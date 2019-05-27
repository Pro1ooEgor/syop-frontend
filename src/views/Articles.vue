<template>
  <div class="">
    <div v-for="item in data" class="row justify-content-center pt-3">
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
import { mapState } from 'vuex'
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
  mounted () {
    axios
      .get(baseUrl + 'articles/')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    ...mapState(['articles'])
  },
  components: {
    BriefArticle
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <article-view
      :title="data.title"
      :text="data.text"
      :html="data.html"
      :date="data.date"
      :author="data.author"
    ></article-view>
    <comment class="pt-5"></comment>
<!--    <div class="row justify-content-center">-->
<!--      <div class="col-8 pt-3 text-right">-->
<!--        <button-->
<!--          type="button"-->
<!--          style="width:140px"-->
<!--          class="btn btn-outline-success"-->
<!--          @click="sendData"-->
<!--        >-->
<!--          Save-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from './../constants/api'
import articleView from './../components/ArticleView'
import comment from './../components/comment'

export default {
  name: 'ArticleView',
  data () {
    return {
      data: Object
    }
  },
  components: {
    articleView,
    comment
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

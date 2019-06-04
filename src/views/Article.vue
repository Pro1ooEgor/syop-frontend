<template>
  <div>
    <article-view
      :title="data.title"
      :text="data.text"
      :html="data.html"
      :date="data.date"
      :author="data.author"
    ></article-view>
    <comment
      :commentText="commentText"
      ref="comment"
      class="pt-5"
      :rows="2"
      placeholder="Write your comment here ..."
    ></comment>
    <div class="row justify-content-center">
      <div class="col-8 pt-3 text-right">
        <button
          type="button"
          style="width:140px"
          class="btn btn-outline-success"
          @click="sendData"
        >
          Save
        </button>
      </div>
    </div>
    <div v-if="this.data.id" class="row justify-content-center">
      <div class="col-8">
        <div v-for="comment in comments" class="pt-3">
          <h5>{{ comment.author.username }}</h5>
          <p>{{ comment.text }}</p>
          <div>{{ displayedDate(comment.date) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { baseUrl } from './../constants/api'
import articleView from './../components/ArticleView'
import comment from './../components/comment'

export default {
  name: 'Article',
  data () {
    return {
      data: Object,
      comments: Array
    }
  },
  components: {
    articleView,
    comment
  },
  methods: {
    sendData () {
      axios
        .post(baseUrl + 'comments/' + this.data.id + '/', {
          text: this.$store.getters.getComment,
          article: this.data.id,
          author: this.$store.getters.getAuthor.id
        })
        .then(response => {
          console.log(response)
          this.$store.commit('setComment', '')
          this.commentsRequest()
        })
        .catch(error => {
          console.log(error)
        })
    },
    commentsRequest () {
      axios
        .get(baseUrl + 'comments/' + this.data.id + '/')
        .then(response => {
          console.log(response.data)
          this.comments = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    displayedDate (date) {
      moment.locale('ru')
      return moment(date).format('DD MMMM YYYY HH:mm')
    }
  },
  computed: {
    commentText () {
      if (Object.prototype.toString.call(this.$store.getters.getComment) === '[object String]') {
        return this.$store.getters.getComment
      } else {
        return ''
      }
    }
  },
  mounted () {
    console.log(baseUrl + 'article/' + this.$route.params.id + '/')
    axios
      .get(baseUrl + 'article/' + this.$route.params.id + '/')
      .then(response => {
        this.data = response.data
        this.commentsRequest()
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>

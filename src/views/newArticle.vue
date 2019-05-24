<template>
  <div>
    <div>
      <div class="row justify-content-center">
        <div class="col-9 text-center">
          <editor v-model="model" @change="onChange"></editor>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-9">
          <p v-html="model" class="article-view ql-editor"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editor from '../components/input/editor/Editor'

export default {
  name: 'newArticle',
  data () {
    return {
      model: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`
    }
  },
  methods: {
    onChange (changeObject) {
      this.$store.commit('changeArticle', changeObject.html)
    }
  },
  components: {
    editor
  }
}
</script>

<style scoped>
</style>

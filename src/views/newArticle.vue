<template>
  <div class="container-fluid">
    <div>
      <editor v-model="model" @change="onChange"></editor>
    </div>

    <p v-html="model" class="ql-editor"></p>
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

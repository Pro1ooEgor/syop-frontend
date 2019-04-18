<template>
  <div>
    <div class="container-fluid">
      <editor v-model="model"></editor>
    </div>

    <p v-html="model"></p>
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
  components: {
    editor
  }
}
</script>

<style scoped>

</style>

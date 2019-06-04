<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8">
        <b-form-textarea
          v-model="commentText"
          :placeholder="placeholder"
          :rows="rows"
          @blur="onBlur"
        ></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    commentText: String,
    placeholder: String,
    rows: Number
  },
  methods: {
    onBlur () {
      this.$store.commit('setComment', this.commentText)
    }
  }
}
</script>

<style scoped>

</style>

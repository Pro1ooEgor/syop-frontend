<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-8">
        <b-form-textarea
          id="textarea"
          v-model="commentText"
          placeholder="Write your comment here ..."
          rows="3"
        ></b-form-textarea>
      </div>
    </div>
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
export default {
  name: 'comment',
  props: {
    commentText: String
  },
  methods: {
    sendData () {

    }
  }
}
</script>

<style scoped>

</style>

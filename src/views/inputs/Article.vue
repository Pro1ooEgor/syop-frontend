<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8">
<!--          <b-form-textarea-->
<!--            id="textarea-rows"-->
<!--            placeholder="Tall textarea"-->
<!--            rows="8"-->
<!--          ></b-form-textarea>-->
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control article-textarea"
              id="exampleFormControlTextarea1"
              rows="3">
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>

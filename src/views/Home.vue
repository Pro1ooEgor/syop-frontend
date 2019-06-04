<template>
  <div>
    <div class="logotype-login text-center">
      <img src="../img/logotype.png" alt="logotype">
    </div>
    <div class="container pt-3 text-center">
      <div class="logotype-text "><b>S</b>hare <b>Y</b>our <b>OP</b>inon</div>
      <div class="pt-2">Hi, yor are at main page of site. This you can find all interesting to you information.</div>
      <div class="pt-1">In the menu on the top you can find all parts of sites.</div>
      <div class="pt-1">We nice to meet you here. <i>Feel like home.</i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .logotype-text {
    font-size: 1.8em;
  }
  .container {
    font-size: 1.2em;
  }
</style>

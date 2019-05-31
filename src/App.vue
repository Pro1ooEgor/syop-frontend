<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="mycontainer container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.mycontainer {
  padding-left: 0;
  padding-right: 0;
}
</style>

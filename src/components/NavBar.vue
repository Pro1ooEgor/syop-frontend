<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
<!--      <a class="navbar-brand" href="/">Discuss.ml</a>-->
      <router-link tag="a" class="navbar-brand ml-4" to="/">Syop.ml</router-link>
<!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <router-link
            tag="li"
            class="nav-item mx-2"
            to="/article/new"
            active-class="active">
            <a class="nav-link">Articles</a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item mx-2"
            to="/some"
            active-class="active">
            <a class="nav-link">Some</a>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button>
        </form>
        <router-link
            to="/login"
            active-class="active">
          <button type="button" class="btn btn-outline-primary mx-2">Sing In</button>
        </router-link>
        <router-link
            to="/register"
            active-class="active">
          <button type="submit" class="btn btn-primary">Sing Up</button>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>

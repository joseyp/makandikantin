<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white h-25 nav-o font-of fontc-of">
  <router-link to="/Home" class="navbar-brand"><img src="../assets/img/logo-ofood.png" class="logo-o"></router-link>
  <button class="navbar-toggler pt-3 pb-3 border-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse pt-3" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto pb-1">
      <router-link to="/Login" class="nav-item nav-link font-weight-bold">Masuk</router-link>
      <router-link to="/Register" class="nav-item nav-link font-weight-bold" >Daftar</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: 'logo.png'
    }
  }
}
</script>
<style scoped>

</style>

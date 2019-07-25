<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light nav-o">
  <router-link to="/Home" class="navbar-brand">Ofood</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <router-link to="/Login" class="nav-item nav-link">Masuk</router-link>
      <router-link to="/Register" class="nav-item nav-link" >Daftar</router-link>
    </div>
  </div>
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

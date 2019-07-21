<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light nav-o">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Ofood</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Masuk</a>
      </li>
      <li class="nav-item">
        <router-link to="/Register" class="nav-link">Daftar</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is header'
    }
  }
}
</script>

<style scoped>

</style>

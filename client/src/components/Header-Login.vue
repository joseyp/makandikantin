<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white h-25 nav-o font-of fontc-of">
  <router-link to="/Home" class="navbar-brand"><img src="../assets/img/logo-ofood.png" class="logo-o"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse pt-3" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <div>
        <form class="form-inline shadow-sm bg-white rounded border border-white">
          <input class="form-control border-0 font14-of" type="search" placeholder="Cari..." aria-label="Search">
          <button class="btn btn-light bg-white border-0" type="submit"><img src="../assets/img/i-search.svg"></button>
        </form>
      </div>
      <div>
        <button type="button" class="btn bg-white"><img src="../assets/img/i-notification.svg"></button>
      </div>
      <div class="btn-group">
        <a class=" nav-item nav-link bg-white font-weight-bold"><img class="userimg-of pr-1" src="../assets/img/kucing.jpg">Admin</a>
        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split bg-white border-0" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
          <a class="dropdown-item" href="#">Pengaturan</a>
          <a class="dropdown-item" href="#">...</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Keluar</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

</script>

<style scoped>

</style>

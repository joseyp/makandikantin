<template>
 <nav class="navbar navbar-expand-lg navbar-light nav-to font-roboto">
  <a class="navbar-brand" href="#">toEat</a>
  <button class="navbar-toggler nav-tog-to" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Beranda<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tentang</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Kontak</a>
      </li>
      <li class="nav-item">
        <button class="btn btn-outline-dark btn-to  mr-sm-2" type="submit">Daftar</button>
        <button class="btn btn-outline-dark btn-to my-2 my-sm-0" type="submit">Masuk</button>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>
     <Header-Login></Header-Login>
  <div class="bg2-of font-of">
  <div class="container">
           <div class="menu"><img src="../assets/img/pemesanan.jpg"></div>
           
  </div>
  </div>
  </div>
  </template>

<script>
export default {
  name: 'FormPesanan',
  data () {
    return {
      msg: 'This is FormPesanan'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width:1010px;
  height: 100%;
  margin:auto;
  
}
.menu>img{
text-align:center;
position:center;
width:250px;
height:230px;
margin-top:200px;
margin-left:150px;
}
</style>
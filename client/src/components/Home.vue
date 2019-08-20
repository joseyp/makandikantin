<template>
  <div>
  <div>
  <Header></Header>
 <div>
  <div class="bg2-of font-of">
    <div class="cover">
 <div class="awal">
 <form style="margin-top: 150px">
<h1>Mau Makan Apa?</h1>
<h2>Temukan kantin terdekat disekitar mu!</h2>
<div class="form-box">
<input  type="search" class="search-field Location" placeholder="Location" aria-label="Search">
<router-link to="/Form-Pesanan">
<button class="btn btn-light bg-blue border-0 fontc-5-of" type="submit"><img src="../assets/img/i-search.svg"></button>
</router-link>
        </div>
</form>
</div>
</div>
</div>
 </div>
 <div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-5 " style="color:#334D6E;font-style:bold">
      <p> A B O U T   U S</p>
      Ofood adalah sebuah platform untuk memesan makanan pada suatu tempat berbasis web.
      Setiap pengguna yang telah terdafar sebagai pelanggan dapat memesan makanan setelah mencari
      restoran dapat menginput semua detail menu makanan yang dimilikinya. Aplikasi berbasisi web
akan memudahkan pelanggan untuk mengetahui ketersediaan menu makanan pada suatu tempat makan.One of three columns
    </div>
    <div class="col-sm-5">
    <p>O U R  T E A M</p>
      <div class="container">
 <div class="row" style="color:#334D6E">
 <div class="col"><img src="../assets/img/i-name.svg">Anasya Wulandari</div>
<div class="col"><img src="../assets/img/i-name.svg">Maya Ameliasari</div>
<div class="w-100"></div>
<div class="col"><img src="../assets/img/i-name.svg">Josse</div>
<div class="col"><img src="../assets/img/i-name.svg">Sri Tangkelangi</div>
  </div>
  </div>
    </div>
    </div>
</div>
 </div>
 <div class="container-1">
  <div class="row justify-content-center">
    <div class="col-sm-3">
        <div class="input-group input-group-lg mb-3 rounded-sm">
           <div class="input-group-prepend shadow-sm">
             <span class="input-group-text bg-white border-white" id="inputGroup-sizing-small"><img src="../assets/img/i-name.svg"></span>
           </div>
           <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Nama" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
         </div>
    </div>
    <div class="col-sm-3">
     <div class="input-group input-group-lg mb-3 rounded-sm">
            <div class="input-group-prepend shadow-sm">
              <span class="input-group-text bg-white border-white" id="inputGroup-sizing-small"><img src="../assets/img/i-email.svg"></span>
            </div>
            <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
    </div>
    </div>
<div class="textarea">
<div class="input-group input-group-lg mb-3 rounded-sm">
<label for="exampleFormControlTextarea1"></label>
<textarea class="form-control border-left-0 shadow-sm border-white fontc-1-of" id="exampleFormControlTextarea1" placeholder="Pesan/Komentar" rows="5">
</textarea>
</div>
</div>
<div class="row justify-content-center">
             <div class="col-sm-2">
               <router-link to="/Landing-Restoran">
               <button type="submit" class="button">Kirim</button>
             </router-link>
             </div>
        </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is Home'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cover
{
background-image: url('~@/assets/img/bg beranda 1.svg');
background-size:100% auto;
margin-bottom:100px;
}
.awal
{
 height:100vh;
 /*background-image:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(bg beranda 2.svg);*/
 display:flex;
 justify-content: center;
 align-content: center;
 font-family: sans-serif;
}
h1{
 margin-top: 45px;
 color:#334D6E;
 font-size:64px;
 letter-spacing: 1px;
 text-align: center;
 font-family: sans-serif;
 margin-left:-325px;
 font-style:bold;
}
h2{
 margin-top: -10px;
 color:#334D6E;
 font-size: 24px;
 text-align: center;
 font-style: none;
 margin-right: 410px;
 font-family: sans-serif;
}
.search-field{
 height: 50px;
 width:850px;
 padding:0px;
 border:none;
 border-radius:10px;
 outline:none;
 margin-right:200px;
}
.location
{
 width: 200px;
}
.btn
{
 height: 50px;
 width:50px;
 background:#ffeb3b;
 border:none;
 color:#000;
 border-radius:10px;
 margin-top:-80px;
 margin-left:850px;
 background-color:#109CF1;
 }
.search-btn:hover{
 background: #ffc107;
 cursor: pointer;
}
.button {
  position:relative;
  padding:5px 30px;
  left:-200px;
  border:1px solid #53bd84;
  background-color:#109CF1;
  color:#fafafa;
  border-radius:8px;
  margin-top:-10px;
  margin-left:260px;
}
.button:hover  {
    background-color:#fafafa;
    color:#207cca;
}
.container .container-1{
  margin-top: -5px;
  background-image: url('~@/assets/img/bg beranda 3.svg');
  background-size:100% auto;
  color:#334D6E;
}
form{
  margin-top:200px;
  margin-left:350px;
}
.container-1{
 margin-top:200px;
}
.textarea{
 margin-top:20px;
 margin-left:350px;
 margin-right:350px;
}
.col>img{
 width:60px;
 height:60px;
}
p{
 color:#334D6E;
}
</style>
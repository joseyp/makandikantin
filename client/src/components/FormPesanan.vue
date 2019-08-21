<template>
  <div>
     <Header></Header>
  <div class="bg3-of font-of">
  <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-5 ">
                    <div class="menu"><img src="../assets/img/pemesanan.jpg"></div>
                </div>
                <div class="col-sm-5 ">
                    <div class="menu-1">
                        <h1> JENIS MAKANAN </h1>
                        <p> Informasi mengenai jenis makanan/minuman. Soto ayam merupakan makanan rumahan yang merupakan jenis makanan rumah yang berkuah.</p>
</div>
                        <h2>Harga :Rp. 10.000</h2>
                    <div class="col">
                        <div class="input-group input-group-lg mb-3 rounded-sm">
                          <div class="input-group-prepend shadow-sm"></div>
                            <input type="text" class="form-control border-left- shadow-sm border-white fontc-1-of" placeholder="Nomor Meja" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="qty">
                        <span class="minus">-</span>
                        <input type="number" class="count" name="qty" value="1">
                        <span class="plus">+</span>
                    </div>
                </div>
            </div>
            <div class="container-1">
                <div class="row justify-content-center">
                    <div class="col-sm-1">
                        <div class="input-group input-group-lg mb-3 rounded-sm">
                            <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kembali" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                     <div class="col-sm-1">
                        <div class="input-group input-group-lg mb-3 rounded-sm">
                             <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-0-of" placeholder="Selanjutnya" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
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
  margin:auto;}
.menu{
.bg3 of{
    background-color: #F9FAFB;
    height: 600px;
}
width:250px;
height:230px;
margin-top:250px;
margin-left:80px;
}
.menu-1{
 text-align: justify;
 font-family: roboto;
 margin-top:240px;
 margin-left:-10px;
}
h1{
    font-size:35px;
}
h2{
    text-align:justify;
    margin-left:-10px;
    font-size:16px;
    color:blue;
    margin-top:-15px;
}
.qty{
    margin-top:530px;
    text-align:center;
    margin-left:-50px;
    display:inline-block;
}
.count {
    color: 109CF1;
    display: inline-block;
    vertical-align: top;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    padding: 0 2px
    ;min-width: 35px;
    text-align: center;}
.plus {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    color: white;
    width: 40px;
    height: 40px;
    font: 30px/1 Arial,sans-serif;
    text-align: center;
    border-radius: 50%;
    background-color:#109CF1;
    }
.minus {
cursor: pointer;
    display: inline-block;
    vertical-align: top;
    color: white;
    width: 40px;
    height: 40px;
    font: 30px/1 Arial,sans-serif;
    text-align: center;
    border-radius: 50%;
    background-clip: padding-box;
    background-color:#109CF1;
}
div {
    text-align: center;
}
.minus:hover{
    background-color: #717fe0 !important;
}
.plus:hover{
    background-color: #717fe0 !important;
}
/*Prevent text selection*/
span{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
input{
border: 0;
width: 2%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input:disabled{
    background-color:white;
}
.form-control{
    margin-top:500px;
    color:black;
}
.col{
    margin-top:-500px;
    margin-left:-20px;
width:120%;
    height:30px;
}
.container-1
{
margin-top:-490px;
margin-right:-400px;
}
.form-control{
     font-size:11px;
}
</style>

<template>
  <div>
    <Header></Header>
  <div class="bg-of bg-loginregist-of font-of">
    <div class="row justify-content-center">
      <p class="font-weight-bold fonttitle-lr-of">Login</p>
     </div>
    <!-- <div  class="box-loginregist-of"> -->
     <div class="row justify-content-center">
        <div class="col-4">
          <div class="input-group input-group-lg mb-3 rounded-sm">
            <div class="input-group-prepend shadow-sm">
              <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
            </div>
            <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-lock.svg"></span>
             </div>
             <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
           </div>
         </div>
       </div>
       <div class="row justify-content-center">
            <div>
              <div class="form-group form-check">
                <label class="form-check-label">Belum punya akun?<router-link to="/Register" class="text-info" href="@"> Buat akun</router-link></label>
              </div>
            </div>
            <div class="col-2">
              <p class="text-right text-info">Lupa kata sandi?</p>
            </div>
        </div>
        <div class="row justify-content-center">
          <div>
              <router-link to="/Landing-Admin">
            <button type="submit" class="btn btn-primary shadow-lg btn-lr-of">Masuk</button>
          </router-link>
          </div>
        </div>
      <!-- </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'This is login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

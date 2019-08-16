<template>
  <div>
    <Header></Header>
  <div class="bg-of bg-loginregist-of font-of">
    <div class="row justify-content-center">
      <p class="font-weight-bold fonttitle-lr-of">Daftar</p>
     </div>
    <!-- <div  class="fontc-of"> -->
    <form action="?" @submit.prevent="handleRegister">
    <div class="row justify-content-center">
       <div class="col-4">
         <div class="input-group input-group-lg mb-3 rounded-sm">
           <div class="input-group-prepend shadow-sm">
             <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-name.svg"></span>
           </div>
           <input v-model="name" id="name" type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Nama" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
         </div>
       </div>
     </div>
     <div class="row justify-content-center">
        <div class="col-4">
          <div class="input-group input-group-lg mb-3 rounded-sm">
            <div class="input-group-prepend shadow-sm">
              <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
            </div>
            <input v-model="email" id="email" autocomplete="username" type="email" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
      </div>
       <div class="row justify-content-center">
          <div class="col-4">
            <div class="input-group input-group-lg mb-3 rounded-sm">
              <div class="input-group-prepend shadow-sm">
                <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-lock.svg"></span>
              </div>
              <input v-model=" password" name="password" id="password" type="password" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          </div>
        </div>
        <!-- <div class="row justify-content-center">
           <div class="col-4">
             <div class="input-group input-group-lg mb-3 rounded-sm">
               <div class="input-group-prepend shadow-sm">
                 <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default">----</span>
               </div>
                 <select id="inputState" class="form-control border-left-0 shadow-sm border-white fontc-1-of">
                   <option selected>Pilih user</option>
                   <option>Pelangan</option>
                   <option>Restoran</option>
                 </select>
            </div>
           </div>
         </div> -->
       <div class="row justify-content-center">
            <div class="col-3">
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Setuju dengan semua<span class="text-info" href="@"> ketentuan ofood </span></label>
              </div>
              <label class="form-check-label" for="exampleCheck1">Punya restoran?<router-link to="/Register-Restaurant" class="text-info" href="@"> daftar disini.</router-link></label>
            </div>
            <div class="col-1">
              <router-link to="/Login" type="submit" class="text-right text-info">Masuk</router-link>
            </div>
        </div>
        <div class="row justify-content-center">
             <div>
               <router-link to="/Landing-Restoran">
               <button type="submit" class="btn btn-primary shadow-lg btn-lr-of">Daftar</button>
             </router-link>
             </div>
        </div>
      </form>
      <!-- </div> -->
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'aaya',
      email: 'maya@gmail.com',
      password: 'maya'
    }
  }
}
</script>

<style scoped>
</style>

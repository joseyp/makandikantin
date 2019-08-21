<template>
  <div>
    <Header></Header>
  <div class="pt-5 mb-5 bg2-of font-of">
    <div class="mt-4 pt-5 pb-3 col-8 bg-white border-white shadow-lg rounded-sm pd1-of">
      <div class="row justify-content-center">
        <img class="rounded-circle" src="../assets/img/pf.png">
       </div>
      <!-- <div  class="fontc-of"> -->
      <form v-on:submit.prevent="edit" class="pb-5">
      <div class="row justify-content-center">
         <div class="col-8">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white"><img src="../assets/img/i-name.svg"></span>
             </div>
             <input v-model="name" id="name" type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Nama" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
           </div>
         </div>
       </div>
       <div class="row justify-content-center">
          <div class="col-8">
            <div class="input-group input-group-lg mb-3 rounded-sm">
              <div class="input-group-prepend shadow-sm">
                <span class="input-group-text bg-white border-white"><img src="../assets/img/i-email.svg"></span>
              </div>
              <input v-model="email" autocomplete="username" type="email" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          </div>
        </div>
         <div class="row justify-content-center">
            <div class="col-8">
              <div class="input-group input-group-lg mb-3 rounded-sm">
                <div class="input-group-prepend shadow-sm">
                  <span class="input-group-text bg-white border-white"><img src="../assets/img/i-lock.svg"></span>
                </div>
                <input v-model=" password" name="password" type="password" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
              </div>
            </div>
          </div>
          <div class="row justify-content-center pb-4">
               <div>
                 <router-link to="/Landing-Restoran">
                 <button type="submit" class="btn btn-primary shadow-lg btn-lr-of">Edit Profile</button>
               </router-link>
               </div>
          </div>
        </form>
      <!-- </div> -->
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
// import axios from 'axios'
// import router from '../router'

export default {
  data () {
    return {
      name: 'Admin',
      email: 'adminASD@gmail.com',
      password: 'admin2019'
    }
  }
}
</script>

<style scoped>
</style>

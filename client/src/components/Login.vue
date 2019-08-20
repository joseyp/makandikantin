<template>
  <div>
    <Header></Header>
  <div class="bg-of bg-loginregist-of font-of">
    <form v-on:submit.prevent="login">
      <div class="row justify-content-center">
        <p class="font-weight-bold fonttitle-lr-of">Masuk</p>
      </div>
    <!-- <div  class="box-loginregist-of"> -->
       <div class="row justify-content-center">
          <div class="col-4">
            <div class="input-group input-group-lg mb-3 rounded-sm">
              <div class="input-group-prepend shadow-sm">
                <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
              </div>
              <input type="email" v-model="email" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
           <div class="col-4">
             <div class="input-group input-group-lg mb-3 rounded-sm">
               <div class="input-group-prepend shadow-sm">
                 <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-lock.svg"></span>
               </div>
               <input type="password" v-model="password" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
             </div>
           </div>
         </div>
         <div class="row justify-content-center">
              <div>
                <div class="form-group form-check">
                  <label class="form-check-label">Belum punya akun?<router-link to="/Register-Customer" class="text-info" href="@"> Buat akun</router-link></label>
                </div>
              </div>
              <div class="col-2">
                <p class="text-right text-info">Lupa kata sandi?</p>
              </div>
          </div>
          <div class="row justify-content-center">
            <div>
                <!-- <router-link to="/Landing-Admin"> -->
              <button type="submit" class="btn btn-primary shadow-lg btn-lr-of">Masuk</button>
            <!-- </router-link> -->
            </div>
          </div>
      <!-- </div> -->
      </form>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      axios.post('/users/login',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        localStorage.setItem('usertoken', res.data)
        this.email = ''
        this.password = ''
        router.push({ name: 'Profile' })
      }).catch((err) => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod () {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>

<style scoped>
</style>

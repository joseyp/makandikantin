<template>
  <div>
    <Header></Header>
  <div class="bg-of bg-loginregist-of font-of">
    <div class="row justify-content-center">
      <p class="font-weight-bold fonttitle-lr-of">Daftar Restoran</p>
     </div>
    <!-- <div  class="fontc-of"> -->
    <div class="row justify-content-center">
       <div class="col-4">
         <div class="input-group input-group-lg mb-3 rounded-sm">
           <div class="input-group-prepend shadow-sm">
             <span class="input-group-text bg-white border-white"><img src="../assets/img/i-name.svg"></span>
           </div>
           <input type="text" v-model="name" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Nama Restoran" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
         </div>
       </div>
     </div>
     <div class="row justify-content-center">
        <div class="col-4">
          <div class="input-group input-group-lg mb-3 rounded-sm">
            <div class="input-group-prepend shadow-sm">
              <span class="input-group-text bg-white border-white"><img src="../assets/img/i-email.svg"></span>
            </div>
            <input type="email" v-model="email" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white"><img src="../assets/img/i-address.svg"></span>
             </div>
             <textarea v-model="address" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" placeholder="Alamat" rows="3"></textarea>
          </div>
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white"><img src="../assets/img/i-desc.svg"></span>
             </div>
             <textarea v-model="description" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" placeholder="Deskripsi" id="taDeskripsi" rows="3"></textarea>
          </div>
         </div>
      </div>
       <div class="row justify-content-center">
          <div class="col-4">
            <div class="input-group input-group-lg mb-3 rounded-sm">
                <div class="input-group-prepend input-group-lg shadow-sm">
                  <span class="input-group-text  bg-white border-white" id="inputGroupFileAddon01"><img src="../assets/img/i-foto.svg"></span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                  <label class="custom-file-label form-control form-control-lg shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01">Choose file</label>
                </div>
           </div>
          </div>
        </div>
       <div class="row justify-content-center">
          <div class="col-4">
            <div class="input-group input-group-lg mb-3 rounded-sm">
              <div class="input-group-prepend shadow-sm">
                <span class="input-group-text bg-white border-white"><img src="../assets/img/i-lock.svg"></span>
              </div>
              <input type="password" v-model="password" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          </div>
        </div>
       <div class="row justify-content-center">
            <div class="col-3">
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Setuju dengan semua<span class="text-info" href="@"> ketentuan ofood </span></label>
              </div>
            </div>
            <div class="col-1">
              <router-link to="/Login" class="text-right text-info">Masuk</router-link>
            </div>
        </div>
        <div class="row justify-content-center">
          <div>
            <button type="submit" class="btn btn-primary shadow-lg btn-lr-of" data-toggle="modal" data-target="#exampleModalLong">Daftar</button>
          </div>
        </div>
      <!-- </div> -->

        <!-- Modal resgistrasi success start-->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog shadow-sm border-white" role="document">
            <div class="modal-content pt-3 pb-4">
              <div class="modal-header border-white">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img class="icon-1-of" src="../assets/img/i-checked.svg">
                <span><p class="font-weight-bold fontc-8-of">Success!</p>
                <p class="fontc-9-of">Your Account has been created.</p> </span>
              </div>
              <div>
                <router-link to="/Landing-Restoran">
                  <button type="button" class="btn btn-success border-0 btns-2-of">Continue</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal resgistrasi success start end-->

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
      name: '',
      email: '',
      address: '',
      description: '',
      foto: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

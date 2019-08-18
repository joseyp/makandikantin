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
             <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-name.svg"></span>
           </div>
           <input type="text" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Nama Restoran" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
         </div>
       </div>
     </div>
     <div class="row justify-content-center">
        <div class="col-4">
          <div class="input-group input-group-lg mb-3 rounded-sm">
            <div class="input-group-prepend shadow-sm">
              <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
            </div>
            <input type="email" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
             </div>
             <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" placeholder="Alamat" id="taDeskripsi" rows="3"></textarea>
          </div>
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group-prepend shadow-sm">
               <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-email.svg"></span>
             </div>
             <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" placeholder="Deskripsi" id="taDeskripsi" rows="3"></textarea>
          </div>
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-4">
           <div class="input-group input-group-lg mb-3 rounded-sm">
             <div class="input-group mb-3">
               <div class="custom-file">
                 <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                 <label class="custom-file-label form-control form-control-lg shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01">Foto Profil</label>
               </div>
             </div>
          </div>
         </div>
       </div>
       <div class="row justify-content-center">
          <div class="col-4">
            <div class="input-group input-group-lg mb-3 rounded-sm">
              <div class="input-group-prepend shadow-sm">
                <span class="input-group-text bg-white border-white" id="inputGroup-sizing-default"><img src="../assets/img/i-lock.svg"></span>
              </div>
              <input type="password" class="form-control border-left-0 shadow-sm border-white fontc-1-of" placeholder="Kata Sandi" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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
               <router-link to="/Landing-Restoran">
               <button type="submit" class="btn btn-primary shadow-lg btn-lr-of">Daftar</button>
             </router-link>
             </div>
        </div>
      <!-- </div> -->
  </div>
  <Footer></Footer>
</div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

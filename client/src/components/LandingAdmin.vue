<template>
  <div>
    <HeaderLogin></HeaderLogin>
  <div class="bg2-of font-of">
    <div class="row">
      <!-- sidebar start -->
      <div class="col-2 pt-5 bg-white shadow-sm p-3 mb-5 bg-white rounded sidebar-of">
        <div class="nav flex-column fontc-1-of" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="pb-2 pl-3 fontc-2-of">USER MANAGEMENT</a>
          <a class="nav-link text-muted" id="v-pills-home-tab" data-toggle="pill" href="#beranda" role="tab" aria-controls="v-pills-home" aria-selected="true">Beranda</a>
          <a class="nav-link text-muted" id="v-pills-profile-tab" data-toggle="pill" href="#restoran" role="tab" aria-controls="v-pills-profile" aria-selected="false">Restoran</a>
          <a class="nav-link text-muted" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Pelanggan</a>
          <a class="nav-link text-muted" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Notifikasi</a>
        </div>
      </div>
      <!-- sidebar end -->

      <!-- content start jangan lupa nanti uba jadi col9 atas col3-->
      <div class="col-10 pt-5">
        <div class="tab-content pt-3" id="v-pills-tabContent">
          <!-- home admin start -->
          <div class="tab-pane fade show active" id="beranda" role="tabpanel" aria-labelledby="v-pills-home-tab">Beranda
          </div>
          <!-- home admin start -->

          <!-- dasboard restoran start -->
          <div class="tab-pane fade" id="restoran" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div class="container">
              <div class="row fontc-of">
                <div class="col-sm font-weight-bold fontt-landing-of ">
                  Restoran
                </div>
                <div class="col-sm">
                  <!-- button delete restoran start -->
                  <div class="btn-group mr-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light rounded-lg bg-white btn-border-of fontc-1-of btns-1-of" data-toggle="modal" data-target="#modalHapus"><img src="../assets/img/i-delete.svg">  Hapus</button>
                    <!-- Modal delete-->
                    <div class="modal fade" id="modalHapus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header pb-3 ">
                            <h5 class="modal-title font-weight-bold fontc-4-of" id="exampleModalLabel">Hapus</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body font14-of fontc-3-of">
                            Hapus data restoran yang dipilih?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary font14-of" data-dismiss="modal">Kembali</button>
                            <button type="button" class="btn btn-primary font14-of">Hapus</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- button delete restoran end -->
                  <!-- button edit restoran start -->
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light rounded-lg bg-white btn-border-of fontc-1-of btns-1-of" data-toggle="modal" data-target="#modalUbah"><img src="../assets/img/i-edit.svg">  Ubah</button>
                    <!-- modal delete restoran-->
                    <div class="modal fade" id="modalUbah" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title font-weight-bold fontc-4-of" id="exampleModalLabel">Ubah</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body font14-of fontc-3-of">
                            <form>
                              <div class="form-group">
                                <label>Nama Restoran</label>
                                <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of">
                              </div>
                              <div class="form-group">
                                <label for="txEmail">Email</label>
                                <input type="email" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txEmail">
                              </div>
                              <div class="form-group">
                                <label>No. Telepon</label>
                                <input class="form-control form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of">
                              </div>
                              <div class="form-group">
                                <label for="taAlamat">Alamat</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="taAlamat" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label for="taDeskripsi">Deskripsi</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="taDeskripsi" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label>Foto Profil</label>
                                <div class="input-group mb-3">
                                  <div class="custom-file">
                                    <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01"></label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="txPassword">Password</label>
                                <input type="password" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txPassword">
                              </div>
                              <div class="form-group">
                                <label for="txPassword2">Ulangi Password</label>
                                <input type="password" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txPassword2">
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary font14-of" data-dismiss="modal">Kembali</button>
                            <button type="button" class="btn btn-primary font14-of">Ubah</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- button edit restoran end -->
                  <!-- button add restoran start -->
                  <div class="btn-group rounded-lg pl-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary shadow-sm border-primary text-white font14-of" data-toggle="modal" data-target="#modalTambah"><img src="../assets/img/i-add.svg">  Tambah Restoran</button>
                    <!-- modal add restoran-->
                    <div class="modal fade" id="modalTambah" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title font-weight-bold fontc-4-of" id="exampleModalLabel">Tambah Restoran</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body font14-of fontc-3-of">
                            <form>
                              <div class="form-group">
                                <label>Nama Restoran</label>
                                <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of">
                              </div>
                              <div class="form-group">
                                <label for="txEmail">Email</label>
                                <input type="email" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txEmail">
                              </div>
                              <div class="form-group">
                                <label>No. Telepon</label>
                                <input class="form-control form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of">
                              </div>
                              <div class="form-group">
                                <label for="taAlamat">Alamat</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="taAlamat" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label for="taDeskripsi">Deskripsi</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="taDeskripsi" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label>Foto Profil</label>
                                <div class="input-group mb-3">
                                  <div class="custom-file">
                                    <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01"></label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="txPassword">Password</label>
                                <input type="password" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txPassword">
                              </div>
                              <div class="form-group">
                                <label for="txPassword2">Ulangi Password</label>
                                <input type="password" class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of" id="txPassword2">
                              </div>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Setuju dengan semua<span class="text-info" href="@"> ketentuan ofood </span></label>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary font14-of" data-dismiss="modal">Kembali</button>
                            <button type="button" class="btn btn-primary font14-of">Ubah</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- button add restoran end -->

                </div>
              </div>
            </div>
            <div class="table-responsive shadow bg-white rounded table-of font14-of">
              <table class="table table-hover">
                <thead class="fontc-4-of">
                   <tr>
                     <th scope="col">#</th>
                     <th scope="col">Nama Restoran</th>
                     <th scope="col">Email</th>
                     <th scope="col">Alamat</th>
                     <th scope="col">Details</th>
                     <th scope="col"> </th>
                   </tr>
                 </thead>
                 <tbody class="fontc-3-of">
                   <tr>
                     <th scope="row">1</th>
                     <td>Lorem Ipsum</td>
                     <td>loremipsum@gmail.com</td>
                     <td>Lorem ipsum dolor sitamet</td>
                     <td>Lihat</td>
                     <td>
                       <div class="form-check">
                         <input class="form-check-input position-static cb-of" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Lorem Ipsum</td>
                     <td>loremipsum@gmail.com</td>
                     <td>Lorem ipsum dolor sitamet</td>
                     <td>Lihat</td>
                     <td>
                       <div class="form-check">
                         <input class="form-check-input position-static cb-of" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Lorem Ipsum</td>
                     <td>loremipsum@gmail.com</td>
                     <td>Lorem ipsum dolor sitamet</td>
                     <td>Lihat</td>
                     <td>
                       <div class="form-check">
                         <input class="form-check-input position-static cb-of" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                       </div>
                     </td>
                   </tr>
                 </tbody>
              </table>
            </div>
          </div>
          <!-- dasboard restoran end -->

          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>
      <!-- content end -->
    </div>
  </div>
</div>
</template>

<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

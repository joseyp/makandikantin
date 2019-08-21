<template>
  <div>
    <Header></Header>
  <div class="bg2-of font-of">
    <div class="row">
      <!-- sidebar start -->
      <div class="col-2 pt-5 bg-white shadow-sm p-3 mb-5 bg-white rounded sidebar-of">
        <div class="nav flex-column fontc-1-of" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="pb-2 pl-3 fontc-2-of">USER MANAGEMENT</a>
          <a><button type="button" class="btn btn-primary rounded-lg shadow-sm border-primary text-white font14-of" data-toggle="modal" data-target="#modalTambah"><img src="../assets/img/i-add.svg">  Tambah</button></a>
          <a class="nav-link text-muted" id="v-pills-home-tab" data-toggle="pill" href="#beranda" role="tab" aria-controls="v-pills-home" aria-selected="true">Beranda</a>
          <a class="nav-link text-muted" id="v-pills-profile-tab" data-toggle="pill" href="#restoran" role="tab" aria-controls="v-pills-profile" aria-selected="false">Menu</a>
          <a class="nav-link text-muted" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Notifikasi</a>
          <!-- <a class="nav-link text-muted" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">History</a> -->
        </div>
      </div>
      <!-- sidebar end -->

      <!-- content start jangan lupa nanti uba jadi col9 atas col3-->
      <div class="col-10 pt-5">
        <div class="tab-content pt-3" id="v-pills-tabContent">
          <!-- home admin start -->
          <div class="tab-pane fade show active" id="beranda" role="tabpanel" aria-labelledby="v-pills-home-tab">
            Selamat datang nama restoran
          </div>
          <!-- home admin start -->

          <!-- dasboard restoran start -->
          <div class="tab-pane fade" id="restoran" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div class="container">
              <div class="row fontc-of">
                <div class="col-sm font-weight-bold fontt-landing-of ">
                  Menu
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
                          <div class="modal-body font14-of fontc-1-of">
                            Hapus data menu yang dipilih?
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
                            <h5 class="modal-title font-weight-bold fontc-4-of" id="exampleModalLabel">Ubah Menu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body font14-of">
                            <form class="fontc-1-of">
                              <div class="form-group">
                                <label>Nama Menu</label>
                                <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of">
                              </div>
                              <div class="form-row">
                                <div class="col-7">
                                <label for="taDeskripsi">Harga</label>
                                  <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                                </div>
                                <div class="col-5">
                                  <label for="taDeskripsi">Stok</label>
                                  <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                                </div>
                              </div>
                              <div class="form-group pt-3">
                                <label for="taDeskripsi">Deskripsi</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" id="taDeskripsi" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label>Tambahkan Gambar</label>
                                <div class="input-group mb-3">
                                  <div class="custom-file">
                                    <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01"></label>
                                  </div>
                                </div>
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
                    <button type="button" class="btn btn-primary rounded-lg shadow-sm border-primary text-white font14-of" data-toggle="modal" data-target="#modalTambah"><img src="../assets/img/i-add.svg">  Tambah Menu</button>
                    <!-- modal add restoran-->
                    <div class="modal fade" id="modalTambah" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title font-weight-bold fontc-4-of" id="exampleModalLabel">Tambah Menu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body font14-of">
                            <form class="fontc-1-of">
                              <div class="form-group">
                                <label>Nama Menu</label>
                                <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of">
                              </div>
                              <div class="form-row">
                                <div class="col-7">
                                <label for="taDeskripsi">Harga</label>
                                  <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                                </div>
                                <div class="col-5">
                                  <label for="taDeskripsi">Stok</label>
                                  <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                                </div>
                              </div>
                              <div class="form-group pt-3">
                                <label for="taDeskripsi">Deskripsi</label>
                                <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of" id="taDeskripsi" rows="3"></textarea>
                              </div>
                              <div class="form-group">
                                <label>Tambahkan Gambar</label>
                                <div class="input-group mb-3">
                                  <div class="custom-file">
                                    <input type="file" class="custom-file-input font14-of" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label shadow-sm p-3 bg-white rounded border-0" for="inputGroupFile01"></label>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary font14-of" data-dismiss="modal">Kembali</button>
                            <button type="button" class="btn btn-primary font14-of">Tambah</button>
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
                     <th scope="col">Nama Menu</th>
                     <th scope="col">Harga</th>
                     <th scope="col">Stok</th>
                     <th scope="col">Rincian</th>
                     <th scope="col"> </th>
                   </tr>
                 </thead>
                 <tbody class="fontc-3-of">
                   <tr>
                     <th scope="row">1</th>
                     <td>Lorem Ipsum</td>
                     <td>Rp.10000</td>
                     <td>12</td>
                     <td><a class="text-info" data-toggle="modal" data-target="#modalLihat">Lihat</a></td>
                     <td>
                       <div class="form-check">
                         <input class="form-check-input position-static cb-of" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <th scope="row">1</th>
                     <td>Lorem Ipsum</td>
                     <td>Rp.10000</td>
                     <td>1</td>
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
                     <td>Rp.10000</td>
                     <td>1</td>
                     <td>Lihat</td>
                     <td>
                       <div class="form-check">
                         <input class="form-check-input position-static cb-of" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                       </div>
                     </td>
                   </tr>
                 </tbody>
              </table>
              <!-- modal lihat data start -->
              <div class="modal fade" id="modalLihat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header d-lihat  justify-content-center">
                      <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">Lihat Menu</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form class="fontc-1-of">
                        <div class="form-group">
                          <img src="../assets/img/pf.png" class="rounded mx-auto d-block">
                          <label class="d-flex justify-content-center fontc-5-of">Nama Menu</label>
                        </div>
                        <div class="form-row">
                          <div class="col-4">
                          <label for="taDeskripsi">Stok</label>
                            <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                          </div>
                          <div class="col-8">
                          <label for="taDeskripsi">Harga</label>
                            <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                          </div>
                        </div>
                        <div class="form-group pt-3">
                          <label for="taDeskripsi">Deskripsi</label>
                          <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " id="taDeskripsi" rows="3"></textarea>
                        </div>
                        <div class="form-row">
                          <div class="col-4">
                          <label for="taDeskripsi">Jumlah Terjual</label>
                            <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                          </div>
                          <div class="col-8">
                          <label for="taDeskripsi">Pendapatan</label>
                            <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
                      <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- modal lihat data end -->
            </div>
          </div>
          <!-- dasboard restoran end -->

          <!-- dasboard notifikasi start -->
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <div class="container">
              <div class="row fontc-of">
                <div class="col-sm font-weight-bold fontt-landing-of ">
                  Notifikasi
                </div>
              </div>
              <div class="row">
                <div class="col-11 pt-3 bg-white border-bottom-0 border-top-0 shadow-sm">
                  <div class="col-12">
                    <div class=" alert-of alert shadow-sm bg-white rounded border border-white font14-of" role="alert">
                      <a class="row">
                        <div class="col-10">
                          <img class="userimg-of pr-1" src="../assets/img/kucing.jpg">
                          <span>Nama Pelanggan</span><span>, </span><span class="fontc-3-of">mengirim pesanan kepada anda, </span>
                          <span class="fontc-3-of">13.02 WIB</span>
                        </div>
                        <div class="btn-group col-2 rounded-lg pl-3 " role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-primary rounded-lg shadow-sm border-primary text-white font14-of" data-toggle="modal" data-target="#modalTampil">Tampilkan</button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-11 pt-3 bg-white border-bottom-0 border-top-0 shadow-sm">
                  <div class="col-12">
                    <div class=" alert-of alert shadow-sm bg-white rounded border border-white font14-of" role="alert">
                      <a class="row">
                        <div class="col-10">
                          <img class="userimg-of pr-1" src="../assets/img/kucing.jpg">
                          <span>Nama Pelanggan</span><span>, </span><span class="fontc-3-of">mengirim pesanan kepada anda, </span>
                          <span class="fontc-3-of">15.32 WIB</span>
                        </div>
                        <div class="btn-group col-2 rounded-lg pl-3 " role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-primary rounded-lg shadow-sm border-primary text-white font14-of" data-toggle="modal" data-target="#modalTampil">Tampilkan</button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal tampilkan start -->
            <div class="modal fade" id="modalTampil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header d-lihat  justify-content-center">
                    <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">Lihat Pesanan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="fontc-1-of">
                      <div class="form-group">
                        <label>Nama Menu</label>
                        <input class="form-control form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                      </div>
                      <div class="form-row">
                        <div class="col-7">
                        <label for="taDeskripsi">Harga</label>
                          <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                        </div>
                        <div class="col-3">
                          <label for="taDeskripsi">Jumlah</label>
                          <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                        </div>
                        <div class="col-2">
                        <label for="taDeskripsi">No. Meja</label>
                          <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                        </div>
                      </div>
                      <div class="form-group pt-3">
                        <label for="taDeskripsi">Catatan</label>
                        <textarea class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " id="taDeskripsi" rows="3"></textarea>
                      </div>
                      <div class="form-row">
                        <div class="col-7">
                        <label for="taDeskripsi">Total Harga</label>
                          <input  class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of " >
                        </div>
                        <div class="col-5">
                          <label for="taDeskripsi">Status</label>
                          <input class="form-control form-control-lg shadow-sm p-3 bg-white rounded border border-white font14-of fontc-1-of ">
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
                    <button type="button" class="btn btn-primary">Cetak</button>
                    <button type="button" class="btn btn-info">Ubah status</button>
                    <button type="button" class="btn btn-success">Selesai</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal tampilkan data end -->

          </div>
          <!-- dasboard notifikasi end -->

          <!-- dasboard history -->
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
          </div>
          <!-- dasboard history-->

        </div>
      </div>
      <!-- content end -->
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

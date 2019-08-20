<template>
  <div>
        <HeaderLogin></HeaderLogin>

        <div class="container">
            <div class="d-flex justify-content-center">
                <p>Complete your purcase</p>
            </div>
            <div class="d-flex justify-content-center">
            <table class="shadow-lg p-3 mb-5 bg-white rounded">
               <thead>
                 <tr>
                     <th>Nama item</th>
                     <th>Jumlah</th>
                     <th>Harga</th>
                </tr>
               </thead>
                <tbody>
                 <tr>
                     <td>Soto ayam</td>
                     <td>2x</td>
                     <td>Rp. 10.000</td>
                </tr>
                <tr>
                    <td></td>
                     <td>Jumlah</td>
                     <td>Rp. 20.000</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="d-flex justify-content-center">
            <label>Pilih Methode Pembayaran</label></div>
            <div class="row d-flex justify-content-center">
                <div class="col-3">
                   <button type="button" class="shadow-sm p-3 mb-5 bg-white rounded border border-0 btn-block" >
                        <img src="../assets/img/payment-method.png">
                        <p>Cash</p>
                    </button>
                </div>
                <div class="col-3 ">
                     <button type="button" class="shadow-sm p-3 mb-5 bg-white rounded border border-0 btn-block">
                        <img src="../assets/img/online-payment.png">
                        <p>Elektronik pay</p>
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="col-6 ">
                    <div class="input-group input-group-lg mb-5 rounded-lg">
                    <div class="input-group-prepend shadow-lg"></div>
                    <input type="text" class="form-control border-left- shadow-lg border-white fontc-0-of" placeholder="Jumlah" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                </div>
            </div>
            <form>
                <div class="form-row center">
                    <div class="col-2">
                        <button type="submit" class="btn btn-light shadow-lg bg-white rounded">Kembali</button>
                    </div>
                    <div class="col-1">
                        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Konfirmasi</button>
                    </div>
                </div>
            </form>
            <!-- The Modal -->
            <div class="modal" id="myModal">
                 <div class="modal-dialog">
                 <div class="modal-content">
          <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                 <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
         <!-- Modal body -->
             <div class="modal-body">
                 Modal body..
            </div>
        <!-- Modal footer -->
             <div class="modal-footer">
                 <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
             </div>
            </div>
            </div>
        </div>
     </div>
    </div>
</template>
<script>
export default {
  name: 'Pembayaran',
  data () {
    return {
      msg: 'This is Pembayaran'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    height: 100%;
    margin:auto;
    }
table {
  width: 50%;
}
th, td {
  text-align: center;
  padding: 8px;
}
tr:nth-child(even){background-color: white}
th {
  background-color: #109CF1;
  color: white;
}
label{
    margin-top:2px;
}
</style>
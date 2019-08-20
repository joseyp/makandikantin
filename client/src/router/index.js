import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import RegisterCustomer from '@/components/RegisterCustomer'
import Login from '@/components/Login'
import RegisterRestaurant from '@/components/RegisterRestaurant'
import LandingAdmin from '@/components/LandingAdmin'
import LandingRestoran from '@/components/LandingRestoran'
import FormPesanan from '@/components/FormPesanan'
<<<<<<< HEAD
import Pembayaran from '@/components/Pembayaran'
=======
>>>>>>> 204b80ab9e59ae17401a895b81da2ee6a0002a9a

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register-Customer',
      name: 'RegisterCustomer',
      component: RegisterCustomer
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register-Restaurant',
      name: 'RegisterRestaurant',
      component: RegisterRestaurant
    },
    {
      path: '/Landing-Admin',
      name: 'LandingAdmin',
      component: LandingAdmin
    },
    {
      path: '/Landing-Restoran',
      name: 'LandingAdmin',
      component: LandingRestoran
    },
    {
      path: '/Form-Pesanan',
      name: 'FormPesanan',
      component: FormPesanan
    },
    {
      path: '/Form-Pesanan',
      name: 'FormPesanan',
      component: FormPesanan
    },
    {
      path: '/Pembayaran',
      name: 'Pembayaran',
      component: Pembayaran
    }
  ]
})

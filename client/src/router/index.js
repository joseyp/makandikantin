import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import RegisterCustomer from '@/components/RegisterCustomer'
import LandingAdmin from '@/components/LandingAdmin'
import LandingRestoran from '@/components/LandingRestoran'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register-Customer',
      name: 'RegisterCustomer',
      component: RegisterCustomer
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
    }
  ]
})

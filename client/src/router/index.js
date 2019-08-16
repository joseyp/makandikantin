import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import RegisterCustomer from '@/components/RegisterCustomer'
import Login from '@/components/Login'
import RegisterRestaurant from '@/components/RegisterRestaurant'
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
    }
  ]
})

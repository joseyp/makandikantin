import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // jangan lupa import Home kalo mau coba home tapi masih error
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // }
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

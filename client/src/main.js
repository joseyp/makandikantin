// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* insert bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'

/* insert css bikinan sendiri */
import '../src/assets/style/customs.css'

/* insert font awesom */
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('Icon', Icon) /* tag 'Icon' buat kalo mau pake font awesome */
Vue.component('Header', require('./components/Header.vue').default) /* navbar yang delum login masih dijadiin default */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

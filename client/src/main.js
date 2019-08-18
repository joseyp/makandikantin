// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'
// import styles from 'styles.scss'

/* insert bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'

/* insert vuesax ---library vue.js */
import 'vuesax/dist/vuesax.css'

/* insert css js bikinan sendiri */
import '../src/assets/style/customs.css'
import '../src/assets/style/customs.js'

/* insert font awesome */
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

/* use vuesax */
Vue.use(Vuesax)

Vue.component('Header', Header) /* tag 'Header' buat manggil file header */
Vue.component('Footer', Footer) /* tag 'Footer' buat manggil file footer */
Vue.component('Icon', Icon) /* tag 'Icon' buat kalo mau pake font awesome */
/* Vue.component('Header', require('./components/Header.vue').default)  navbar yang delum login masih dijadiin default */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

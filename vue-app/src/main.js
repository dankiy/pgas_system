import 'es6-promise/auto'
import Vue from 'vue'
import 'buefy/lib/buefy.css'
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'


import App from '@/App.vue'


new Vue({
  render: h => h(App)
}).$mount('#app')

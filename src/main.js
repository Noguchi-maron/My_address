import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase'


Vue.config.productionTip = false

  
  const firebaseConfig = {
    apiKey: "AIzaSyCMejH3CZspZ88FEuWDl1_BPxfVo7KDtgU",
    authDomain: "my-address-pj-9ffeb.firebaseapp.com",
    projectId: "my-address-pj-9ffeb",
    storageBucket: "my-address-pj-9ffeb.appspot.com",
    messagingSenderId: "230378020966",
    appId: "1:230378020966:web:8e2d0deb26e7348da1cda7",
    measurementId: "G-JRSFDRC8ML"
  };

  firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')

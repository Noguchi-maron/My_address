<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu" v-show="$store.state.login_user"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-app-bar-title>
          <span>マイアドレス帳</span>
        </v-app-bar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="logout" v-if="$store.state.login_user">ログアウト</v-btn>
    </v-app-bar>
    <SideNav/>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'addresses' })
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  data: () => ({
    //
  }),
  methods: {
    
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  },
};
</script>

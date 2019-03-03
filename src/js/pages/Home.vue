<template>
  <div>
    <p>{{$store.state.welcome}}</p>
    <p v-if="isLogin == 1">Login</p>
    <p v-else>Tidak login</p>
    <div id="welcome"></div>
    <button v-on:click="login">Masuk</button>
    <button v-on:click="logout">Keluar</button>
  </div>
</template>
<script>
import AuthService from './../service/AuthService'
export default {
  async created () {
    this.isLogin = window.vueci.status
    const form = {
      payload: {
        email: 'asep@asep.com'
      }
    }
    this.login(form);
  },
  data () {
    return {
      isLogin: 0
    }
  },
  methods: {
    async login (form) {
      await AuthService.login(form).then(res => {
        const {status} = res
        if(status) {
          this.isLogin = 1
        }
      })    
    },
    async logout () {
      await AuthService.logout().then(res => {
        const {status} = res
        if(status) {
         this.isLogin = 0
        }
      })      
    }
  }
}
</script>
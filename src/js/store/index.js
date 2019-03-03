import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    BASE_URL: 'http://localhost:3000',
    welcome: 'Hello World',
    theme: 'adminlte'
  },
})

export default store
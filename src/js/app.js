require('./bootstrap');

window.Vue = require('vue');

import App from './layout/App'

import routes from './routes'

import store from './store/index'

const router = routes

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
});
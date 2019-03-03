import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
Vue.use(VueRouter)

const theme = window.vuetheme

import Home from './themes/adminlte/pages/Home'
import About from './themes/adminlte/pages/About'

const router = new VueRouter({
  mode: 'history',
  hashbang:false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true}
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { requiresAuth: true}
    },
    {
      path: '*',
      name: 'Notfound',
      component: Home,
      meta: { requiresAuth: true}
    },
  ]
})

export default router
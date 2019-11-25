import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/login.vue'
import Shop from './views/shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

" El que lo vea no raje https://music.youtube.com/watch?v=wE2GZ2Vpqjo&list=OLAK5uy_kmZlTfo8R9xSQAT-Qn5wPZQQM3DXIAEAE "

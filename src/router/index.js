import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: function () {
      return import('../views/Report.vue')
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: function () {
      return import('../views/Setting.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

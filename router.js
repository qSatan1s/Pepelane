import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index.vue'
import details from './pages/details.vue'
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home,
        name: 'Home',
      },
      {
        path: '/details',
        component: details,
        name: 'details',
        props: true,
      },
    ],
  })
}

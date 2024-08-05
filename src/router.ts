import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/about',
    component: () => import('./pages/AboutPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router

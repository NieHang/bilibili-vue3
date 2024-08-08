import { createRouter, createWebHistory } from 'vue-router'

const routes: any = []

const modules = import.meta.glob('./pages/*.vue')

Object.keys(modules).forEach((key) => {
  const module = {
    path: `/${key.split('/').pop()?.split('.')[0]}`,
    component: modules[key]
  }

  routes.push(module)
})

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router

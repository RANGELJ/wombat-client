import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageHome from '../views/PageHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/PageAuth.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

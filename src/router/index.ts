import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageHome from '../views/PageHome.vue'

export enum RouteNames {
  HOME = 'home',
  UNSUPPORTED = 'unsupportedBrowser',
  NEW_USER = 'newUser',
  NEW_USER_PATTERN = 'newUserPattern'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: PageHome,
  },
  {
    path: '/unsupportedBrowser',
    name: RouteNames.UNSUPPORTED,
    component: () => import('../views/PageUnsupportedBrowser.vue'),
  },
  {
    path: '/newUser',
    name: RouteNames.NEW_USER,
    component: () => import('../views/PageNewUser.vue'),
  },
  {
    path: '/newUserPattern',
    name: RouteNames.NEW_USER_PATTERN,
    component: () => import('../views/PageNewUserPattern.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

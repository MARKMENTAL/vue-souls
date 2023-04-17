import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ds',
      name: 'ds',
      component: () => import('../views/DarkView.vue')
    },
    {
      path: '/bb',
      name: 'bb',
      component: () => import('../views/BloodView.vue')
    },
    {
      path: '/des',
      name: 'des',
      component: () => import('../views/DemonView.vue')
    },
    {
      path: '/er',
      name: 'er',
      component: () => import('../views/EldenView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

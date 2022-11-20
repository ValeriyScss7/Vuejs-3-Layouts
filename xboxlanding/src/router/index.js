import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component : () => import('../views/XboxLandingHome.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/XboxDetails.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
  
})

export default router

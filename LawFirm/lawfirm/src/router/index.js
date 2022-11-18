import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path:'/',
      name:'landing',
      component: () => import('../views/TheLandingLaw')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

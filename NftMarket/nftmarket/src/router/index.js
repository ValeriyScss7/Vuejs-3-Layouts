import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    name:'NftMarket',
    component: () => import('../views/NftMarket')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

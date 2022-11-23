import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/views/TheMain.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/ItemCard.vue')
  },
  {
    path: '/catalog',
    component: () => import('@/views/TheCatalog.vue')
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

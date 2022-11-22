import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import ('@/views/BoorivaIndex.vue')
  },
  {
    path: '/category',
    component: () => import ('@/views/BoorivaCategory.vue')
  },
  {
    path: '/product',
    component: () => import ('@/views/BoorivaProduct.vue')
  },
  {
    path :'/contacts',
    component: () => import ('@/views/BoorivaContacts.vue')
  },
  {
    path: '/BoorivaPage',
    component: () => import ('@/views/BoorivaPage.vue')
  },
  {
    path: '/systemLoyalty',
    component: () => import ('@/views/BoorivaSystemLoyalty.vue')
  },
  
  {
    path: '/order',
    component: () => import ('@/views/BoorivaOrderMaking.vue')
  },
  {
    path: '/exchange',
    component: () => import('@/views/BoorivaExchangeAndRefund.vue')
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

import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('../views/LearnIndex.vue')
  },
  {
    path: '/catalog',
    component: () => import ('../views/LearnCatalog.vue')
  },
  {
    path:'/product',
    component: () => import('../views/LearnProduct.vue')
  },
  {
    path:'/cart',
    component: () => import('../views/LearnCart.vue')
  },
  {
    path:'/registration',
    component: () => import('../views/LearnRegistration')
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

export default router

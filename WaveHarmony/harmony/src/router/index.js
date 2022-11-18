import { createRouter, createWebHistory } from 'vue-router'




const routes = [
    {
      path: '/',
      name: 'index',
      component : () => import('../views/indexPage.vue')

    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/ThecatalogHarmony')
    },
    {
      path: '/itemCard',
      name: 'itemCard',
      component : () => import('../views/productCard')
    },
    {
      path: '/Error404',
      name: 'Error404',
      component: () => import('../views/TheError404')
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

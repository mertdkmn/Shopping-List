import mainPage from './components/mainpage.vue'
import addProd from './components/addProd.vue'
import prodList from './components/prodList.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    { path: '/', component: mainPage },
    { path: '/addProd', component: addProd },
    { path: '/prodList', component: prodList }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  export default router


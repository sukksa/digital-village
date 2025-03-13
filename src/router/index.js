// src/router/index.js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/home',
    name: 'Home',
    // redirect: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/:catchAll(.*)', // 匹配所有未定义路由
    redirect: '/home',
  },
  {
    path: '/infrastructureManagement',
    name: 'InfrastructureManagement',
    component: () => import('@/views/InfrastructureManagement/index.vue')
  }, {
    path: '/agriculturalProducts',
    name: 'AgriculturalProducts',
    component: () => import('@/views/AgriculturalProducts/index.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
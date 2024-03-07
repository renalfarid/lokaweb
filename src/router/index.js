// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/bootcamp',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/bootcamp',
        name: 'Bootcamp',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Bootcamp.vue'),
      },
    ],
  },

  {
    path: '/program',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/program',
        name: 'Program',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Program.vue'),
      },
    ],
  },

  {
    path: '/why',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/why',
        name: 'Why',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Why.vue'),
      },
    ],
  },

  {
    path: '/about',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/About.vue'),
      },
    ],
  },

  {
    path: '/enrollment',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/enrollment',
        name: 'Enroll',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Enroll.vue'),
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

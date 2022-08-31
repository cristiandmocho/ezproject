import { createRouter, createWebHistory } from 'vue-router';
import { checkAuth } from '../plugins/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      beforeEnter: checkAuth,
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      beforeEnter: checkAuth,
      component: () => import('../views/Tasks.vue'),
    },
    {
      path: '/meetings',
      name: 'meeting',
      beforeEnter: checkAuth,
      component: () => import('../views/Meeting.vue'),
    },
    {
      path: '/members',
      name: 'members',
      beforeEnter: checkAuth,
      component: () => import('../views/Members.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: checkAuth,
      component: () => import('../views/Admin.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;

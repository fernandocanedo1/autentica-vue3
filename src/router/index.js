import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import LoginView from '../views/LoginView.vue';
import WelcomeView from '../views/WelcomeView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/plano',
    name: 'plano',
    component: () => import('../views/RegistrationFirstView.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/RegistrationSecondView.vue')
  },
  {
    path: '/bem-vindo',
    name: 'bem-vindo',
    component: WelcomeView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function requireAuth(to, from, next) {
  if (!store.state.login) {
    next('/');
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    requireAuth(to, from, next);
  } else {
    next();
  }
});

export default router;

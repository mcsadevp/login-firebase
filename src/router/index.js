import { createRouter, createWebHistory } from 'vue-router';
import SingUpView from '../views/SingUpView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: SingUpView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      isAuthRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* Protección de rutas */
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.isAuthRequired)) {
    if (!store.state.loggedUser) {
      next('/'); // Redirige a la página de inicio si no hay usuario autenticado
    } else {
      next(); // Permite el acceso si el usuario está autenticado
    }
  } else {
    next(); // Permite el acceso a rutas públicas
  }
});

export default router;

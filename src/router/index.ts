import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CadastroPage from '../views/CadastroPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RecuSenhaPage from '../views/RecuSenhaPage.vue'
import DetalhesPage from '../views/DetalhesPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/recusenha',
    name: 'RecuSenha',
    component: RecuSenhaPage
  },
  {
    path: '/detalhes/:id',
    name: 'Detalhes',
    component: DetalhesPage
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

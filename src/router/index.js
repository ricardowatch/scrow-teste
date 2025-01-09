import { createRouter, createWebHistory } from 'vue-router'
import AddChannelView from '../views/AddChannelView.vue'

const routes = [
  {
    path: '/',
    redirect: '/canal/adicionar'  // Redireciona a rota raiz
  },
  {
    path: '/canal/adicionar',
    name: 'AddChannel',
    component: AddChannelView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
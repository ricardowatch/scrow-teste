import { createRouter, createWebHistory } from 'vue-router'
import CanaisView from '@/views/lineares/CanaisView.vue'

const routes = [
  {
    patch: '/', //raiz
    redirect: '/lineares/canais'
  },
  {
    path: '/lineares/canais',
    name: 'canais',
    component: CanaisView,
    meta: {
      title: 'Canais ao vivo',
      description: 'Gestão dos canais ao vivo da plataforma',
      breadcrumb: 'Canais ao vivo',
      showEmptyState: true // Mostra o estado vazio por padrão
    }
  }
  // Outras rotas aqui...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
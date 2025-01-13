import { createRouter, createWebHistory } from 'vue-router'
import CanaisView from '@/views/lineares/CanaisView.vue'
import EsportesView from '@/views/lineares/EsportesView.vue'
import ListChannel from '@/views/lineares/ListChannel.vue' // Nova importação

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/lineares',
    name: 'canais',
    component: CanaisView,
    meta: {
      title: 'Canais ao vivo',
      description: 'Gestão dos canais ao vivo da plataforma',
      showEmptyState: true
    }
  },
  {
    path: '/esportes',
    name: 'esportes',
    component: EsportesView,
    meta: {
      title: 'Esportes',
      description: 'Gestão de conteúdo esportivo',
      showEmptyState: true
    }
  },
  {
    path: '/listchannel',
    name: 'listchannel',
    component: ListChannel,
    meta: {
      title: 'Lista de Canais',
      description: 'Gestão da lista de canais da plataforma',
      showEmptyState: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

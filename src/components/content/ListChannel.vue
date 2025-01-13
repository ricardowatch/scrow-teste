<!-- ListChannel.vue -->
<template>
    <div class="list-channel bg-[#141414]"> <!-- Fundo da página cinza escuro -->
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-2xl text-white mb-2">Canais ao vivo</h1>
          <p class="text-gray-400">Gestão dos canais ao vivo da plataforma</p>
        </div>
        <div class="flex gap-4">
          <ButtonImportData @click="handleImport" />
          <ButtonAddChannel @click="handleAdd" />
        </div>
      </div>
  
      <!-- Filtros e Controles -->
      <div class="flex justify-between items-center mb-6">
        <div class="w-[400px]">
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </span>
            <input 
              type="text" 
              placeholder="Procurar canais"
              class="w-full bg-black border border-[#333] rounded-[12px] pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            >
          </div>
        </div>
        <div class="flex gap-4">
          <button class="flex items-center gap-2 bg-black border border-[#333] rounded-[12px] px-4 py-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            6 Jan 2022 - 13 Jan 2022
          </button>
          <button class="flex items-center gap-2 bg-black border border-[#333] rounded-[12px] px-4 py-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtro
          </button>
        </div>
      </div>
  
      <!-- Tabela com fundo preto -->
      <div class="bg-black rounded-[12px] border border-[#333] overflow-hidden">
        <!-- Cabeçalho da tabela -->
        <div class="flex justify-between items-center p-4 border-b border-[#333] bg-black">
          <div class="flex items-center gap-2">
            <h2 class="text-white">Canais (116)</h2>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 text-white">
              <span>Linhas</span>
              <select class="bg-black border border-[#333] rounded px-2 py-1">
                <option>10</option>
              </select>
            </div>
            <button class="text-white bg-black border border-[#333] rounded-[12px] px-4 py-2">
              Configurar colunas
            </button>
            <button class="text-white bg-black border border-[#333] rounded-[12px] p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Cabeçalho das colunas -->
        <div class="grid grid-cols-[40px_2fr_1fr_1fr_1.5fr_1fr_40px] gap-4 p-4 border-b border-[#333] text-gray-400 bg-black">
          <div class="flex items-center">
            <input type="checkbox" class="rounded border-gray-400">
          </div>
          <div class="flex items-center gap-2">
            Nome
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div>Logo</div>
          <div>ID</div>
          <div>Data de lançamento</div>
          <div>Status</div>
          <div></div>
        </div>
  
        <!-- Linhas da tabela -->
        <div v-for="channel in channels" :key="channel.id" class="grid grid-cols-[40px_2fr_1fr_1fr_1.5fr_1fr_40px] gap-4 p-4 border-b border-[#333] text-white hover:bg-[#1A1A1A] bg-black">
          <div class="flex items-center">
            <input type="checkbox" class="rounded border-gray-400">
          </div>
          <div>
            <div class="font-medium">{{ channel.name }}</div>
            <div class="text-sm text-gray-400">{{ channel.studio }}</div>
          </div>
          <div class="flex items-center">
            <img :src="channel.logo" :alt="channel.name" class="h-8">
          </div>
          <div>{{ channel.id }}</div>
          <div>{{ channel.launchDate }}</div>
          <div>
            <span :class="getStatusClass(channel.status)" class="px-3 py-1 rounded-full text-sm">
              {{ channel.status }}
            </span>
          </div>
          <div>
            <button class="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Paginação -->
        <div class="flex justify-between items-center p-4 border-t border-[#333] bg-black">
          <div class="text-gray-400">
            Página 1 de 10
          </div>
          <div class="flex gap-2">
            <button class="text-gray-400 hover:text-white p-2" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Script permanece o mesmo que você forneceu
  import ButtonImportData from '@/components/ui/ButtonImportData.vue'
  import ButtonAddChannel from '@/components/ui/ButtonAddChannel.vue'
  
  export default {
    name: 'ListChannel',
    
    components: {
      ButtonImportData,
      ButtonAddChannel
    },
  
    data() {
      return {
        channels: [
          {
            id: '123456',
            name: 'Nome canal',
            studio: 'Estúdio',
            logo: '/placeholder.png',
            launchDate: '13 Jan 2024',
            status: 'Inativo'
          },
          {
            id: '123457',
            name: 'AMC',
            studio: 'Alphaville',
            logo: '/amc-logo.png',
            launchDate: '13 Jan 2024',
            status: 'Ativo'
          },
          {
            id: '123458',
            name: 'Aparecida',
            studio: 'Alphaville',
            logo: '/aparecida-logo.png',
            launchDate: '13 Jan 2024',
            status: 'Pré-lançamento'
          },
          {
            id: '123450',
            name: 'Arte1',
            studio: 'Newco',
            logo: '/arte1-logo.png',
            launchDate: '13 Jan 2024',
            status: 'Manutenção'
          },
          {
            id: '123459',
            name: 'Bandeirantes',
            studio: 'Newco',
            logo: '/band-logo.png',
            launchDate: '13 Jan 2024',
            status: 'Descontinuado'
          },
          {
            id: '123460',
            name: 'Band News',
            studio: '',
            logo: '/bandnews-logo.png',
            launchDate: '13 Jan 2024',
            status: 'Ativo'
          }
        ]
      }
    },
  
    methods: {
      handleImport() {
        console.log('Importar dados')
      },
  
      handleAdd() {
        console.log('Adicionar canal')
      },
  
      getStatusClass(status) {
        const classes = {
          'Ativo': 'bg-green-500/20 text-green-500',
          'Inativo': 'bg-gray-500/20 text-gray-300',
          'Pré-lançamento': 'bg-yellow-500/20 text-yellow-500',
          'Manutenção': 'bg-red-500/20 text-red-500',
          'Descontinuado': 'bg-blue-500/20 text-blue-500'
        }
        return classes[status] || 'bg-gray-500/20 text-gray-300'
      }
    }
  }
  </script>
  
  <style scoped>
  .list-channel {
    padding: 24px;
    min-height: 100vh;
  }
  
  :deep() input[type="checkbox"] {
    @apply rounded border-gray-600 bg-transparent checked:bg-purple-600 checked:border-purple-600 focus:ring-0 focus:ring-offset-0;
  }
  </style>
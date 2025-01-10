<template>
 <div class="p-6">
   <!-- Header -->
   <div class="flex justify-between items-center mb-6">
     <div>
       <h1 class="text-2xl text-white">Canais ao vivo</h1>
       <p class="text-gray-400">Gestão dos canais ao vivo da plataforma</p>
     </div>
     <div class="flex gap-4">
       <button class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
         Importar dados
       </button>
       <button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors">
         + Adicionar canal
       </button>
     </div>
   </div>

   <!-- Empty State -->
   <div class="flex flex-col items-center justify-center h-[400px] text-center">
     <div class="bg-gray-800 p-4 rounded-full mb-4">
       <i class="fas fa-broadcast-tower text-2xl text-gray-400"></i>
     </div>
     <p class="text-white mb-2">Nenhum canal ainda.</p>
     <p class="text-gray-400 mb-4">Adicione um canal para aparecer aqui.</p>
     <button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors">
       Adicionar canal
     </button>
   </div>
 </div>
</template>

<script>
export default {
 name: 'CanaisView',
 data() {
   return {
     channels: []
   }
 }
}
</script>
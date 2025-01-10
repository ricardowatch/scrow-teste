<!-- components/structural/AppHeader.vue -->
<template>
  <header class=" px-6 flex items-center bg-black text-white shadow-md ">
    <!-- Botões -->
    <ButtonConteudo type="primary">Conteúdo</ButtonConteudo>

    <!-- Espaçamento flexível -->
    <div class="ml-auto flex items-center space-x-4">
      <span class="cursor-pointer hover:text-gray-400 transition">Assinaturas</span>
      <span class="cursor-pointer hover:text-gray-400 transition">🔔</span>
    </div>
  </header>
</template>

<script>
import ButtonConteudo from "../ui/ButtonConteudo.vue";

export default {
  components: {
    ButtonConteudo,
  },
};
</script>



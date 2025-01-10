<template>
  <header class="px-6 flex items-center bg-black text-white shadow-md h-16">
    <!-- Logo  -->
    <div class="pr-24">
      <img src="@/assets/images/logo_scrow_100x34.png" alt="Logo" class="w-[100px] h-[34px] " />
    </div>
    <!-- Botões à esquerda -->
    <div class="flex items-center space-x-4">
      <img
        src="@/assets/images/icons/sidebar.png"
        alt="Sidebar Icon"
        class="h-6 w-6"
      />
      <ButtonConteudo type="primary">Conteúdo</ButtonConteudo>
      <span class="cursor-pointer hover:text-gray-400 transition">Assinaturas</span>
    </div>

    <!-- Ícones e Thumbnail à direita -->
    <div class="flex items-center space-x-4 ml-auto">
      <img
        src="@/assets/images/icons/settings.png"
        alt="Settings"
        class="h-5 w-5 cursor-pointer hover:opacity-80 transition"
      />
      <img
        src="@/assets/images/icons/bell.png"
        alt="Notifications"
        class="h-5 w-5 cursor-pointer hover:opacity-80 transition"
      />
      <img
        src="@/assets/images/face-image.jpg"
        alt="User Thumbnail"
        class="h-8 w-8 rounded-full border border-gray-600"
      />
    </div>
  </header>
</template>


<script>
import ButtonConteudo from "@/components/ui/ButtonConteudo.vue";

export default {
  components: {
    ButtonConteudo,
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>




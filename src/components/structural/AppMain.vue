<!-- AppMain.vue -->
<template>
  <div class="flex-1 bg-[#121212] text-white p-6">
    <slot></slot>  <!-- Slot para receber o conteúdo dinâmico -->
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
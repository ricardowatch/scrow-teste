
<template>
    <div class="flex items-center justify-center h-full">
      <ListChannel />
    </div>
  </template>
  
  <script>
  import ListChannel from '@/components/content/ListChannel.vue';
  
  export default {
    name: 'EsportesView',
    components: {
      ListChannel
    }
  }
  </script>
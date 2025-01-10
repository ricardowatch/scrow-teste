<template>
  <div class="flex h-screen flex-col">
    <!-- Header -->
    <AppHeader class="min-h-[72px] px-6 flex items-center bg-black text-white shadow-md border-b-[1px] border-[#621741]"></AppHeader>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <AppSidebar class="w-64 bg-black text-white border-r-[1px] border-[#6b6c6d]"></AppSidebar>

      <!-- Main Content Area -->
      <AppMain class="flex-1 bg-[#121212] text-white p-6"></AppMain>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/structural/AppHeader.vue';
import AppSidebar from '@/components/structural/AppSidebar.vue';
import AppMain from '@/components/structural/AppMain.vue';

export default {
  name: 'ContentLayout',
  components: {
    AppHeader,
    AppSidebar,
    AppMain,
  },
};
</script>

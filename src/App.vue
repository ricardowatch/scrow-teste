<!-- App.vue -->
<template>
  <ContentLayout>
    <router-view></router-view>
  </ContentLayout>
</template>

<script>
import ContentLayout from 
'@/components/principal/ContentLayout.vue'

export default {
  name: 'App',
  components: {
    ContentLayout
  }
}
</script>
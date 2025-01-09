<!-- 
<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div class="bg-blue-500 text-white p-4 rounded-md">
    Projeto exemplo usando VUE e TailWind - pastas ajustadas e estrutura pronta com boas praticas !
  </div>
</template>

<script>
import HelloWorld from '../components/common/HelloWorld.vue'  // Caminho atualizado

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>
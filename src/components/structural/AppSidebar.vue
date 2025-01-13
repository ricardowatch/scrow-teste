<template>
  <div class="h-full bg-black text-white flex flex-col max-w-[312px]">
    <!-- Cabeçalho da Sidebar -->
    <nav class="flex-1">
      <ul>
        <!-- Item principal: Gestão de VOD -->
        <li class="pt-10 pb-2 pl-6 pr-8">
          <div @click="toggleVOD" class="cursor-pointer flex items-center">
            <img src="@/assets/images/icons/film.png" alt="Gestão VOD" class="h-5 w-5 mr-2" />
            <span class="text-left">Gestão de VOD</span>
            <span class="flex items-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <ul v-show="showVOD" class="pl-8">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('VOD - teste')">
              <p class="hover:text-purple-400"> VOD - teste </p>
            </li>
          </ul>
        </li>

        <!-- Item principal: Lineares -->
        <li class="pt-8 pb-2 pl-6 pr-8">
          <div @click="toggleLineares" class="cursor-pointer flex items-center">
            <img src="@/assets/images/icons/signal.png" alt="Lineares" class="h-5 w-5 mr-2" />
            <span class="text-left">Lineares</span>
            <span class="flex items-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <ul v-show="showLineares" class="pl-8">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Canais ao Vivo')">
              <p class="hover:text-purple-400"> Canais ao Vivo </p>
            </li>
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Esportes')">
              <p class="hover:text-purple-400"> Esportes </p>
            </li>
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Lista')">
              <p class="hover:text-purple-400"> Lista </p>
            </li>
          </ul>
        </li>

        <!-- Item principal: Rede -->
        <li class="pt-8 pb-2 pl-6 pr-8">
          <div @click="toggleRede" class="cursor-pointer flex items-center">
            <img src="@/assets/images/icons/globe.png" alt="Rede" class="h-5 w-5 mr-2" />
            <span class="text-left">Rede</span>
            <span class="flex items-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <ul v-show="showRede" class="pl-8">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Fornecedores')">
              <p class="hover:text-purple-400"> Fornecedores </p>
            </li>
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Parceiros')">
              <p class="hover:text-purple-400"> Parceiros </p>
            </li>
          </ul>
        </li>

        <!-- Item principal: Customização -->
        <li class="pt-8 pb-2 pl-6 pr-8">
          <div @click="toggleCustomizacao" class="cursor-pointer flex items-center">
            <img src="@/assets/images/icons/custom.png" alt="Customização" class="h-5 w-5 mr-2" />
            <span class="text-left">Customização</span>
            <span class="flex items-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <ul v-show="showCustomizacao" class="pl-8">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Configurações - teste')">
              <p class="hover:text-purple-400"> Configurações - teste </p>
            </li>
          </ul>
        </li>

        <!-- Item principal: Dashboards -->
        <li class="pt-8 pb-2 pl-6 pr-8">
          <div @click="toggleDashboards" class="cursor-pointer flex items-center">
            <img src="@/assets/images/icons/bar.png" alt="Dashboards" class="h-5 w-5 mr-2" />
            <span class="text-left">Dashboards</span>
            <span class="flex items-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <ul v-show="showDashboards" class="pl-8">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Dash - teste')">
              <p class="hover:text-purple-400"> Dash - teste </p>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Rodapé da Sidebar -->
    <div class="p-4 text-sm text-gray-500">Ajuda</div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      showVOD: false,
      showLineares: false,
      showRede: false,
      showCustomizacao: false,
      showDashboards: false,
    };
  },
  methods: {
    toggleVOD() {
      this.showVOD = !this.showVOD;
    },
    toggleLineares() {
      this.showLineares = !this.showLineares;
    },
    toggleRede() {
      this.showRede = !this.showRede;
    },
    toggleCustomizacao() {
      this.showCustomizacao = !this.showCustomizacao;
    },
    toggleDashboards() {
      this.showDashboards = !this.showDashboards;
    },
    onSubmenuClick(name) {
      console.log(`Submenu clicado: ${name}`);
      
      // Adiciona navegação baseada no nome do item
      if (name === 'Canais ao Vivo') {
        this.$router.push('/lineares');
      } else if (name === 'Esportes') {
        this.$router.push('/esportes');
      } else if (name === 'Lista') {
        this.$router.push('/listchannel'); // Navega para o componente ListChannel
      }
    },
  },
};
</script>

<style scoped>
/* Adicione estilizações personalizadas aqui */
</style>

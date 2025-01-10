<template>
  <div class="h-full bg-black text-white flex flex-col">
    <!-- Cabeçalho da Sidebar -->
    <nav class="flex-1">
      <ul>
        <!-- Item principal: Gestão de VOD -->
        <li class="pt-10 pb-2 pl-14 pr-8 ">
          <div @click="toggleVOD" class="cursor-pointer flex justify-between">
            Gestão de VOD
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <ul v-show="showVOD" class="pl-4">
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('VOD - teste')">
              VOD - teste
            </li>
          </ul>
        </li>

        <!-- Item principal: Lineares -->
        <li class="pt-8 pb-2 pl-14 pr-8 ">
          <div @click="toggleLineares" class="cursor-pointer flex justify-between">
            Lineares
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <ul v-show="showLineares" class="pl-4">
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('Canais ao Vivo')">
              Canais ao Vivo
            </li>
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('Esportes')">
              Esportes
            </li>
          </ul>
        </li>

        <!-- Item principal: Rede -->
        <li class="pt-8 pb-2 pl-14 pr-8 ">
          <div @click="toggleRede" class="cursor-pointer flex justify-between">
            Rede
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <ul v-show="showRede" class="pl-4">
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('Fornecedores')">
              Fornecedores
            </li>
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('Parceiros')">
              Parceiros
            </li>
          </ul>
        </li>

        <!-- Item principal: Customização -->
        <li class="pt-8 pb-2 pl-14 pr-8 ">
          <div @click="toggleCustomizacao" class="cursor-pointer flex justify-between">
            Customização
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <ul v-show="showCustomizacao" class="pl-4">
            <li class="p-2  cursor-pointer" @click="onSubmenuClick('Setting - teste')">
              Setting - teste
            </li>
          </ul>
        </li>

        <!-- Item principal: Dashboards -->
        <li class="pt-8 pb-2 pl-14 pr-8 ">
          <div @click="toggleDashboards" class="cursor-pointer flex justify-between">
            Dashboards
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <ul v-show="showDashboards" class="pl-4">
            <li class="p-2 cursor-pointer" @click="onSubmenuClick('Dash - teste')">
              Dash - teste
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
    },
  },
};
</script>

<style scoped>
/* Adicione estilizações personalizadas aqui */
</style>

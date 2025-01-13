<template>
  <button
    class="w-[165px] h-[40px] text-[14px] font-semibold font-inter rounded-md transition duration-200 flex items-center justify-center"
    :class="buttonClass"
    @click="onClick"
  >
    <span class="mr-2"></span> Importar Dados
  </button>
</template>

<script>
export default {
  name: "ButtonImportarDados",
  props: {
    type: {
      type: String,
      default: "primary", // Pode ser "primary" ou "secondary"
    },
  },
  computed: {
    buttonClass() {
      const baseClass = "focus:outline-none text-white"; // Cor do texto para branco
      const typeClasses = {
        primary: "hover:text-gray-600", // Cor do texto ao passar o mouse (cinza mais escuro)
        secondary: "hover:text-gray-500", // Cor do texto ao passar o mouse (cinza mais claro)
      };
      return `${baseClass} ${typeClasses[this.type] || ""}`;
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>


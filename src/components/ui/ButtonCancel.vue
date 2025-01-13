<template>
  <button
    class="w-[89px] h-[48px] text-[14px] font-semibold font-inter rounded-md transition duration-200 flex items-center justify-center"
    :class="buttonClass"
    @click="onClick"
  >
    <span class="mr-2"></span> Cancelar
  </button>
</template>

<script>
export default {
  name: "ButtonAdicionarCanal",
  props: {
    type: {
      type: String,
      default: "primary", // Pode ser "primary" ou "secondary"
    },
  },
  computed: {
    buttonClass() {
      const baseClass = "focus:outline-none";
      const typeClasses = {
        primary: "bg-gradient-to-r from-[#7400A7] to-[#BD518E] hover:from-[#991E61] hover:to-[#D36BB1] text-white", // Gradiente para o botão
        secondary: "bg-gray-700 hover:bg-gray-600 text-white",
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
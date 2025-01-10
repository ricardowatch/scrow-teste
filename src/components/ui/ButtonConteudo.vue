<template>
  <button
    class="w-[101px] h-[40px] text-[16px] font-semibold font-inter rounded-md transition duration-200"
    :class="buttonClass"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonConteudo",
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
        primary: "bg-[#811D56] hover:bg-[#991E61] text-white", // Cor alterada para #811D56
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

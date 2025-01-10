<!-- components/ui/ButtonConteudo.vue -->
<template>
  <button
    class="text-sm px-4 py-2 rounded-lg transition duration-200"
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
        primary: "bg-purple-600 hover:bg-purple-700 text-white",
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

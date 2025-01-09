<!-- src/components/common/BaseUpload.vue -->
<template>
    <div class="mb-4">
      <label v-if="label" class="block text-white mb-2">{{ label }}</label>
      <div
        @click="triggerFileInput"
        @dragover.prevent
        @drop.prevent="handleDrop"
        class="border-2 border-dashed border-gray-700 rounded-md p-4 text-center cursor-pointer hover:border-purple-500 transition-colors"
      >
        <span class="text-purple-400 text-sm">Clique para upload</span>
        <p class="text-gray-400 text-xs mt-1">ou arraste e solte</p>
        <p class="text-gray-400 text-xs">SVG, PNG, JPG (máx. 832x512px)</p>
      </div>
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFileSelect"
        accept="image/*"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseUpload',
    props: {
      label: String
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click()
      },
      handleFileSelect(event) {
        const file = event.target.files[0]
        if (file) this.$emit('file-selected', file)
      },
      handleDrop(event) {
        const file = event.dataTransfer.files[0]
        if (file) this.$emit('file-selected', file)
      }
    }
  }
  </script>
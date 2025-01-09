<!-- src/components/common/BaseInput.vue -->
<template>
    <div class="mb-4">
      <label v-if="label" class="block text-white mb-2">{{ label }}</label>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :required="required"
        class="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseInput',
    props: {
      label: String,
      modelValue: String,
      placeholder: String,
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    emits: ['update:modelValue']
  }
  </script>
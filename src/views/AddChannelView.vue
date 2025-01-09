<!-- src/views/AddChannelView.vue -->
<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Header -->
      <header class="bg-gray-800 p-4">
        <div class="flex justify-between items-center max-w-7xl mx-auto">
          <h1 class="text-2xl font-semibold">Adicionar canal</h1>
          <div class="space-x-4">
            <button @click="cancel" class="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">
              Cancelar
            </button>
            <button @click="save" class="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-500 transition">
              Salvar
            </button>
          </div>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto p-6">
        <div class="text-sm text-gray-400 mb-6">
          <p>*Campos obrigatórios para status ativo</p>
          <p>**Obrigatório preencher um distribuidor e/ou um estúdio para status ativo</p>
        </div>
  
        <form @submit.prevent="save" class="grid grid-cols-3 gap-8">
          <!-- Left Column -->
          <div class="col-span-2 space-y-4">
            <BaseInput
              v-model="form.name"
              label="Nome*"
              placeholder="Inserir nome"
              required
            />
  
            <div class="mb-4">
              <label class="block text-white mb-2">Descrição</label>
              <textarea
                v-model="form.description"
                rows="4"
                class="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
  
            <div class="grid grid-cols-3 gap-4">
              <BaseInput
                v-model="form.id"
                label="ID*"
                placeholder="Inserir código"
                required
              />
              <BaseInput
                v-model="form.code"
                label="Code*"
                placeholder="Inserir código"
                required
              />
              <BaseInput
                v-model="form.entryId"
                label="EntryID*"
                placeholder="Inserir código"
                required
              />
            </div>
  
            <div class="space-y-4">
              <BaseInput
                v-model="form.epgOrigin"
                label="Origem EPG*"
                placeholder="Insira a origem"
                required
              />
              
              <div class="mb-4">
                <label class="block text-white mb-2">Gênero principal*</label>
                <select v-model="form.mainGenre" class="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white">
                  <option value="">Insira ou selecione o gênero</option>
                  <!-- Add your genre options here -->
                </select>
              </div>
  
              <BaseInput
                v-model="form.otherGenres"
                label="Outros gêneros"
                placeholder="Insira os gêneros"
              />
            </div>
          </div>
  
          <!-- Right Column -->
          <div class="space-y-4">
            <BaseUpload
              label="Logo branca*"
              @file-selected="handleLogoUpload('white', $event)"
            />
            
            <BaseUpload
              label="Logo preta*"
              @file-selected="handleLogoUpload('black', $event)"
            />
            
            <BaseUpload
              label="Logo colorida*"
              @file-selected="handleLogoUpload('color', $event)"
            />
  
            <div class="mb-4">
              <label class="block text-white mb-2">Estúdio**</label>
              <select v-model="form.studio" class="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white">
                <option value="">Insira o estúdio</option>
                <!-- Add your studio options here -->
              </select>
            </div>
  
            <div class="mb-4">
              <label class="block text-white mb-2">Distribuidor**</label>
              <select v-model="form.distributor" class="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white">
                <option value="">Insira o distribuidor</option>
                <!-- Add your distributor options here -->
              </select>
            </div>
  
            <BaseInput
              v-model="form.launchDate"
              label="Data prevista de lançamento*"
              type="date"
              required
            />
          </div>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  import BaseInput from '@/components/common/BaseInput.vue'
  import BaseUpload from '@/components/common/BaseUpload.vue'
  
  export default {
    name: 'AddChannelView',
    components: {
      BaseInput,
      BaseUpload
    },
    data() {
      return {
        form: {
          name: '',
          description: '',
          id: '',
          code: '',
          entryId: '',
          epgOrigin: '',
          mainGenre: '',
          otherGenres: '',
          studio: '',
          distributor: '',
          launchDate: '',
          logos: {
            white: null,
            black: null,
            color: null
          }
        }
      }
    },
    methods: {
      handleLogoUpload(type, file) {
        this.form.logos[type] = file
      },
      save() {
        console.log('Saving form:', this.form)
        // Implement your save logic here
      },
      cancel() {
        // Implement your cancel logic here
        this.$router.go(-1)
      }
    }
  }
  </script>
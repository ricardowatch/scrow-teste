<template>
    <div class="create-channel">
      <div class="header flex justify-between items-center mb-8">
        <h1 class="text-2xl text-white">Adicionar canal</h1>
        <div class="flex gap-4">
          <ButtonCancel @click="handleCancel" />
          <ButtonSave @click="handleSave" />
        </div>
      </div>
  
      <div class="form-container text-white">
        <p class="text-xs text-gray-400 mb-1">*Campos obrigatórios para status ativo</p>
        <p class="text-xs text-gray-400 mb-8">**Obrigatório preencher um distribuidor e/ou um estúdio para status ativo</p>
  
        <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-x-8 gap-y-6">
          <!-- Coluna Esquerda -->
          <div class="space-y-6">
            <!-- Nome -->
            <div class="w-full">
              <label class="form-label">Nome*</label>
              <input v-model="form.name" type="text" class="form-input" placeholder="Inserir nome" />
            </div>
  
            <!-- Descrição -->
            <div class="w-full">
              <label class="form-label">Descrição</label>
              <textarea v-model="form.description" class="form-input min-h-[120px] resize-none w-full" placeholder="Inserir descrição"></textarea>
            </div>
  
            <!-- Code e Origem EPG na mesma linha -->
            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="form-label">Code*</label>
                <input v-model="form.code" type="text" class="form-input" placeholder="Inserir código" />
              </div>
              <div class="w-1/2">
                <label class="form-label">Origem EPG*</label>
                <select v-model="form.epgOrigin" class="form-input">
                  <option value="" disabled selected>Insira a origem</option>
                  <option v-for="origin in epgOrigins" :key="origin.id" :value="origin.id">
                    {{ origin.name }}
                  </option>
                </select>
              </div>
            </div>
  
            <!-- Gênero principal -->
            <div class="w-full">
              <label class="form-label">Gênero principal*</label>
              <select v-model="form.mainGenre" class="form-input">
                <option value="" disabled selected>Insira ou selecione o gênero</option>
                <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                  {{ genre.name }}
                </option>
              </select>
            </div>
  
            <!-- Outros gêneros -->
            <div class="w-full">
              <label class="form-label">Outros gêneros</label>
              <input v-model="form.otherGenres" type="text" class="form-input" placeholder="Insira os gêneros" />
            </div>
  
            <!-- Status -->
            <div class="w-full">
              <label class="form-label">Status*</label>
              <select v-model="form.status" class="form-input">
                <option value="" disabled selected>Selecione o status</option>
                <option v-for="status in statusOptions" :key="status.id" :value="status.id">
                  {{ status.name }}
                </option>
              </select>
            </div>
  
            <!-- Data de lançamento -->
            <div class="w-full">
              <label class="form-label">Data prevista de lançamento*</label>
              <input v-model="form.launchDate" type="text" class="form-input" placeholder="00/00/0000" />
            </div>
          </div>
  
          <!-- Coluna Direita -->
          <div class="space-y-6">
            <!-- ID e EntryID na mesma linha -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="form-label">ID*</label>
                <input v-model="form.id" type="text" class="form-input" placeholder="Inserir código" />
              </div>
              <div>
                <label class="form-label">EntryID*</label>
                <input v-model="form.entryId" type="text" class="form-input" placeholder="Inserir código" />
              </div>
            </div>
  
            <!-- Logo branca -->
            <div>
              <label class="form-label">Logo branca*</label>
              <div class="upload-area" @click="triggerFileInput('white')" @dragover.prevent @drop.prevent="handleDrop($event, 'white')">
                <input type="file" ref="whiteLogoInput" class="hidden" @change="handleFileChange($event, 'white')" accept="image/svg+xml,image/png,image/jpeg" />
                <div class="upload-content">
                  <span class="upload-icon">+</span>
                  <p class="text-purple-400 text-sm">Clique para upload</p>
                  <p class="text-gray-400 text-xs">ou arraste e solte</p>
                  <p class="text-gray-500 text-xs mt-2">SVG, PNG, JPG (máx. 832×512px)</p>
                </div>
              </div>
            </div>
  
            <!-- Logo preta -->
            <div>
              <label class="form-label">Logo preta*</label>
              <div class="upload-area" @click="triggerFileInput('black')" @dragover.prevent @drop.prevent="handleDrop($event, 'black')">
                <input type="file" ref="blackLogoInput" class="hidden" @change="handleFileChange($event, 'black')" accept="image/svg+xml,image/png,image/jpeg" />
                <div class="upload-content">
                  <span class="upload-icon">+</span>
                  <p class="text-purple-400 text-sm">Clique para upload</p>
                  <p class="text-gray-400 text-xs">ou arraste e solte</p>
                  <p class="text-gray-500 text-xs mt-2">SVG, PNG, JPG (máx. 832×512px)</p>
                </div>
              </div>
            </div>
  
            <!-- Logo colorida -->
            <div>
              <label class="form-label">Logo colorida*</label>
              <div class="upload-area" @click="triggerFileInput('color')" @dragover.prevent @drop.prevent="handleDrop($event, 'color')">
                <input type="file" ref="colorLogoInput" class="hidden" @change="handleFileChange($event, 'color')" accept="image/svg+xml,image/png,image/jpeg" />
                <div class="upload-content">
                  <span class="upload-icon">+</span>
                  <p class="text-purple-400 text-sm">Clique para upload</p>
                  <p class="text-gray-400 text-xs">ou arraste e solte</p>
                  <p class="text-gray-500 text-xs mt-2">SVG, PNG, JPG (máx. 832×512px)</p>
                </div>
              </div>
            </div>
  
            <!-- Estúdio -->
            <div>
              <label class="form-label">Estúdio**</label>
              <select v-model="form.studio" class="form-input">
                <option value="" disabled selected>Selecione o estúdio</option>
                <option v-for="studio in studios" :key="studio.id" :value="studio.id">
                  {{ studio.name }}
                </option>
              </select>
            </div>
  
            <!-- Distribuidor -->
            <div>
              <label class="form-label">Distribuidor**</label>
              <select v-model="form.distributor" class="form-input">
                <option value="" disabled selected>Selecione o distribuidor</option>
                <option v-for="distributor in distributors" :key="distributor.id" :value="distributor.id">
                  {{ distributor.name }}
                </option>
              </select>
            </div>
          </div>
  
          <!-- Links de rodapé -->
          <div class="col-span-2 flex gap-4 mt-4">
            <a href="#" class="text-purple-400 text-sm hover:text-purple-300 transition-colors flex items-center gap-2">
              Regras
              <span class="text-lg">→</span>
            </a>
            <a href="#" class="text-gray-400 text-sm hover:text-gray-300 transition-colors flex items-center gap-2">
              Histórico
              <span class="text-lg">→</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import ButtonSave from '@/components/ui/ButtonSave.vue'
import ButtonCancel from '@/components/ui/ButtonCancel.vue'
import { ChannelService } from '@/services/ChannelService' // Corrigido o import

export default {
  name: 'CreateChannel',
  
  components: {
    ButtonSave,
    ButtonCancel
  },

  data() {
    return {
      form: {
        name: '',
        id: '',
        entryId: '',
        description: '',
        code: '',
        epgOrigin: '',
        mainGenre: '',
        otherGenres: '',
        status: '',
        studio: '',
        distributor: '',
        launchDate: '',
        whiteLogo: null,
        blackLogo: null,
        colorLogo: null
      },
      epgOrigins: [],
      genres: [],
      statusOptions: [],
      studios: [],
      distributors: []
    }
  },

  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
    },

    handleSave() {
      try {
        // Salva o canal usando o channelService importado
        const savedChannel = ChannelService.saveChannel(this.form)
        console.log('Canal salvo:', savedChannel)
        
        // Emite evento de sucesso
        this.$emit('save', savedChannel)
        
        // Limpa o formulário
        this.form = {
          name: '',
          id: '',
          entryId: '',
          description: '',
          code: '',
          epgOrigin: '',
          mainGenre: '',
          otherGenres: '',
          status: '',
          studio: '',
          distributor: '',
          launchDate: '',
          whiteLogo: null,
          blackLogo: null,
          colorLogo: null
        }

      } catch (error) {
        console.error('Erro ao salvar canal:', error)
      }
    },

    handleCancel() {
      this.$emit('cancel')
    },

    triggerFileInput(type) {
      this.$refs[`${type}LogoInput`].click()
    },

    handleFileChange(event, type) {
      const file = event.target.files[0]
      if (file) {
        this.form[`${type}Logo`] = file
      }
    },

    handleDrop(event, type) {
      const file = event.dataTransfer.files[0]
      if (file) {
        this.form[`${type}Logo`] = file
      }
    }
  }
}
</script>
  
  <style scoped>
  .create-channel {
    padding: 24px;
    background: #1a1a1a;
    min-height: 100vh;
  }
  
  .form-label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 8px;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
  }
  
  .form-input::placeholder {
    color: #666;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #8833FF;
  }
  
  .upload-area {
    border: 1px dashed #333;
    border-radius: 6px;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    background: #1a1a1a;
    min-height: 100px;    /* Reduzido de 160px para 100px */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .upload-area:hover {
    border-color: #8833FF;
    background: rgba(136, 51, 255, 0.1);
  }
  
  .upload-icon {
    font-size: 20px;      /* Reduzido de 24px para 20px */
    color: #8833FF;
    margin-bottom: 4px;   /* Reduzido de 8px para 4px */
  }
  
  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;            /* Reduzido de 4px para 2px */
  }
  </style>
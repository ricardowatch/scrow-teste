<!-- LiveChannelHome.vue -->
<template>
    <div class="live-channels">
      <header class="header">
        <div class="flex flex-col">
          <h1 class="text-[30px] font-light">Canais ao vivo</h1>
          <p class="text-left mt-0">Gestão dos canais ao vivo da plataforma</p> <!-- Alinhamento à esquerda e margin zero -->
        </div>
        <div class="actions">
          <!-- Substituindo o botão Importar dados pelo ButtonImportDados -->
          <ButtonImportData type="secondary" /> <!-- Botão Importar dados com borda -->
  
          <!-- Substituindo o botão Adicionar Canal -->
          <ButtonAddChannel type="primary" />
        </div>
      </header>
  
      <div class="content" v-if="!hasChannels">
        <div class="empty-state">
          <div class="icon-wrapper">
            <img src="@/assets/images/icons/broadcast.png" alt="Ícone de transmissão" />
          </div>
          <h2 class="empty-title">Nenhum canal ainda.</h2>
          <p class="empty-text">Adicione um canal para aparecer aqui.</p>
          <div class="empty-actions">
            <!-- Substituindo o botão Importar dados pelo ButtonImportDados -->
            <ButtonImportData type="secondary" /> <!-- Botão Importar dados com borda -->
  
            <!-- Substituindo o botão Adicionar Canal -->
            <ButtonAddChannel type="primary" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonAddChannel from '@/components/ui/ButtonAddChannel.vue'; // Importando o componente do botão Adicionar Canal
  import ButtonImportData from '@/components/ui/ButtonImportData.vue';
  
  export default {
    name: 'LiveChannelHome',
    components: {
      ButtonAddChannel, // Registrando o componente de Adicionar Canal
      ButtonImportData, // Registrando o componente de Importar Dados
    },
    data() {
      return {
        hasChannels: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .live-channels {
    padding: 24px;
    color: #fff;
    min-height: 100vh;
    background: #1a1a1a;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  
  .actions {
    display: flex;
    gap: 12px;
  }
  
  .btn-import, .btn-add {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .btn-import {
    background: transparent;
    border: 1px solid #333;
    color: #fff;
  }
  
  .btn-import:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .btn-add {
    background: #8833FF;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn-add:hover {
    background: #7029D4;
  }
  
  .plus-icon {
    font-size: 18px;
    font-weight: 300;
  }
  
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
  
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  
  .empty-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .empty-text {
    color: #999;
    margin-bottom: 24px;
  }
  
  .empty-actions {
    display: flex;
    gap: 12px;
  }
  
  .secondary {
    background: transparent;
    border: 1px solid #333;
  }
  
  .primary {
    background: #8833FF;
    border: none;
  }
  </style>
  
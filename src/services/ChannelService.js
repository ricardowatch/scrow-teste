// src/services/channelService.js
export const channelService = {
    saveChannel(channelData) {
      // Pega dados existentes ou inicia array vazio
      const existingChannels = JSON.parse(localStorage.getItem('channels')) || []
      
      // Adiciona novo canal com ID único
      const newChannel = {
        id: Date.now(), // usando timestamp como ID
        ...channelData,
        createdAt: new Date().toISOString()
      }
      
      // Adiciona ao array e salva
      existingChannels.push(newChannel)
      localStorage.setItem('channels', JSON.stringify(existingChannels))
      
      return newChannel
    },
  
    getChannels() {
      return JSON.parse(localStorage.getItem('channels')) || []
    }
  }
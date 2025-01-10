/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Inclui o arquivo HTML principal
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Analisa todos os arquivos Vue e JavaScript
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar personalizações do tema
      colors: {
        'primary': '#seu-codigo-de-cor', // Cor primária personalizada
        'secondary': '#seu-codigo-de-cor', // Cor secundária personalizada
      },
      fontFamily: {
        'sans': ['sua-fonte', 'sans-serif'], // Fontes personalizadas
      },
    },
  },
  plugins: [],
}

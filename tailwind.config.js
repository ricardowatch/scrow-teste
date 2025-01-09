// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // Analisa todos os arquivos Vue e JavaScript
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar personalizações do tema
      colors: {
        'primary': '#seu-codigo-de-cor',
        'secondary': '#seu-codigo-de-cor',
      },
      fontFamily: {
        'sans': ['sua-fonte', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


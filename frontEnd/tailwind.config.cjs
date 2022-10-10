/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx,ts,tsx}',
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        primary: '#256D85',
        'dark-primary': '#06283D',
        'gray-1': '#f2f2f2',
        'blue-1': '#7ca7b6',
        'black-80p': 'rgba(26, 25, 25, 0.8)',
      },
      backgroundImage: {
        handcoding: 'url("./src/assets/portadaEZ.gif")',
        'logotipo-ez': 'url("./src/assets/logotipoEZ.svg")',
        'logotipo-ez-footer': 'url("./src/assets/logotipoFooter.svg")',
        'login-image': 'url("./src/assets/inicioSesioIlusstracion.svg")',
        'register-image': 'url("./src/assets/registroIlustracion.svg")',
        'icon-close': 'url("./src/assets/iconClose.svg")',
      },
    },
  },
  plugins: [],
}

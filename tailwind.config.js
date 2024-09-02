/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'cerise': {
        '50': '#fff0fb',
        '100': '#ffe4f8',
        '200': '#ffc9f3',
        '300': '#ff9de6',
        '400': '#ff60d3',
        '500': '#ff31bd',
        '600': '#f4119e',
        '700': '#d5017e',
        '800': '#b00467',
        '900': '#920958',
        '950': '#5a0032',
    },
    'matter': {
        '50': '#f9f6f8',
        '100': '#f5eef3',
        '200': '#ebdfe7',
        '300': '#dcc5d5',
        '400': '#c6a0b8',
        '500': '#b282a0',
        '600': '#9b6784',
        '700': '#83536d',
        '800': '#6e465b',
        '900': '#4a313e',
        '950': '#36212b',
    },
    // Colores de la paleta cereza el 600 y matter el 900

    },
    fontFamily:{
      poppins:["Poppins", 'sans-serif']
    },


    extend: {},
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.text-gradient':{
          'background':'linear-gradient(to bottom left, #f4119e, #4a313e)',
          'background-clip': 'text',
          '-webkit-background-clip':'text',
          'color': 'transparent',
          '-webkit-text-fill-color':'transparent',
        }
      })
    },
  ],
}

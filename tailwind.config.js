/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'dune': {
        '50': '#f4f4f2',
        '100': '#e4e2dd',
        '200': '#ccc6bc',
        '300': '#aea496',
        '400': '#968979',
        '500': '#887a6a',
        '600': '#74665a',
        '700': '#5e514a',
        '800': '#514742',
        '900': '#483e3b',
        '950': '#332b29',
    },
    'azure': {
        '50': '#edfbff',
        '100': '#d6f3ff',
        '200': '#b5edff',
        '300': '#83e4ff',
        '400': '#48d2ff',
        '500': '#1eb4ff',
        '600': '#0698ff',
        '700': '#0077e6',
        '800': '#0864c5',
        '900': '#0d569b',
        '950': '#0e345d',
    },

   'shark': {
        '50': '#f4f7f7',
        '100': '#e2ebeb',
        '200': '#c8d8d9',
        '300': '#a2bcbe',
        '400': '#75989b',
        '500': '#5a7d80',
        '600': '#4d696d',
        '700': '#43575b',
        '800': '#3c4b4e',
        '900': '#354144',
        '950': '#1a2123',
    },


  // El del fondo es 950

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
    function({addUtilities}){
      addUtilities({
        '.bg-gradient-color':{
          'background':'linear-gradient(to bottom left, #f4119e, #4a313e)',
        }
      })
    }
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'index.html',
  './src/**/*.{html,js}',],
  theme: {
    colors:{
      DarkBlue: 'hsl(234, 12%, 34%)',
 GrayishBlue: 'hsl(229, 6%, 66%)',
 LightGray: 'hsl(0, 0%, 98%)',
 Red: 'hsl(0, 78%, 62%)',
 Cyan: 'hsl(180, 62%, 55%)',
  Orange: 'hsl(34, 97%, 64%)',
  Blue: 'hsl(212, 86%, 64%)',
    } ,
    fontFamily:{
      'Poppins': 'Poppins, sans-serif',
    },
  },
   
  extend: {
    
  },
  plugins: [],
}

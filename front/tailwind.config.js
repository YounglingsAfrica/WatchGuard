/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boring-grey': '#F1F1F1',
        'boring-blue': '#85E5FA'
      },
      gridTemplateColumns: {
        'page':'20% 80%',
        'nav':'2.5% 97.5%',
        'post':'15% 85% ', 
        'comment':'90% 10%',
        'communities': '100%',
        'insideCommunities' : '10% 50% 40%',
        'comment':'10% 90%'
      },
      gridTemplateRows: {
        'communities': 'repeat(auto-fill, 500px)',
        
      }
    },
    screens: {
      'xs': {'min': '0px', 'max': '639px'},

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
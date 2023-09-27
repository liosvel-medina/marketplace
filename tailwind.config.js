/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'dark': '#1C1C1C',
      'gray-600': '#505050',
      'gray-500': '#8B96A5',
      'gray-400': '#BDC4CD',
      'gray-300': '#DEE2E7',
      'gray-200': '#EFF2F4',
      'gray-100': '#F7FAFC',
      'base-color-blue-100': '#E3F0FF',
      'primary': '#0D6EFD',
      'light-green': '#C3FFCB',
      'green': '#00B517',
      'light-orange': '#FFE5BF',
      'orange': '#FF9017',
      'red': '#FA3434'
    },
    extend: {
      fontFamily: {
        'sans': 'Inter',
      }
    },
  },
  plugins: [],
}


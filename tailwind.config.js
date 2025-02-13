/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular:['Regular'],
        primaryBold:['Bold'],
        primaryThin:['Thin'],

      }
    },
  },
  plugins: [],
}


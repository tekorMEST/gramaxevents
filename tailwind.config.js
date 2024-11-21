/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grmax-decor': '#FF5733',
      },
      screens: {
        'xs': '475px',
        // Add more custom breakpoints if needed
      },
      borderColor: {
        'grmax-decor': '#FF5733',
      },
      backgroundColor: {
        'grmax-decor': '#FF5733',
      },
    },
  },
  plugins: [],
} 
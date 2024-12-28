/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deeper-blue': '#0066FF',
        'deeper-dark': '#030712',
        'deeper-gray': '#1A1A1A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to bottom right, rgba(0, 102, 255, 0.05), rgba(0, 102, 255, 0) 50%)',
      }
    },
  },
  plugins: [],
}


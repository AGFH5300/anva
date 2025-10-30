/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F4C5C',
          gold: '#F5A623',
          slate: '#12333F',
        },
      },
      fontFamily: {
        display: ['"Segoe UI"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

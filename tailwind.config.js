/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#007AFF',
        'secondary': '#2D3748',
      },
      colors: {
        'stroke': '#D1D1D1',
        'blueStroke': '#007AFF',
        'dark': '#1D1D1D',
        'secondary': '#2D3748'
      }
    },
  },
  plugins: [],
}

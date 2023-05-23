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
        'primaryBg': '#E5E5E5',
        'primary': '#007AFF',
        'secondary': '#2D3748',
      },
      colors: {
      }
    },
  },
  plugins: [],
}

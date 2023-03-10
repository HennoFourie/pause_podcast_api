/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#2D3142',
      'light': '#586A6A',
      'white': '#ffffff',
      'alert': '#f25f5c',
      'primary': '#488b49',
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
}

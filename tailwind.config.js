/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./js/**/*.js",
      "./css/**/*.css",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#1D4ED8',
          'secondary': '#9333EA',
          'accent': '#F59E0B',
          'background': '#F3F4F6',
        },
        backgroundImage: {
          'hero': "url('/images/hero-bg.jpg')",
        },
      },
    },
    plugins: [],
  }
  
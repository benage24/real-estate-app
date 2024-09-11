/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotro': "url('/images/maluku.jpg')",
        'parallax': "url('/images/parallax.jpeg')",
      
      }
    },
  },
  plugins: [],
}


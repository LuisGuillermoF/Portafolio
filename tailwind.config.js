/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        'primary': 'blue-aqua',
        'secondary': 'back-gray'
      },
      textColor: ['active'],
  },
  plugins: [],
}
}

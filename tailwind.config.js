/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './main/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'work11': "url('/main/images/work11.png')",
        'work12': "url('/main/images/work12.png')",
        'work13': "url('/main/images/work13.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontWeight: {
        extrabold: '800',
        'extra-bold': '650',
      }
    },
  },
  plugins: [],
}

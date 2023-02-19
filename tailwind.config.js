/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './main/*.html'
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'logo': "url('/main/images/logo.png')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // }
      fontWeight: {
        extrabold: '800',
        'extra-bold': '650',
      }
    },
  },
  plugins: [],
}

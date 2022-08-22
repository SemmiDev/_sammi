/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        utama: '#0a88a5',
        gelap: '#0f172a',
        kedua: '#64748b',
        navv: '#07191d',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

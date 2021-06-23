module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pacman-yellow': '#ffff00',
        'neon-blue': '#1919a6',
        'blue-bonnet': '#2121de',
      },
    },
    fontFamily: {
      pixel: ['pixel', 'Helvetica', 'Arial', 'sans-serif'],
      gameboy: ['gameboy', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

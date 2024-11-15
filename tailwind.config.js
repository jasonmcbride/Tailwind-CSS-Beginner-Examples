/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand": "#1E40AF",
        "dark-blue": "#1B2631",
        "light-blue": "#F1F3F6",
        "dark-green": "#23313F",
        "light-green": "#E6F2F8",
        "dark-red": "#4B1223",
        "light-red": "#F9EBEC",
      },
    },
  },
  plugins: [],
};


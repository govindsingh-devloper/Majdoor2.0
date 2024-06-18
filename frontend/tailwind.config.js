/**{@type {import('tailwindcss').Config}}**/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['peer-checked'],
      translate: ['peer-checked'],
      // Add other utilities as needed
    },
  },
  plugins: [],
};

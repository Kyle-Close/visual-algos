/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};

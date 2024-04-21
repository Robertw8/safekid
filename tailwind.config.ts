/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'black-primary': '#1A1A1C',
        'black-20': '#00160A33',
        'black-100': '#333333',
        'gray-primary': '#464749',
        'gray-input': '#E8E8E8',
        'gray-button': '#ACACAC',
        'gray-disabled': '#D9D9D9',
        red: '#E82929',
        purple: '#3D33E2',
        white: '#FFFFFF',
        green: '#0D8065',
        'dark-blue': '#344054',
        pink: '#7D5DFF',
      },
    },
  },
};

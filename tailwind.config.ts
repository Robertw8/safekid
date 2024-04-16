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
        'gray-primary': '#464749',
        'gray-input': '#E8E8E8',
        'gray-button': '#ACACAC',
        'gray-disabled': '#D9D9D9',
        purple: '#3D33E2',
        white: '#FFFFFF',
        green: '#0D8065',
      },
      spacing: {
        '13': '50px',
      },
    },
  },
};

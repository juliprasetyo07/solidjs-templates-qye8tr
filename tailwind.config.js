const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        black: '#0e0e0e',
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#2B3445',
        orange: '#F77500',
        light: '#F0F0F0',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yelow: '#ffc82c',
        graydark: '#AEB4BE',
        gray: '#F3F5F9',
        graylight: '#d3dce6',
        white: '#ffffff',
        red: '#D23F57',
      },
      width: {
        910: '910px',
        256: '256px',
      },

      height: {
        516: '516px',
      },
    },
  },
  plugins: [],
};

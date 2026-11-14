/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#051224',
          900: '#081C36',
          800: '#0B2545',
          700: '#12345E',
          600: '#1B467B',
        },
        brand: {
          orange: '#F07218',
          orangeDark: '#D95D07',
          orangeLight: '#FF8A33',
          steel: '#64748B',
          lightBg: '#F4F6F9',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -5px rgba(8, 28, 54, 0.08), 0 4px 12px -2px rgba(8, 28, 54, 0.04)',
        orangeGlow: '0 8px 22px -4px rgba(240, 114, 24, 0.45)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Inter', 'system-ui', 'sans-serif'] },
      colors: { brand: { DEFAULT: '#0A66C2', 500: '#0A66C2' } },
      boxShadow: { glow: '0 0 40px -10px rgba(99,102,241,0.6)', soft: '0 10px 30px -12px rgba(0,0,0,0.35)' },
      animation: { float: 'float 6s ease-in-out infinite', pulseSlow: 'pulse 4s ease-in-out infinite' },
      keyframes: { float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } } }
    },
  },
  plugins: [],
}

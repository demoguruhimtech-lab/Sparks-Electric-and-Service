/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d1e3',
          200: '#8ba6c7',
          300: '#5a7ba8',
          400: '#2f4f7f',
          500: '#101f35',
          600: '#0e1b2e',
          700: '#0a1422',
          800: '#070f1a',
          900: '#040a10',
        },
        electric: {
          50: '#eff5ff',
          100: '#dbeafe',
          200: '#bfd7fe',
          300: '#93bbfd',
          400: '#6093fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        warmyellow: {
          50: '#fef9ed',
          100: '#fdf0cd',
          200: '#fbe19b',
          300: '#f9cd64',
          400: '#f5b942',
          500: '#e8a52a',
          600: '#c9821e',
          700: '#a35e1a',
          800: '#7d441a',
          900: '#5a3015',
        },
        lightgray: '#F4F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

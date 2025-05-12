/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefaf2',
          100: '#d7f1e0',
          200: '#b1e3c5',
          300: '#7fd0a5',
          400: '#4eb581',
          500: '#40916c',
          600: '#2d6a4f',
          700: '#265442',
          800: '#1f4035',
          900: '#1a342c',
          950: '#0c1e19',
        },
        secondary: {
          50: '#fbf8f1',
          100: '#f7ede0',
          200: '#eed6bd',
          300: '#e3bb94',
          400: '#d49e6a',
          500: '#c6864d',
          600: '#b06b3c',
          700: '#935333',
          800: '#774936',
          900: '#623d32',
          950: '#341f19',
        },
        accent: {
          50: '#fffae6',
          100: '#fff2c2',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffce3d',
          500: '#f6be00',
          600: '#d19400',
          700: '#a66e00',
          800: '#8a5700',
          900: '#734700',
          950: '#432800',
        },
      },
      animation: {
        'leaf-sway': 'leaf-sway 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'pulse-gentle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
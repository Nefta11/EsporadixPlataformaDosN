/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#151f24',
        card: '#0E1E24',
        primary: '#4B7BE5',
        secondary: '#6B8EE7',
        tertiary: '#8BA4EA',
        'accent-teal': '#3E9B9B',
        'accent-pink': '#F88379',
        'gray': {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      boxShadow: {
        'neon': '0 0 10px rgba(75, 123, 229, 0.15)',
        'neon-strong': '0 0 15px rgba(75, 123, 229, 0.2)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 15px 40px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.5s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(180deg, var(--card) 0%, rgba(14, 30, 36, 0.8) 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: '#fdf8f0',
        peach: '#f5c9a8',
        blush: '#f2b4a0',
        cream: '#fef3e8',
        dark: '#3d3530',
        muted: '#8c7b72',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(245, 201, 168, 0.4)',
        'glow-lg': '0 0 80px rgba(245, 201, 168, 0.3)',
        'card': '0 8px 40px rgba(61, 53, 48, 0.08)',
        'card-hover': '0 20px 60px rgba(61, 53, 48, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 201, 168, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 201, 168, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

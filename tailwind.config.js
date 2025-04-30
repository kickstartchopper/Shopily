module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        goldStart: '#FFD700',
        goldEnd: '#FFA500',
        silverStart: '#C0C0C0',
        silverEnd: '#A9A9A9',
        bronzeStart: '#CD7F32',
        bronzeEnd: '#8B4513',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

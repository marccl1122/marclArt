module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0a12',
          DEFAULT: '#12121d',
          light: '#1a1a2e',
        },
        accent: {
          blue: '#3da9fc',
          purple: '#7f5af0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}

const { cyberpunkTheme } = require('./styles/theme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: cyberpunkTheme.colors,
      fontFamily: cyberpunkTheme.fonts,
      boxShadow: cyberpunkTheme.shadows,
      spacing: cyberpunkTheme.spacing,
      borderRadius: cyberpunkTheme.borderRadius,
      screens: cyberpunkTheme.breakpoints,
      transitionDuration: cyberpunkTheme.transitions.duration,
      transitionTimingFunction: cyberpunkTheme.transitions.timing,
      zIndex: cyberpunkTheme.zIndex
    },
  },
  plugins: [],
}
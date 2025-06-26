import { cyberpunkTheme } from './src/styles/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...(cyberpunkTheme as any).colors,
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        ...(cyberpunkTheme as any).fonts,
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: (cyberpunkTheme as any).shadows,
      spacing: (cyberpunkTheme as any).spacing,
      borderRadius: (cyberpunkTheme as any).borderRadius,
      screens: (cyberpunkTheme as any).breakpoints,
      transitionDuration: (cyberpunkTheme as any).transitions?.duration,
      transitionTimingFunction: (cyberpunkTheme as any).transitions?.timing,
      zIndex: (cyberpunkTheme as any).zIndex,
    },
  },
  plugins: [],
}

export default config

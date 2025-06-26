import { DefaultTheme } from 'styled-components'

export const cyberpunkTheme: DefaultTheme = {
  colors: {
    background: {
      dark: '#0a1026',
      glass: 'rgba(18, 24, 48, 0.7)',
      primary: '#1a1a40',
      secondary: '#23235b',
      deep: '#1e2a78',
    },
    accent: {
      blue: '#3da9fc',
      purple: '#7f5af0',
      cyan: '#05d9e8',
      pink: '#ff2a6d',
    },
    text: {
      main: '#fff',
      secondary: '#a1a1aa',
      muted: '#71717a',
    },
    glassBorder: 'rgba(127, 90, 240, 0.25)',
    focus: '#05d9e8',
    glow: '#3da9fc',
  },
  fonts: {
    cyber: '"Share Tech Mono", monospace',
    sans: '"Rajdhani", sans-serif',
    mono: '"IBM Plex Mono", monospace',
  },
  shadows: {
    sm: '0 1px 3px rgba(127, 90, 240, 0.12)',
    md: '0 4px 6px rgba(127, 90, 240, 0.15)',
    lg: '0 10px 15px rgba(127, 90, 240, 0.2)',
    xl: '0 20px 25px rgba(127, 90, 240, 0.25)',
    glow: '0 0 16px #3da9fc, 0 0 32px #7f5af0',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
    inner: 'inset 0 2px 4px rgba(127, 90, 240, 0.1)',
  },
  spacing: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    timing: {
      ease: 'ease',
      in: 'ease-in',
      out: 'ease-out',
      'in-out': 'ease-in-out'
    }
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  }
}

// TypeScript type for theme
export type CyberpunkTheme = typeof cyberpunkTheme
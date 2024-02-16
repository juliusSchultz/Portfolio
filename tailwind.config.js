/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    boxShadow: {
      none: '0 0 #0000',
      button: '0 12px 12px -12px rgba(51, 48, 0, 0.4)',
      'button-inverted': '0 12px 12px -12px rgba(255, 255, 255, 0.3)',
      'border-blue': 'inset 0 0 0 2px #1541dd',
      'border-blue-lighter': 'inset 0 0 0 2px #184bff',
      'border-grey-80': 'inset 0 0 0 2px #CCCCCC',
      'border-black': 'inset 0 0 0 2px #000000',
      'border-grey-16': 'inset 0 0 0 2px #292929',
      'border-white': 'inset 0 0 0 2px #ffffff',
      select: '0 48px 48px -48px #CCCCCC',
      'slider-handle': '0 0 0 4px rgba(0, 0, 0, 0.05)',
      'black-15': '0px 8px 32px rgba(0, 0, 0, 0.15)',
    },
    colors: {
      red: '#dd1541',
      'red-darker': '#bd1237',
      'red-lighter': '#ff184b',
      blue: '#1541dd',
      'blue-darker': '#1237bd',
      'blue-lighter': '#184bff',
      'red-opacity': 'rgba(242, 23, 71, 0.1)',
      'error-lighter': '#E24265',
      yellow: '#f2e600',
      'yellow-darker': '#dacf00',
      'yellow-lighter': '#f9f380',
      green: '#66cc77',
      'green-lighter': '#83D490',
      warning: '#ffa64d',
      alert: '#dd1541',
      'warning-lighter': '#FDB66F',
      'grey-16': '#272727',
      'grey-32': '#505050',
      'grey-32-opacity': '#52525280',
      'grey-48': '#7c7c7c',
      'grey-64': '#a5a5a5',
      'grey-80': '#dddddd',
      'grey-88': '#e1e1e1',
      'grey-96': '#f6f6f6',
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
    },
    lineHeight: {
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      11: '2.75rem', // 44px
      14: '3.5rem', // 56px
      16: '4rem', // 64px
    },
    screens: {
      xs: 0,
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
  plugins: [],
}

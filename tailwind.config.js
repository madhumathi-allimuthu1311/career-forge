/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    minHeight: {
      '1/2': '50%',
      'screen': '90vh',
    },
    borderRadius: {
      'none': '0',
      'sm': '6px',
      'md': '10px',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'dark': '#212121',
      'error': '#D86161',
      'primary': '#1597E4',
      'primary-dark': '#0a96c9',
      'gray-dark': '#7A7A7A',
      'gray-light': '#E6E6E6',
      'text-white': '#FAFAFA',
      'background': '#D8D8D8',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
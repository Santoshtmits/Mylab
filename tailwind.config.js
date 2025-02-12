/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all paths for React files
  ],
  theme: {
    extend: {
      animation: {
        'scroll-right-left': 'scrollingRightToLeft 20s linear infinite', // Right to left scroll
        'scroll-left-right': 'scrollingLeftToRight 20s linear infinite', // Left to right scroll
      },
      keyframes: {
        scrollingRightToLeft: {
          '0%': { transform: 'translateX(100%)' },  // Start from the right
          '100%': { transform: 'translateX(-100%)' }, // Move to the left
        },
        scrollingLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },  // Start from the left
          '100%': { transform: 'translateX(100%)' }, // Move to the right
        },
      },
      fontFamily: {
        mons: ['Montserrat', 'sans-serif'], // Make sure the font is available
      },
      fontWeight: {
        regular: 400, 
        small: 500, 
        medium: 600,   
        bold: 700, 
      },
      fontSize: {
        'xxs': '10px',  
        'tiny': '12px',
        'xm': '14px', 
        'xsl': '16px',
        'xls': '24px',  
        'xxl': '32px', 
        '2xl': '44px',  
      },
    },
  },
  plugins: [],
};

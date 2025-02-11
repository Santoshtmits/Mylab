/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all paths for React files
  ],
  theme: {
    extend: {
      fontfamily: {
        mons: ['Montserrat']
      },
      fontWeight: {
        regular: 400, 
        small:500, 
        medium: 600,   
        bold: 700, 
      },
      fontSize: {
        'xxs': '10px', 
        'xm': '14px',  
        'tiny': '12px',   
        'xxl': '32px',   
      },
    },
  },
  plugins: [],
};

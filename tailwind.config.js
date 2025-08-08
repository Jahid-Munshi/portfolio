/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true, // centers the container
      padding: '1rem', // adds horizontal padding
      screens: {
        sm: '100%',     // no max-width on small screens
        md: '641px',
        lg: '1025px',
        xl: '1281px',
        '2xl': '1537px', // you can customize this as needed
      },
    },
    extend: {},
  },
  plugins: [],
};

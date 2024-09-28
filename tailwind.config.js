/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: '2rem', 
        screens: {
          sm: "100%",    // kichik ekranlarda container kengligi 100% bo'ladi
          md: "768px",   // o'rta ekranlarda container kengligi 768px bo'ladi
          lg: "1024px",  // katta ekranlarda container kengligi 1024px bo'ladi
          xl: "1280px",  // juda katta ekranlarda container kengligi 1280px bo'ladi
        },
      },
    },
  },
  plugins: [],
}

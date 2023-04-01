/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      spacing: {
        '15px': "15px",
      },
      colors: {
        "blue": "#001AFF",
      },
      fontWeight: {
        regular: '400',
        md: '500',
        "semi-bold": '600',
      }
    },
  },
  plugins: [],
}

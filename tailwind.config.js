module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'my_bg_image': "url('./Images/bg4.png')",
      },
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        // Add more custom colors as needed
      },
      gradientColors: {
        'green-blue-orange': ['#00FF00', '#0000FF', '#FF8800'],
        // Add more gradient colors as needed
      },
    },
  },
  plugins: [],
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        glow: '0 25px 80px rgba(16, 185, 129, 0.12)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

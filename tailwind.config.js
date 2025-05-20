/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#151f24",
        card: "#0E1E24",
        primary: "#4B7BE5",
        secondary: "#6B8EE7",
        tertiary: "#8BA4EA",
        "accent-teal": "#3E9B9B",
        "accent-pink": "#F88379",
        navy: {
          100: "#E6E8ED",
          200: "#BFC4D3",
          300: "#98A0B9",
          400: "#717C9F",
          500: "#4A5885",
          600: "#3B466A",
          700: "#2C3450",
          800: "#1D2235",
          900: "#0E111B",
          950: "#070810",
        },
      },
      boxShadow: {
        neon: "0 0 10px rgba(75, 123, 229, 0.15)",
        "neon-strong": "0 0 15px rgba(75, 123, 229, 0.2)",
        card: "0 10px 30px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 15px 40px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-medium": "float 10s ease-in-out infinite 1s",
        "float-fast": "float 8s ease-in-out infinite 0.5s",
        "float-faster": "float 6s ease-in-out infinite 0.25s",
        "float-fastest": "float 4s ease-in-out infinite 0.1s",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s forwards",
        shimmer: "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "move-x": "move-x 20s linear infinite",
        "move-x-slow": "move-x 30s linear infinite",
        "move-x-fast": "move-x 10s linear infinite",
        "move-y": "move-y 20s linear infinite",
        "move-y-slow": "move-y 30s linear infinite",
        "move-y-fast": "move-y 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(50px, -50px)" },
          "50%": { transform: "translate(0, -100px)" },
          "75%": { transform: "translate(-50px, -50px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "move-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(600px)" },
        },
        "move-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(600px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-card":
          "linear-gradient(180deg, var(--card) 0%, rgba(14, 30, 36, 0.8) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

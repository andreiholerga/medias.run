/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#161A17",
          light: "#232823",
        },
        paper: {
          DEFAULT: "#F1EEE6",
          dim: "#E7E2D6",
        },
        trail: {
          DEFAULT: "#C7361F",
          dark: "#9C2A18",
          light: "#E85A3D",
        },
        moss: {
          DEFAULT: "#4B5D45",
          light: "#6E8A63",
        },
        gold: "#D9A441",
        mist: "#8C9187",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "topo-lines":
          "repeating-radial-gradient(circle at 20% 20%, rgba(199,54,31,0.06) 0, rgba(199,54,31,0.06) 1px, transparent 1px, transparent 34px)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadein: "fadein 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

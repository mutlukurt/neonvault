import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          ink: "#06000f",
          night: "#090014",
          plum: "#1a0731",
          magenta: "#ff2ea6",
          violet: "#9d52ff",
          cyan: "#38dbff"
        }
      },
      boxShadow: {
        neon: "0 10px 0 rgba(0,0,0,.18), 0 0 34px rgba(255,46,166,.12)",
        cyan: "0 8px 0 rgba(0,0,0,.16), 0 0 28px rgba(56,219,255,.12)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".65" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        soft: "var(--soft)",
        text: "var(--text)",
        muted: "var(--muted)",
        tertiary: "var(--tertiary)",
        border: "var(--border)",
        "border-soft": "var(--border-soft)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
          live: "var(--accent-live)",
        },
        live: {
          bg: "var(--live-bg)",
          border: "var(--live-border)",
          text: "var(--live-text)",
        },
      },
      animation: {
        "float-slow": "float-slow 12s ease-in-out infinite",
        "float-slower": "float-slower 16s ease-in-out infinite",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.6" },
          "25%": { transform: "translateY(-8px) translateX(4px)", opacity: "0.8" },
          "50%": { transform: "translateY(-4px) translateX(-4px)", opacity: "0.5" },
          "75%": { transform: "translateY(-12px) translateX(2px)", opacity: "0.7" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.5" },
          "33%": { transform: "translateY(-6px) translateX(-6px)", opacity: "0.7" },
          "66%": { transform: "translateY(-10px) translateX(4px)", opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

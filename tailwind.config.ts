import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: "#0E0E0E",
          surface: "#161616",
          border: "#242424",
        },
        bone: {
          DEFAULT: "#F4F4F2",
          muted: "#8E8E8A",
        },
        vermilion: {
          DEFAULT: "#E53935",
          hover: "#D32F2F",
        },
      },
      fontFamily: {
        sans: ["Switzer", "General Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Menlo", "monospace"],
      },
      letterSpacing: {
        architectural: "0.08em",
        tightest: "-0.04em",
      },
      borderWidth: {
        hairline: "1px",
      },
    },
  },
  plugins: [],
};

export default config;

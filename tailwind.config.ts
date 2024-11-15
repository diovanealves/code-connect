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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sidebar-background": "#171D1F",
        "card-post-section-background": "#171D1F",
        "card-post-section-foreground": "#888888",
      },
      width: {
        "card-post-width": "1000px",
      },
    },
  },
  plugins: [],
};
export default config;

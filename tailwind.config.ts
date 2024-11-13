import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs':'400px',
        'xs': '480px', 
        'sm': '700px', 
        'md': '800px', 
        'mmd': '1000px',
        'lg': '1100px', 
        'xl': '1440px',
        'max-md': { 'max': '1000px' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        card: "1px 2px 2px 1px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8C7E77',
        'grey' : '#D9D9D9',
        'gold' : "#958052",
        'bg' : "#EEEEEE"
      }
    },
  },
  plugins: [],
};
export default config;

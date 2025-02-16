import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adding our own theme color using tailwind CSS, This color will be added to the property name primary.
      colors: {
        primary: '#7856ff'
      },
      screens: {
        xsm: '400px'
      }
    },
  },
  plugins: [],
} satisfies Config;

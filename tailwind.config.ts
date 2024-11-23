import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "420px",
      sm: "640px",
      md: "768px",
      xlg: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        primary: "#120A44",
        default: "#F9FAFB",
        footer: "#072134",
        icon: "#154060",
        "pink-badge": "#F64459",
        Clr8584: "#858484",
        ClrEF67: "#EF6712",
        Clr611F: "#611F69",
        Clr5204: "#520477",
        Clr4002: "#40024A",
        ClrA5A1: "#A5A1A7",
      },

      boxShadow: {
        headerShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        bottomButtonBoxShadow: "0px -3px 4px 0px rgba(0, 0, 0, 0.25)",
      },

      borderRadius: {
        bottomButtonBorderRadius: "10px 10px 0px 0px",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#120A44",
              foreground: "#FFFF",
            },
            danger: {
              DEFAULT: "#dc2626",
              foreground: "#FFFF",
            },
            default: {
              DEFAULT: "#F9FAFB",
              foreground: "#000",
            },
          },
        },
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: "hsl(var(--cyan-300) / <alpha-value>)",
          500: "hsl(var(--cyan-500) / <alpha-value>)",
        },
        red: {
          300: "hsl(var(--red-300) / <alpha-value>)",
          500: "hsl(var(--red-500) / <alpha-value>)",
        },
        blue: {
          100: "hsl(var(--blue-100) / <alpha-value>)",
          300: "hsl(var(--blue-300) / <alpha-value>)",
          310: "hsl(var(--blue-310) / <alpha-value>)",
          400: "hsl(var(--blue-400) / <alpha-value>)",
          800: "hsl(var(--blue-800) / <alpha-value>)",
          900: "hsl(var(--blue-900) / <alpha-value>)",
        },
      },
      blurRadius: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addVariant, addUtilities }) {
      addUtilities({
        ".thumb-shadow": {
          "box-shadow": "0 17px 40px -4px hsl(var(--cyan-500))",
        },
      });
      matchUtilities(
        {
          customShadow: (value) => ({
            boxShadow: `0 0 ${value} rgba(0 0 0 / 0.2)`,
          }),
        },
        {
          values: theme("blurRadius"),
        }
      );
      addVariant("thumb", ["&::-webkit-slider-thumb", "&::-moz-range-thumb"]);
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};

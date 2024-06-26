/** @type {import('tailwindcss').Config} */

const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
          "url('/assets/img/brooke-lark-HlNcigvUi4Q-unsplash.jpg')",
      },
      height: {
        "hero-height": "400px",
      },
      backgroundColor: {
        mint: "#e3efe1",
        purpple: "#e38af7",
        lightpurpple: "#e8ceef",
      },
      fontFamily: {
        primary: ["PT Serif", "serif"],
        headings: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections(["mdi", "lucide"]),
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 빌드할 때 사용되지 않는 클래스는 제거됩니다. : 최적화
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
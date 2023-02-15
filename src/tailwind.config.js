/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< Updated upstream:src/tailwind.config.js
  // 빌드할 때 사용되지 않는 클래스는 제거됩니다. : 최적화
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
=======
  content: ["./src/**/*.{html}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
>>>>>>> Stashed changes:tailwind.config.js
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
<<<<<<< Updated upstream:src/tailwind.config.js
};
=======
};

//최적화 부분은 잘 모르겠네요..
>>>>>>> Stashed changes:tailwind.config.js

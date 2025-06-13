/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'vscode-dark',
    'vscode-light',
    'solarized-dark',
    'solarized-light',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

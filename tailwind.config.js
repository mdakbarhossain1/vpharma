/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        customBlue: '#3b82f6',
        customGreen: '#0cb88e',
        customRed: '#ef4444',
        customYellow: '#f59e0b',
        customGray: '#6b7280',
      },
    },
  },

}


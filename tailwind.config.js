/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "fig-black": "#000112",
        "fig-dark-grey": "#2B2C37",
        "fig-light-grey": "#F4F7FD",
        "fig-lines-dark": "#3E3F4E",
        "fig-lines-light": "#E4EBFA",
        "fig-main-purple": "#635FC7",
        "fig-main-purple-hover": "#A8A4FF",
        "fig-medium-grey": "#828FA3",
        "fig-red": "#EA5555",
        "fig-red-hover": "#FF9898",
        "fig-very-dark-hover": "#20212C"
      }
    },
  },
  plugins: [],
}


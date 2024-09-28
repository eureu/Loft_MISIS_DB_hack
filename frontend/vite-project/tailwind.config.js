import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",         
      flowbite.content(),
    ],
    theme: {
      extend: {
        colors: {
          'regal-blue': '#1C232B',
          'dark-blue-outline': '#29333D',
          'dark-blue-main': '#14191F',
          'dark-hover-search': '#29333D',
          'blue-button': '#00A1E7',
          'hover-blue-button': '#1EABE9',
          'sidebar-item-hover': '#29333D',
          'scrollbar': '#3D4A58',
          'white': '#FFFFFF',
        },
        height: {
          '205': '72px',
        },
        margin: {
          '205': '72px',
        },
        width: {
          '305': '261px',
        }
      }
      },
    plugins: [
      flowbite.plugin(),
      require('tailwind-scrollbar'),
    ],
  }
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
          'button-blue': "#4778eb",
          'button-red': "red",
          'grey-border': 'rgb(0,0,0, 0.14)',
          'grey-text': '#6F767E',
          'tx-green': '#83BF6E',

        },
      }
      },
    plugins: [
      flowbite.plugin(),
    ],
  }
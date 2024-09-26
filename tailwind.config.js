/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      fontSize:{
          xsm: "0.875rem", //14px
          sm: "0.93751rem", //15px
          lg: "1.125rem", //18px
          xlg: "1.25rem", //20px
          basic: "1rem", //16px
          hero: "3.25rem", //52px
          header: "2.25rem" //36px
      },
      padding: {
        sides: '13rem', 
        top: "3rem"
      },

      fontWeight: {
        xsm: "400",
        sm: "500",
        lg: "600",
        header: "700",
        hero: "800"
    },

      colors:{
        primary: "#C7AE2E",
        secondary: "#000000", //black
        basic: "#FFFFFF", //white
        navLink: "#F3F3F3",
        btnText: "#242424",
        regular: "#757575",
        bg1: "#DADADA"
      },

      screens: {
        "small": "400px",
        "medium": "768px",
        'large': '900px',
        "xlarge": "1900px"
      },
      fontFamily: {
        "primary": ['Inter'],
      },
    },
  },
  plugins: [],
}


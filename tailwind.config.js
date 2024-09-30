/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontSize: {
        xsm: "1.4rem", //14px
        sm: "1.5rem", //15px
        lg: "1.8rem", //18px
        xlg: "2rem", //20px
        basic: "1.6rem", //16px
        forty: "4.0rem", //40px
        hero: "5.2rem", //52px
        header: "3.6rem", //36px
      },
      padding: {
        msides: "3rem", //for mobile
        tsides: "8rem", //tablet
        sides: "15rem",
        top: "3rem",
      },
      margin: {
        top: "3rem",
        sm: "2rem",
        regular: "5rem",
        xsm: "1rem"
      },

      fontWeight: {
        xsm: "400",
        sm: "500",
        lg: "600",
        xlg: "900",
        header: "700",
        hero: "800",
      },

      colors: {
        primary: "#C7AE2E",
        primaryColor: "#C7AE2E",
        secondary: "#000000", //black
        secondaryColor: "#000000",
        basicColor: "#FFFFFF", //white
        navLinkColor: "#F3F3F3",
        bannerNavColor: "#C3C3C3",
        btnText: "#242424",
        btnTextColor: "#242424",
        regular: "#757575",
        regularColor: "#757575",
        bg1: "#DADADA",
        bg1Color: "#DADADA",
        mainBorder: "#EEF0F3",
      },

      screens: {
        small: "400px",
        medium: "768px",
        large: "900px",
        xlarge: "1900px",
      },
      fontFamily: {
        primary: ["Inter"],
        title: ["Roboto", "sans-serif"],
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    plugins: [require("flowbite/plugin")],
    theme: {
        extend: {
            keyframes: {
                slideInFromLeft: {
                    '0%': {transform: 'translateX(-100%)', opacity: '0'},
                    '100%': {transform: 'translateX(0)', opacity: '1'},
                },
                slideInFromRight: {
                    '0%': {transform: 'translateX(100%)', opacity: '0'},
                    '100%': {transform: 'translateX(0)', opacity: '1'},
                },
                'text-slide-3': {
                    '0%, 26.66%': {
                        transform: 'translateY(0%)',
                    },
                    '33.33%, 60%': {
                        transform: 'translateY(-25%)',
                    },
                    '66.66%, 93.33%': {
                        transform: 'translateY(-50%)',
                    },
                    '100%': {
                        transform: 'translateY(-75%)',
                    },
                },
                'text-slide-4': {
                    '0%, 20%': {
                        transform: 'translateY(0%)',
                    },
                    '25%, 45%': {
                        transform: 'translateY(-20%)',
                    },
                    '50%, 70%': {
                        transform: 'translateY(-40%)',
                    },
                    '75%, 95%': {
                        transform: 'translateY(-60%)',
                    },
                    '100%': {
                        transform: 'translateY(-80%)',
                    },
                },
            },
            animation: {
                slideInLeft: 'slideInFromLeft 0.5s ease-out forwards',
                slideInRight: 'slideInFromRight 0.5s ease-out forwards',
                'text-slide-3': 'text-slide-3 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
            },
            fontSize: {
                xsm: "1.4rem", //14px
                sm: "1.5rem", //15px
                lg: "1.8rem", //18px
                xlg: "2rem", //20px
                basic: "1.6rem", //16px
                basicText: "1.6rem",
                forty: "4.0rem", //40px
                hero: "5.2rem", //52px
                header: "3.6rem" //36px
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
                xsmall: "400",
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

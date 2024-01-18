import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            screens: {
                mobile: { min: "300px", max: "810px" },
                tablet: { min: "811px", max: "1199px" },
                desktop: "1200px",
            },
            colors: {
                main: "#2746e3",
                "color-back": "#0D0D0D",
            },
            keyframes: {
                "gradient": {
                    "0%": {backgroundPosition: "0% 50%"},
                    "100%": {backgroundPosition: "100% 50%"},
                },
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "gradient": "gradient 6s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), nextui()],
};

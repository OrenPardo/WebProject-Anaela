/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                primary: "#2A6B6B",
                "primary-dark": "#1E4F4F",
                "primary-light": "#3A8585",
                accent: "#C4A35A",
                "brand-bg": "#FAF8F5",
                "section-gray": "#F5F6F8",
                "text-main": "#333333",
                "text-muted": "#666666",
            },
            fontFamily: {
                sans: ['"Heebo"', "sans-serif"],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"], // Ensure Tailwind scans your HTML files
    theme: {
        extend: {
            colors: {
                primary: "#7C0B83",
                primaryLight: "#ECD8ED",
                secondary: "#B9047D",
            },
        },
    },
    plugins: [],
};
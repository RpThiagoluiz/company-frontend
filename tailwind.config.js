/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                home: 'url("/src/images/backgroundImage.png")',
            },
            dropShadow: {
                '3xl': '5px 5px 15px rgba(0, 250, 0, 0.75)',
            },
            animation: {
                blink: 'blink 1s linear infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: 0 },
                    '25%, 75%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
}

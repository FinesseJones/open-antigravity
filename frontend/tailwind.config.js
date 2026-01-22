/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tacf-gold': '#FFD700',
                'tacf-purple': {
                    DEFAULT: '#6A0DAD',
                    light: '#9D4EDD',
                    dark: '#4B0082',
                },
                'tacf-blue': {
                    DEFAULT: '#007BFF',
                    dark: '#0056b3',
                    navy: '#001f3f'
                },
                'tacf-dark': '#0a0a0a',
                'tacf-panel': '#1a1a1a',
            },
            backgroundImage: {
                'tacf-gradient': 'linear-gradient(135deg, #001f3f 0%, #4B0082 50%, #FFD700 100%)',
                'tacf-ombre': 'linear-gradient(to bottom, #4B0082, #9D4EDD)',
            }
        },
    },
    plugins: [],
}

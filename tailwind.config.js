module.exports = {
    purge: [
        './page/**/*{js, ts, jsx,, tsx}',
        './components/**/*.{js, ts, jsx, tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                darked: '#1b1717',
                primaryRed: '#810000',
                secundaryRed: '#ce1212',
                primaryColor: '#eeebdd',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: ['tailwindcss'],
}

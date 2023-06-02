const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/",
    pluginOptions: {
        windicss: {
            config: {
                theme: {
                    fontFamily: {
                        displayMedium: ['SF-Pro-Display-Medium', 'sans-serif'],
                        displaySemiBold: ['SF-Pro-Display-Semibold', 'sans-serif'],
                        displayBold: ['SF-Pro-Display-Bold', 'sans-serif'],
                        displayHeavy: ['SF-Pro-Display-Heavy', 'sans-serif'],
                        sansLight: ['SF Pro Text Light', 'sans-serif'],
                        sans: ['SF Pro Text Regular', 'sans-serif'],
                        sansMedium: ['SF Pro Text Medium', 'sans-serif'],
                        sansSemiBold: ['SF Pro Text Semibold', 'sans-serif'],
                        sansBold: ['SF Pro Text Bold', 'sans-serif'],
                    },
                    textShadow: {
                        title: '0 0 17px #fff',
                    },
                    colors: {
                        body: '#111113',
                        red: '#E44240',
                        blue: '#5773D6',
                        gray: '#9e9e9e',
                    },
                },
            },
        },
    },
});

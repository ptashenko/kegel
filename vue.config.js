const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "~@/assets/scss/styles.scss";
            @import "~@/assets/scss/fonts.scss";
            `,
            },
        },
    },
});
module.exports = {
    transpileDependencies: ['vuetify'],
    publicPath:
        process.env.NODE_ENV === 'production' ? '/adivina-tu-familiar' : '/',
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/app.scss";`,
            },
        },
    },
}

const path = require('path');

// IMPORTANDO O PLUGIN
const babiliPlugin = require('babili-webpack-plugin');

// COMEÇA COM NENHUM PLUGIN
let plugins = []

if (process.env.NODE_ENV == 'production') {

    // SE FOR PRODUCTION, ADICIONA O PLUGIN NA LISTA

    plugins.push(new babiliPlugin());
}

module.exports = {
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    // mesma coisa que plugins: plugins
    plugins
}
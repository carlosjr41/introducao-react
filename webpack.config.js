
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, exclude: /node_modules/, loader: "style-loader"},
            { test: /\.css$/, exclude: /node_modules/, loader: "css-loader"}
        ]
    },
    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },
    plugins: [HTMLWebpackPluginConfig]
};
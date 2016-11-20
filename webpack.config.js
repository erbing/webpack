const webpack =  require("webpack");

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        publicPath: 'build/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            // css loader
            { test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin("this is build js banner")
    ]
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: 'js/[name].js', // [hash:8]
        path: path.resolve(__dirname, 'build'),
        publicPath: '/' // assets
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9090,
        // hot: false,
        // inline: false,
        writeToDisk: false // RAM
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    }
}
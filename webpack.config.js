module.exports = {
    entry: './src/index.js',
    output: {
        path: '.',
        filename: 'mithril_inf.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
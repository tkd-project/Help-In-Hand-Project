module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './public/js/app-bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'sourcemap'
}
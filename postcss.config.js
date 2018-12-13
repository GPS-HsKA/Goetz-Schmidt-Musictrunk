module.exports = {
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: {
        autoprefixer: {}
    }
};

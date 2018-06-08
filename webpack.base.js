//Tell webpack to run babel on every file it runs through
module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', //jsx
                        'stage-0', //async code
                        ['env', { targets: {browsers: ['last 2 versions']} }] // include the code to be interpreted in the last 2 versions
                    ]
                }
            }
        ]
    }
};
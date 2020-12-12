var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/LabelEditable.js',
    output: {
        path: path.resolve('lib'),
        filename: 'LabelEditable.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
              test: /\.css$/i,
              exclude: /(node_modules)/,
              use: ["style-loader", "css-loader"],
            },
        ]
    },
    externals: [
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          },
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
          }
        }
    ]
}
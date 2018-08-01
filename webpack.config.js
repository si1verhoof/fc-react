const path = require("path");


module.exports = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: "babel-loader”,
                exclude: /node_modules/
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
      inline: true,
      port: 10000
    },
}
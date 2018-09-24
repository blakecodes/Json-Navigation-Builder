var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        builder: './builder.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        },
        modules: [
            "node_modules"
        ]
    }
}
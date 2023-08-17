const path = require('path');
const contentBase = require('html-webpack-plugin'); 

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new contentBase({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};

// "__dirname" significa que deve entrar na pasta geral, nesse caso, a "FRONTEND" (está indicando o caminho do arquivo)

// a regra (rule) quis dizer: quando tiver um arquivo ".js" que não estiver dentro da pasta "node_modules" (porque, se estiver lá dentro, ele já converte sozinho), então deve ser convertido (com o babel-loader)
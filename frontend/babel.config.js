module.exports = {
    presets: [
        '@babel/preset-env',  
        '@babel/preset-react' 
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};

//@babel/preset-env: converte o código para uma versão mais adequada ao browser

//@babel/preset-react: adiciona as funcionalidades do react nessa conversão para o browser
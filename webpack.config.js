// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // ou o caminho para o seu arquivo de entrada principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // ou o diretório de saída desejado
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // outras regras, se necessário
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000, // ou outra porta, se preferir
  },
};

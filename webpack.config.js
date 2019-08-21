module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader' ,'css-loader'],
        test: /\.css$/
      },
      {
        use: [
          'file-loader',
           {

          loader: 'image-webpack-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/',
            useRelativePath: true
          }}
        ],
        test: /\.(jpg|png|gif|jpeg)$/
      }

    ]
  }
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({  
//       filename: 'index.html',
//       template: __dirname + '/src/public/index.html',
//       hash: true
//     }),
//     new MiniCSSExtractPlugin()
//   ],
//   module: {
//     rules: [
//       { 
//         test: /\.css$/, 
//         loader: [
//           MiniCSSExtractPlugin.loader,
//           "css-loader"
//         ]
//       }
//     ]
//   }
// }

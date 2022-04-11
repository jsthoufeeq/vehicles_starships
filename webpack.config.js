const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: '/src/index.js',
    output: { path: path.resolve(__dirname, 'dist') },
    stats: { children: true },
    devServer: {
      /* Todo proxy setup */
      // proxy: {
      //   '/api': {
      //     target: 'https://swapi.dev/api',
      //     secure: false,
      //     pathRewrite: { '^/api': '' },
      //     changeOrigin: true
      //   }
      // },
      static: {
        publicPath: '/',
      },
      open: true,
      hot: true,
      client: {
        reconnect: 5,
      },
      port: 8080,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(scss)$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            loader: 'sass-loader'
          }]
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  }
};
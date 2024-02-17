import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { resolve } from 'path'
import Dotenv from 'dotenv-webpack'

const __dirname = process.cwd()


const config = {
  entry: './client/main.jsx',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html'
    }),
    new Dotenv()
  ]
}

export default config

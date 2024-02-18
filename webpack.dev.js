import { merge } from 'webpack-merge'

import common from './webpack.common.js'

const PORT = process.env.SERVER_ADDRESS || 10000

const config = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8081,
    host: 'localhost',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      context: ['/api'],
      target: `http://localhost:${PORT}`
    }
  }
}

export default merge(common, config)

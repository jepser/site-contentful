const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {

    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL)
      })
    )

    return config
  }
}

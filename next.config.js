const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const contentClient = require('./transport/contentful')

module.exports = {
  async exportPathMap () {
    const data = await contentClient.getEntries()

    const pages = data.items
      .filter(entry => !!entry.fields.slug)
      .reduce(
        (pages, entry) =>
          Object.assign({}, pages, {
            [`/${entry.sys.contentType.sys.id}/${entry.fields.slug}`]: {
              page: '/article',
              query: { slug: entry.fields.slug, type: entry.sys.contentType.sys.id }
            }
          }),
        {}
      )


    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/contact': { page: '/contact'},
      '/labs': { page: '/labs' },
      '/articles': { page: '/articles' }
    })
  },
  webpack: (config) => {

    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv),
      new webpack.DefinePlugin({
        'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
        'process.env.CONTENTFUL_TOKEN': JSON.stringify(process.env.CONTENTFUL_TOKEN)
      })
    )

    return config
  }
}

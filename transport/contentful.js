const {createClient} = require('contentful')

const contentClient = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_TOKEN}`,
  host: process.env.CONTENTFUL_API_BASE_URL || null
})

module.exports = contentClient

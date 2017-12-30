const {createClient} = require('contentful')

const contentClient = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_TOKEN}`
})

module.exports = contentClient

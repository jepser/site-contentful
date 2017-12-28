const {createClient} = require('contentful')

const contentClient = createClient({
  space: `${process.env.SPACE_ID}`,
  accessToken: `${process.env.ACCESS_TOKEN}`
})

module.exports = contentClient

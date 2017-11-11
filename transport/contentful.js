import {createClient} from 'contentful'

const contentClient = createClient({
  space: `${process.env.SPACE_ID}`,
  accessToken: `${process.env.ACCESS_TOKEN}`
})

export default contentClient

import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'

import {
  Preview
} from '../components/Articles'


const Index = (props) => {

  const {
    items
  } = props.data

  console.log(props)
  
  return(
    <Page title='Artículos - Jepser Bernardino' theme="dark">
      {
        items.map(item => (
          <Preview key={item.sys.id} {...item} />
        ))
      }
    </Page>
  )
}

Index.getInitialProps = async () => {

  const data = await contentClient.getEntries({ content_type: 'post'})
  return { data }
}

export default Index

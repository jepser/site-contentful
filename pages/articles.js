import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'

import {
  Preview
} from '../components/Articles'

import Content from '../components/Content'

const Index = (props) => {

  const {
    items
  } = props.data
  
  return(
    <Page title='Artículos | Jepser Bernardino - Frontend developer & WordPress expert'>
      <Content>
      {
        items.map(item => (
          <Preview key={item.sys.id} {...item} />
        ))
      }
      </Content>
    </Page>
  )
}

Index.getInitialProps = async () => {

  const data = await contentClient.getEntries({ content_type: 'articles'})
  return { data }
}

export default Index

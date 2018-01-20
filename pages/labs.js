import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'

import Labs, {
  Preview
} from '../components/Labs'


const Index = (props) => {

  const {
    items
  } = props.data
  
  return(
    <Page title='Labs | Jepser Bernardino - Frontend developer & WordPress expert' theme="dark">
      {
        items.map(item => (
          <Preview key={item.sys.id} {...item} />  
        ))
      }
    </Page>
  )
}

Index.getInitialProps = async () => {

  const data = await contentClient.getEntries({ content_type: 'labs', order: '-sys.createdAt' })
  return { data }
}

export default Index

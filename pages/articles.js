import contentClient from '../transport/contentful'
import Page from '../layouts/base'

import {
  Preview
} from '../components/Articles'

import Content from '../components/Content'
import Notice from '../components/Notice'

const Index = (props) => {
  const {
    items
  } = props.data

  return (
    <Page title='Artículos' description='Artículos sobre programación, emprendimiento y trabajo remoto.'>
      <Content>
        {
          items.map(item => (
            <Preview key={item.sys.id} {...item} />
          ))
        }
        <Notice />
      </Content>
    </Page>
  )
}

Index.getInitialProps = async () => {
  const data = await contentClient.getEntries({ content_type: 'articles', order: '-sys.createdAt' })
  return { data }
}

export default Index

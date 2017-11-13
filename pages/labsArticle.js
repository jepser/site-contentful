import fetch from 'isomorphic-fetch'
import ReactMarkdown from 'react-markdown'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'
import Content from '../components/Content'
import {
  Link,
  Paragraph
} from '../components/Content/styled-components'
import {
  ArticleTitle
} from '../components/Labs/styled-components'

const Index = (props) => {

  const {
    fields
  } = props.data

  const renderers = {
    'link': (props) => {
      return <Link {...props} />
    },
    'paragraph': (props) => {
      return <Paragraph {...props} />
    }
  }

  return(
    <Page title={`${fields.title} - Jepser Bernardino`}>
      <Content>
      <ArticleTitle>{fields.title}</ArticleTitle>
      <ReactMarkdown source={fields.content} renderers={renderers} />
      </Content>
    </Page>
  )
}

Index.getInitialProps = async ({query}) => {

  const data = await contentClient.getEntries({
    'content_type': `${query.type}`,
    'fields.slug' : `${query.slug}`
  })
  const items = await data.items.length ? data.items[0] : []

  return { data: items }
}

export default Index

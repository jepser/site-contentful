import fetch from 'isomorphic-fetch'
import ReactMarkdown from 'react-markdown'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'
import Content from '../components/Content'
import {
  Link,
  Paragraph,
  ImageContainer,
  Image,
  Heading
} from '../components/Content/styled-components'
import {
  ArticleTitle
} from '../components/Labs'

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
    },
    'image': (props) => {
      return <Image {...props} align={props.align} />
    },
    'heading': (props) => {
      return <Heading {...props} />
    }
  }

  return(
    <Page title={`${fields.title} - Jepser Bernardino`}>
      <ArticleTitle color={fields.color || '#333'}>{fields.title}</ArticleTitle>
      <Content>
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

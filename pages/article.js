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
  Heading,
  Code,
  Pre,
  ListItem,
  CtaLink
} from '../components/Content/styled-components'
import {
  ArticleTitle
} from '../components/Labs'
import Notice from '../components/Notice'

const Index = (props) => {

  const {
    fields
  } = props.data

  const pageColor = fields.color || '#333'

  const renderers = {
    'paragraph': (props) => {
      return <Paragraph {...props} />
    },
    'image': (props) => {
      return <Image {...props} align={props.align} />
    },
    'heading': (props) => {
      return <Heading {...props} />
    },
    'listItem': (props) => {
      return <ListItem {...props} />
    },
    'code': ({value, ...args}) => {

      if(args.language !== 'cta') {
        return <Pre {...args}>{value}</Pre>
      }
      
      return <CtaLink value={value} color={pageColor} />
    },    
    'inlineCode': (props) => {
      return <Code {...props} />
    }
  }

  let coverImage = null

  if(fields.thumbnail) {
    coverImage = fields.thumbnail.fields.file.url
  }

  return(
    <Page title={`${fields.title} - Jepser Bernardino`}>
      <ArticleTitle color={pageColor}  background={coverImage}>{fields.title}</ArticleTitle>
      <Content>
        <ReactMarkdown source={fields.content} renderers={renderers} />
        <Notice />
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

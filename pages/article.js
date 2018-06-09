import fetch from 'isomorphic-fetch'
import { ThemeProvider } from 'styled-components'

import contentClient from '../transport/contentful'
import Page from '../layouts/base'
import Content from '../components/Content'
import MarkDown from '../components/MarkDown'
import { ArticleTitle } from '../components/Labs'
import Notice from '../components/Notice'

const Index = props => {
  const { fields } = props.data

  const theme = {
    color: fields.color || '#333'
  }

  return (
    <ThemeProvider theme={theme}>
      <Page title={`${fields.title} - Jepser Bernardino`}>
        <ArticleTitle>{fields.title}</ArticleTitle>
        <Content>
          <MarkDown>{fields.content}</MarkDown>
          <Notice />
        </Content>
      </Page>
    </ThemeProvider>
  )
}

Index.getInitialProps = async ({ query }) => {
  const data = await contentClient.getEntries({
    content_type: `${query.type}`,
    'fields.slug': `${query.slug}`
  })
  const items = (await data.items.length) ? data.items[0] : []

  return { data: items }
}

export default Index

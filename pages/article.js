import { ThemeProvider } from 'styled-components'
import contentClient from '../transport/contentful'
import Page from '../layouts/base'
import Content from '../components/Content'
import MarkDown from '../components/MarkDown'
import { ArticleTitle } from '../components/Labs'
import Notice from '../components/Notice'

const Index = props => {
  const {
    color,
    title,
    description,
    content
  } = props.fields

  const theme = {
    color: color || '#333'
  }

  return (
    <ThemeProvider theme={theme}>
      <Page title={title} description={description}>
        <ArticleTitle>{title}</ArticleTitle>
        <Content>
          <MarkDown>{content}</MarkDown>
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
  const item = data.items.length ? data.items[0] : {}

  return item
}

export default Index

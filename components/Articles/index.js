import moment from 'moment'
import Link from 'next/link'
import {
  Wrap,
  Title,
  PublishDate,
  Excerpt,
  Labs,
  Content,
  Item
} from './styled-components'

export const Preview = (props) => {
  const {
    title,
    excerpt,
    slug,
    color
  } = props.fields

  const {
    createdAt,
    id
  } = props.sys
  const publishedDate = moment(createdAt).locale('es').format('MMMM Do, YYYY')
  return(
    <Wrap color={color || '#333'}>
      <Content>
        <Item>
          <PublishDate>{publishedDate}</PublishDate>
          <Title>
            <Link href={`/labsArticle?slug=${slug}&type=articles`} as={`/articles/${slug}`}>
              <a>{title}</a>
            </Link>
          </Title>
          <Excerpt>{excerpt}</Excerpt>
        </Item>
      </Content>
    </Wrap>
  )
}

export default Labs

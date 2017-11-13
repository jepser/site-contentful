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
  const publishedDate = moment(createdAt).format('MMMM Do, YYYY')
  return(
    <Wrap color={color}>
      <Content>
        <Item>
          <PublishDate>{publishedDate}</PublishDate>
          <Title>
            <Link href={`/labsArticle?slug=${slug}&type=labs`} as={`/labs/${slug}`}>
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

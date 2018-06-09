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

export const Preview = props => {
  const { title, excerpt, slug, color, thumbnail } = props.fields

  let coverImage = null

  if (thumbnail) {
    coverImage = thumbnail.fields.file.url
  }

  const { createdAt, id } = props.sys
  const publishedDate = moment(createdAt).locale('es').format('MMMM Do, YYYY')
  return (
    <Wrap color={color}>
      <Item>
        <PublishDate>{publishedDate}</PublishDate>
        <Title>
          <Link
            href={`/article?slug=${slug}&type=articles`}
            as={`/articles/${slug}`}
          >
            <a>{title}</a>
          </Link>
        </Title>
        <Excerpt>{excerpt}</Excerpt>
      </Item>
    </Wrap>
  )
}

export default Preview

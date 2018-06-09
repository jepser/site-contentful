import moment from 'moment'
import Link from 'next/link'
import {
  Wrap,
  Title,
  PublishDate,
  Excerpt,
  Labs,
  Content,
  Item,
  ProjectLink,
  ContinueReading,
  Meta,
  MainTitle,
  TitleContent
} from './styled-components'

export const Preview = (props) => {
  const {
    title,
    excerpt,
    slug,
    color,
    projectUrl,
  } = props.fields

  const {
    createdAt,
    id
  } = props.sys
  
  const publishedDate = moment(createdAt).locale('es').format('MMMM Do, YYYY')
  return(
    <Wrap color={color}>
      <Content>
        <Item>
          <PublishDate>{publishedDate}</PublishDate>
          <Title>
            <Link href={`/article?slug=${slug}&type=labs`} as={`/labs/${slug}`}>
              <a>{title}</a>
            </Link>
          </Title>
          <Excerpt>{excerpt}</Excerpt>
          <Meta>
            <ProjectLink href={`${projectUrl}`}>Ver proyecto</ProjectLink>
            <Link href={`/article?slug=${slug}&type=labs`} as={`/labs/${slug}`} prefetch>
              <ContinueReading>Ver más</ContinueReading>
            </Link>
          </Meta>
        </Item>
      </Content>
    </Wrap>
  )
}

export const ArticleTitle = ({children}) => (
    <TitleContent>
      <MainTitle>{children}</MainTitle>
    </TitleContent>
)

export default Labs

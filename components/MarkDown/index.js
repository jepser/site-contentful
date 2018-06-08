import { createElement } from 'react'
import marksy from 'marksy'
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
} from './styled-components'

const MarkDown = ({ content, color }) => {
  const renderers = {
    'p': (props) => {
      return <Paragraph {...props} />
    },
    'h1': (props) => {
      return <Heading level={1} {...props} />
    },
    'h2': (props) => {
      return <Heading level={2} {...props} />
    },
    'h3': (props) => {
      return <Heading level={3} {...props} />
    },
    'h4': (props) => {
      return <Heading level={4} {...props} />
    },
    'img': (props) => {
      return <Image {...props} align={props.align} />
    },
    'li': (props) => {
      return <ListItem {...props} />
    },
    'code': ({ language, code }) => {
      if (language !== 'cta') {
        return <Pre>{code}</Pre>
      }

      return <CtaLink value={code} color={color} />
    },
    'codespan': (props) => {
      return <Code {...props} />
    }
  }
  const compile = marksy({
    createElement,
    elements: renderers
  })
  const compiled = compile(content)

  return(compiled.tree)
}
export default MarkDown

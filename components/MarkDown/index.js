import { createElement } from 'react'
import marksy from 'marksy/jsx'
import Cui from 'react-cui'

import {
  Paragraph,
  Image,
  Heading,
  Code,
  Pre,
  ListItem,
  CtaLink
} from './styled-components'

const MarkDown = ({ children, color }) => {
  const renderers = {
    p: props => {
      return <Paragraph {...props} />
    },
    h1: props => {
      return <Heading level={1} {...props} />
    },
    h2: props => {
      return <Heading level={2} {...props} />
    },
    h3: props => {
      return <Heading level={3} {...props} />
    },
    h4: props => {
      return <Heading level={4} {...props} />
    },
    img: props => {
      return <Image {...props} align={props.align} />
    },
    li: props => {
      return <ListItem {...props} />
    },
    code: ({ language, code }) => {
      if (language !== 'cta') {
        return <Pre>{code}</Pre>
      }

      return <CtaLink value={code} />
    },
    codespan: props => {
      return <Code {...props} />
    }
  }
  const compile = marksy({
    createElement,
    elements: renderers,
    components: {
      Cui (props) {
        return <Cui {...props} />
      }
    }
  })
  const compiled = compile(children)

  return compiled.tree
}
export default MarkDown

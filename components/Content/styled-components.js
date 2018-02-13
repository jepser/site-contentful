import styled from 'styled-components'
import {
  normalizeId
} from '../../helpers'

const makePopup = typeof document !== 'undefined'
  ? require('@typeform/embed').makePopup
  : null

export const Link = styled.a`
  display: inline-block;
  position: relative;
  color: inherit;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    width: 80%;
    height: 0;
    border-bottom: ${props => props.width ? props.width: '2px'} solid;
  }
`

const LinkWrap = styled.div`
  text-align: center;
  padding: 10px 0;
`

export const CtaAnchor = styled.a`
  background-color: ${props => props.color || '#333'};
  color: white;
  padding: 10px 45px;
  border: 0;
  font-size: 18px;
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  a {
    color: inherit;
    border-bottom: 2px solid;
  }
`

const ImageWrap = styled.span`
  display: block;
  text-align: ${props => props.align ? props.align : 'center'};
`

const ImageContent = styled.img`
  max-width: 100%;
  height: auto;
`

export const Code = styled.code`
  display: inline-block;
  padding: 0 5px;
  background-color: #F1F1F1;
  border-radius: 3px;
  border: 1px solid #CCC;
`

export const Pre = styled.pre`
  padding: 10px;
  background-color: #F1F1F1;
  border-radius: 3px;
  border: 1px solid #CCC;
  overflow: auto;
`

export const ListItem = styled.li`
  margin-bottom: 5px;
`

export const Image = (props) => {
  return (
    <ImageWrap align={props.align}>
      <ImageContent {...props} />
    </ImageWrap>
  )
}

const BasicHeading = styled.h1.attrs({
  id: props => normalizeId(props.children.toString())
})`
`

export const Heading = ({level, children}) => {
  const Title = BasicHeading.withComponent(`h${level}`)

  return <Title>{children}</Title>
}

export const CtaLink = ({value, color}) => {
  const matchLink = /\[([^]+)\]\(([^]+)\)/g
  const linkArgs = matchLink.exec(value)
  const popup = makePopup ? makePopup(linkArgs[2], {
    mode: 'popup'
  }) : null

  return (
    <LinkWrap>
      <CtaAnchor color={color} target='_blank' href={linkArgs[2]} onClick={ev => {
        ev.preventDefault()
        if (popup) {
          popup.open()
        }
      }}>{linkArgs[1]}</CtaAnchor>
    </LinkWrap>
  )
}

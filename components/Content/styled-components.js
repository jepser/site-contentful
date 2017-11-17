import styled from 'styled-components'
import {
  normalizeId
} from '../../helpers'

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

export const Paragraph = styled.p`
`

const ImageWrap = styled.span`
  display: block;
  text-align: ${props => props.align ? props.align : 'center'};
`

const ImageContent = styled.img`
  max-width: 100%;
  height: auto;
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

import styled from 'styled-components'

export const Link = styled.a`
  display: inline-block;
  position: relative;
  color: inherit;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    border-bottom: 2px solid;
  }
`

export const Paragraph = styled.p`
`

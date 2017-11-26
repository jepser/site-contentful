import styled, { 
  css
} from 'styled-components'

export const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 2;
`

export const MenuWrap = styled.div`
`

export const Item = styled.a`
  position: relative;
  display: block;
  float: left;
  clear: left;
  background: ${props => props.background ? props.background : 'white'};
  padding: 10px 10px 10px 40px;
  margin: 5px 0;
  color: ${props => props.color ? props.color : '#333'};

  ${props => props.active ? css`
     &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      max-width: 200px;
      height: 0;
      border-bottom: 2px solid;
    }
  `: ``}
`

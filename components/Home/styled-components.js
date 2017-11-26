import styled from 'styled-components'
import {default as Wrapper} from '../Content'

export const Title = styled.h1`
  font-weight: normal;
  font-size: 36px;

  a {
    position: relative;
    color: inherit;
    display: inline-block;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: white;
    }
  }
`

export const Spacer = styled.div`
  width: 200px;
  height: 5px;
  background-color: ${props => props.theme == 'light' ? 'white' : '#333'};
`

export const Container = styled(Wrapper)`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const Wrap = styled.div`
  overflow: hidden;
`

export const OppositeWrap = styled(Wrap)`
  background-color: #333;
  color: white;
`

export const Content = styled.div`
  flex: 1;
`

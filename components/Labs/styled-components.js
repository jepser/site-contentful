import styled from 'styled-components'

import {default as DefaultContent } from '../Content'
import {
  Link
} from '../Content/styled-components'

export const Title = styled.h2`
  font-size: 48px;
  font-weight: normal;
  color: white;
  margin: 30px 0;
  line-height: 1.2;

  a {
    color: inherit;
  }
`

export const Wrap = styled.div`
  padding: 20px;
  background-color: ${props => props.color ? props.color : '#333'};
`

export const Excerpt = styled.p`
  color: white;
`

export const PublishDate = styled.span`
  display: inline-block;
  margin: 0;
  padding: 5px;
  color: white;
  border: 2px solid;
  font-size: 10px;
  text-transform: uppercase;
`

export const Labs = styled.div`
  color: white;
`

export const Content = styled(DefaultContent)`
  display: flex;
  align-items: center;
  min-height: 80vh;
`

export const Item = styled.div`
`

export const TitleWrap = styled.div`
  background-color: ${props => props.color ? props.color : '#333'};
`

export const MainTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: normal;
  color: white;
`

export const TitleContent = styled(DefaultContent)`
  display: flex;
  align-items: center;
  min-height: 40vh;
`

export const Meta = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 0;
  color: white;
  font-size: 13px;
`

export const ContinueReading = styled(Link)`
  text-transform: uppercase;
  color: inherit;
  margin-right: 20px;
  &::after {
    bottom: -5px;
    width: 80%;
  }
`

export const ProjectLink = styled(ContinueReading)`
`

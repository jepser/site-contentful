import styled from 'styled-components'

import DefaultContent from '../Content'
import {
  Link
} from '../MarkDown/styled-components'

export const Title = styled.h2`
  font-size: 48px;
  font-weight: normal;
  color: white;
  margin: 30px 0;
  line-height: 1.2;

  a {
    color: inherit;
  }

  @media (max-width: 640px) {
    font-size: 24px;
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
  background-size: cover;
  background-position: center bottom;
  background-attachment: fixed;
`

export const MainTitle = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: 36px;
  font-weight: normal;
`

export const TitleContent = styled(DefaultContent)`
  min-height: 0;
  padding-top: 80px;
  padding-bottom: 0;

  @media (max-width: 640px) {
    padding-top: 40px;
  }

  &::after {
    content: '';
    width: 80px;
    margin-top: 40px;
    display: block;
    border-bottom: 4px solid;
  }
`

export const Meta = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 0;
  color: white;
  font-size: 13px;
`

export const ContinueReading = styled(Link)`
  margin-right: 20px;
  text-transform: uppercase;
  color: inherit;  
  text-decoration: none;
  &::after {
    bottom: -5px;
    width: 80%;
  }
`

export const ProjectLink = styled(ContinueReading)`
`

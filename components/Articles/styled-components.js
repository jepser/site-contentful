import styled from 'styled-components'

import {default as DefaultContent} from '../Content'

export const Title = styled.h2`
  font-size: 36px;
  font-weight: normal;
  color: white;

  a {
    color: inherit;
  }
`

export const Wrap = styled.div`
  padding: 20px;
  background-color: ${props => props.color ? props.color : 'white'};
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
  background-color: #333;
  display: flex;
  align-items: center;
  min-height: 80vh;
`

export const Item = styled.div`
`

export const ArticleTitle = styled.h1`
  font-size: 36px;
  font-weight: normal;
  color: #333;
`

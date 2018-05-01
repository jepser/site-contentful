import styled from 'styled-components'

import {default as DefaultContent} from '../Content'

export const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin: 10px 0;

  a {
    color: inherit;
  }
`

export const Wrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  background-color: ${props => props.color ? props.color : 'white'};
  background-image: ${props => props.background ? `url(${props.background})` : 'none'};
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  &::after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 2px solid;
  }

`

export const Excerpt = styled.p`
  font-family: 'IBM Plex Sans';
  margin: 0 0 20px;
`

export const PublishDate = styled.span`
  display: inline-block;
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
`

export const Labs = styled.div`
`

export const Item = styled.div`
`

export const ArticleTitle = styled.h1`
  font-size: 36px;
  font-weight: normal;
  color: #333;
`

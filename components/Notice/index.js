import styled from 'styled-components'
import Content from '../Content'

const Wrap = styled.div`
  text-align: center;
  padding: 30px 0 30px;
`

const Paragraph = styled.p`
  text-decoration: ${props => (props.strike ? 'line-through' : 'none')};
`

const Notice = () => {
  return (
    <Wrap>
      ·
      <br />
      <br />
      <Paragraph strike>🇨🇴 Colombia en abril, speaker en JS Colombia meetup.</Paragraph>
      <Paragraph strike>
        🇪🇸 Madrid el 20 y 21 de abril, speaker en
        {' '}
        <a href='https://2018.madrid.wordcamp.org/programa/' target='_blank'>
          WordCamp Madrid
        </a>
        .
      </Paragraph>
      <Paragraph strike>
        🇵🇹 Porto 18 y 19 de mayo, speaker en
        {' '}
        <a href='https://2018.porto.wordcamp.org/' target='_bank'>
          WordCamp Porto
        </a>
        .
      </Paragraph>
      <Paragraph>🇵🇱 Polonia 4 y 5 de Diciembre, speaker en <a href='http://frontend-con.io/' target='_blank'>Frontend Connect</a>.</Paragraph>
    </Wrap>
  )
}

export default Notice

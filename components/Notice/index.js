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
      <Paragraph strike>🇨🇴 Colombia del 17 de marzo al 9 de abril.</Paragraph>
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
      <Paragraph strike>
        🇷🇸 Serbia en Junio para el
        {' '}
        <a href='https://2018.europe.wordcamp.org/' target='_bank'>
          WordCamp Europe
        </a>
        .
      </Paragraph>
      <Paragraph>🇬🇹 Guatemala del 12 al 31 de Julio.</Paragraph>
      <Paragraph>🇨🇳 China del 7 de Septiembre al 2 de Octubre.</Paragraph>
    </Wrap>
  )
}

export default Notice

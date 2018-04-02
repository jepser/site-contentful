import styled from 'styled-components'
import Content from '../Content'

const Wrap = styled.div`
  text-align: center;
  padding: 30px 0 30px;
`

const Notice = ()  => {
  return(
    <Wrap>
      ·
      <br />
      <br />
      <p>🇨🇴 Colombia del 17 de marzo al 9 de abril.</p>
      <p>🇪🇸 Madrid el 20 y 21 de abril, speaker en <a href="https://2018.madrid.wordcamp.org/programa/" target="_blank">WordCamp Madrid</a>.</p>
      <p>🇵🇹 Porto 18 y 19 de mayo, speaker en <a href="https://2018.porto.wordcamp.org/" target="_bank">WordCamp Porto</a>.</p>
      <p>🇷🇸 Serbia en Junio para el <a href="https://2018.europe.wordcamp.org/" target="_bank">WordCamp Europe</a>.</p>
      <p>🇨🇳 China del 7 de Septiembre al 2 de Octubre.</p>
    </Wrap>
  )
}

export default Notice

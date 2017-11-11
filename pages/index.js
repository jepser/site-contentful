import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import contentClient from '../transport/contentful'
import Header from '../components/Header'
import Page from '../layouts/base'

import {
  Title,
  Spacer,
  Wrap,
  OppositeWrap,
  Content,
  Container
} from '../components/Home/styled-components'

const Index = (props) => {

  return(
    <Page title='Static public site'>
      <Wrap>
        <Container>
          <Content>
            <Title>Soy Jepser Bernardino. </Title>
            <Title>Frontend developer & WordPress expert de Guatemala.</Title>
            <Title>He colaborado con empresas como: <br/>Saatchi & Saatchi, BBDO, Taco Bell & Starmedia.</Title>
            <Title>Actualmente vivo en Barcelona y <br /> trabajo en Typeform.</Title>
            <Spacer />
          </Content>
        </Container>
      </Wrap>
      <OppositeWrap>
        <Container>
          <Content>
            <Title>Creé el primer <a href="https://www.typeform.com/blog/human-experience/cui/">artículo conversacional</a> del mundo. </Title>
            <Title>Desarrollé una <a href="http://spotify-youtube.jepser.com">aplicación</a> que convierte playlists the Spotify a Youtube.</Title>
            <Title>Integré WooCommerce y Credomatic, <a href="http://jepser.com/labs/woocommerce-credomatic/">creando un plugin</a> que hace posible los pagos en línea en Centro América.</Title>
          </Content>
        </Container>
      </OppositeWrap>
    </Page>
  )
}

export default Index

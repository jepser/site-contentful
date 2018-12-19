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
  return (
    <Page
      title='Jepser Bernardino | Frontend engineer from Guatemala 🇬🇹'
      description='Frontend engineer con 7 años de experiencia con tecnologías web. Escribo sobre frontend, sitios estáticos, React y performance, un poco de mi experincia con trabajo remoto y vida en Barcelona.'
    >
      <Wrap>
        <Container>
          <Content>
            <Title>Soy Jepser Bernardino.</Title>
            <Title>Frontend engineer de Guatemala.</Title>
            <Title>He colaborado con empresas como: <br />Saatchi & Saatchi, BBDO, Taco Bell & Starmedia.</Title>
            <Title>Co-fundador de <a href='https://royalestudios.com'>royalestudios</a>.</Title>
            <Title>Actualmente vivo en Barcelona y <br /> trabajo en Typeform.</Title>
            <Spacer />
          </Content>
        </Container>
      </Wrap>
      <OppositeWrap>
        <Container>
          <Content>
            <Title>Creé el primer <a href='https://www.typeform.com/blog/human-experience/cui/'>artículo conversacional</a> del mundo. </Title>
            <Title>Desarrollé una <a href='http://spotify-youtube.jepser.com'>aplicación</a> que convierte playlists the Spotify a Youtube.</Title>
            <Title>Integré WooCommerce y Credomatic, <a href='http://jepser.com/labs/woocommerce-credomatic/'>creando un plugin</a> que hace posible los pagos en línea en Centro América.</Title>
          </Content>
        </Container>
      </OppositeWrap>
    </Page>
  )
}

export default Index

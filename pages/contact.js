import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import styled from 'styled-components'

import contentClient from '../transport/contentful'
import Header from '../components/Header'
import Page from '../layouts/base'

import Content from '../components/Content'

const Wrap = styled.div`
  font-size: 36px;
`

const Container = styled.div`

`

const Index = (props) => {

  return(
    <Page title='Contacto | Jepser Bernardino - Frontend developer & WordPress expert'>
      <Content>
        <Wrap>
          <p>Envía un correo a: </p>
          <p>jepsersk8 [at] <br/>gmail [dot] <br/>com</p>
        </Wrap>
      </Content>
    </Page>
  )
}

export default Index

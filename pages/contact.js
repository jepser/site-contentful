import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import styled from 'styled-components'

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

const Iframe = styled.iframe`
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  border:0;
  z-index: 1;
`

const Index = (props) => {

  return(
    <Page title='Static public site'>
      <Wrap>
        <Iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://jepser.typeform.com/to/yQ1K0K" />
        <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
      </Wrap>
    </Page>
  )
}

export default Index

import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/Header'
import Tracking from '../components/Head'

const Wrap = styled.div`
  min-height: 100vh;
`

export default ({ children, title, theme }) => (
  <div>
    {process.env.NODE_ENV === 'production' && <Tracking />}
    <Head>
      <title>{title}</title>
    </Head>
    <Header theme={theme} />
    <Wrap>
    { children }
    </Wrap>
  </div>
)

import Head from 'next/head'

import Header from '../components/Header'

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <div>
    { children }
    </div>
  </div>
)

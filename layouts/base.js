import Head from 'next/head'

import Header from '../components/Header'

export default ({ children, title, theme }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header theme={theme} />
    <div>
    { children }
    </div>
  </div>
)

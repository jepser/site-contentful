import { injectGlobal, ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

injectGlobal`
  
  @font-face {
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  src: url("/static/fonts/IBMPlexSerif-Regular-Latin1.woff2") format("woff2"), url("/static/fonts/IBMPlexSerif-Regular-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans';
    min-height: 100%;
  }
  
  h1, h2, h3, h4, h5, button, input {
    font-family: 'IBM Plex Sans';
  }

  html {
    min-height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Jepser Bernardino</title>
          <link rel='icon' href='/static/favicon.ico' />
          <meta charSet='utf-8' />
          <link
            href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans'
            rel='stylesheet'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

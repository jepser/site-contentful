import { createGlobalStyle, ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    min-height: 100%;
  }
  
  h1, h2, h3, h4, h5, button, input {
    font-family: 'IBM Plex Sans', sans-serif;
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
          <link rel='icon' href='/favicon.ico' />
          <meta charSet='utf-8' />
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet" />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          />
          <GlobalStyle />
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

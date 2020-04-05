import { createGlobalStyle, ServerStyleSheet } from 'styled-components'

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

function App({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}

export default App

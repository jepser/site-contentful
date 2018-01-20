import NextHead from 'next/head'
import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Router from 'next/router'

const gaTrackingId = 'UA-6518752-1'

Router.onRouteChangeComplete = (url) => {
  ReactGA.initialize(gaTrackingId)
  ReactGA.pageview(window.location.pathname)
}

export default class extends Component {
  render () {
    return (
      <NextHead>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${gaTrackingId}')
        `}} />
      </NextHead>
    )
  }
}

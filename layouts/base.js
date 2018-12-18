import {
  Component
} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'

import Header from '../components/Header'
import Tracking from '../components/Head'

const Wrap = styled.div`
  min-height: 100vh;
  opacity: ${props => props.isLoading ? 0.6 : 1};
  transition: opacity .3s ease;
`

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }

    Router.onRouteChangeStart = () => this.setState({ loading: true })
    Router.onRouteChangeComplete = () => this.setState({ loading: false })
    Router.onRouteChangeError = () => this.setState({ loading: false })
  }

  render () {
    const {
      title,
      description,
      theme,
      children
    } = this.props
    return (
      <>
        {process.env.NODE_ENV === 'production' && <Tracking />}
        <Head>
          <title>{title}</title>
          {description && <meta name='description' content={description} />}
        </Head>
        <Header theme={theme} />
        <Wrap isLoading={this.state.loading}>
          {children}
        </Wrap>
      </>
    )
  }
}

import fetch from 'isomorphic-fetch'
import Link from 'next/link'

import contentClient from '../transport/contentful'
import Header from '../components/Header'
import Page from '../layouts/base'
import {
  Title
} from '../components/Home/styled-components'
import {
  BreakLine
} from '../helpers'

const Index = (props) => {

  const {
    fields
  } = props.data

  return(
    <Page title='Static public site'>
      <Title>{BreakLine(fields.phrase)}</Title>
    </Page>
  )
}

Index.getInitialProps = async () => {

  const data = await contentClient.getEntry('2YQQOHNCrm2UieymGc8USu')
  return { data }
}

export default Index

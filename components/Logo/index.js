import styled from 'styled-components'

import logo from '../../static/jepser-logo-v2.svg'

const Icon = styled(logo)`
  width: 40px;
  height: 40px;
  border: 5px solid white;
  background: white;
  display: block;
  g {
    stroke-width: 2px;
    stroke: ${props => props.color ? props.color : '#333'};
  }
`

const Wrap = styled.div`
  margin: 40px 0 5px;
  float: left;
  padding: 0 0 0 40px;
  background: white;
`

const Logo = () => (
  <Wrap>
    <Icon />
  </Wrap>
)

export default Logo

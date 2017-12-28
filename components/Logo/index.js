import styled from 'styled-components'

import logo from '../../static/jepser-logo-v2.svg'

const Icon = styled(logo)`
  width: 40px;
  height: 40px;
  border: 5px solid ${props => props.background ? props.background : 'white'};
  background: ${props => props.background ? props.background : 'white'};
  display: block;
  path {
    transition: fill .3s ease;
    @media (min-width: 641px) {
      path {
        fill: ${props => props.color ? props.color: '#333'};
      }
    }
  }

  @media (min-width: 641px) {
    path {
      fill: ${props => props.color ? props.color: '#333'};
    }
  }
`

const Wrap = styled.a`
  margin: 40px 0 5px;
  float: left;
  padding: 0 0 0 40px;
  background: ${props => props.background ? props.background : 'white'};
`

const Logo = ({color, background}) => (
  <Wrap background={background}>
    <Icon color={color} background={background} />
  </Wrap>
)

export default Logo

import Link from 'next/link'

import Logo from '../Logo'
import {
  Menu,
  Item,
  Wrap,
  MenuWrap
} from './styled-components'

const Header = ({theme}) => {
  let color = '#333'
  let background = 'white'
  if (theme === 'dark') {
    color = 'white'
    background = 'transparent'
  }
  return(
    <Wrap>
      <MenuWrap>
        <Link href="/">
          <div>
            <Logo color={color} background={background} />
          </div>
        </Link>
          
          <Link href="/articles">
            <Item color={color} background={background}>Artículos</Item>
          </Link>
          <Link href="/labs">
            <Item color={color} background={background}>Labs</Item>
          </Link>
          <Link href="/labs">
            <Item color={color} background={background}>Contacto</Item>
          </Link>
      </MenuWrap>
    </Wrap>
  )
}

export default Header

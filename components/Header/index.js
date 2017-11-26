import Link from 'next/link'
import ActiveLink from '../ActiveLink'

import Logo from '../Logo'
import {
  Menu,
  Item,
  Wrap,
  MenuWrap
} from './styled-components'

// console.log(popup)

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
          <ActiveLink href="/articles" Component={Item} color={color} background={background}>
            Artículos
          </ActiveLink>
          <ActiveLink href="/labs" Component={Item} color={color} background={background}>
            Labs
          </ActiveLink>
          <ActiveLink href="/contact" Component={Item} color={color} background={background}>
            Contacto
          </ActiveLink>
      </MenuWrap>
    </Wrap>
  )
}

export default Header

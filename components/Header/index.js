import Link from 'next/link'
import ActiveLink from '../ActiveLink'

const makePopup = typeof document !== 'undefined'
  ? require('@typeform/embed').makePopup
  : null

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

  let popup = null
  
  const showTypeform = (e) => {
    if (makePopup) {
      e.preventDefault()

      if(!popup) {
        popup = makePopup('https://jepser.typeform.com/to/yQ1K0K', {
          mode: 'popup'
        })
      }
      popup.open()
    }
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
        <Item href="https://jepser.typeform.com/to/yQ1K0K" color={color} background={background} active={false} onClick={showTypeform}>Contact</Item>
      </MenuWrap>
    </Wrap>
  )
}

export default Header

import Link from 'next/link'

import Logo from '../Logo'
import {
  Menu,
  Item,
  Wrap,
  MenuWrap
} from './styled-components'

const Header = (props) => (
  <Wrap>
    <MenuWrap>
      <Link href="/">
        <Logo />
      </Link>
        
        <Link href="/labs">
          <Item color={props.color}>Articles</Item>
        </Link>
        <Link href="/labs">
          <Item color={props.color}>Labs</Item>
        </Link>
        <Link href="/labs">
          <Item color={props.color}>Contact</Item>
        </Link>
    </MenuWrap>
  </Wrap>
)

export default Header

import Link from 'next/link'
// import typeformEmbed from '@typeform/embed'  


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

  // const popup = typeformEmbed.makePopup('https://jepser.typeform.com/to/yQ1K0K', {
  //   mode: 'popup'
  // })

  const handleClick = (e) => {
    e.preventDefault()

    console.log('asdfafds')

    // popup.open()
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
          <Item color={color} onClick={handleClick} background={background}>Contacto</Item>
      </MenuWrap>
    </Wrap>
  )
}

export default Header

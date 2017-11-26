import { withRouter } from 'next/router'
import styled from 'styled-components'

const ActiveLink = ({ Component, router, href, ...props }) => {

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  const isActive = () => {
    return href.indexOf(router.query.type) !== -1 || router.pathname === href
  }

  return (
    <Component href={href} onClick={handleClick} active={isActive()} {...props} />
  )
}

export default withRouter(ActiveLink)

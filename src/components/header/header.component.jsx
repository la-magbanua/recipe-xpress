import React from 'react'
import { Link } from 'react-router-dom'

import { Wrap } from '../../styles/wrap.styles'
import { StyledHeader, InnerHeader } from './header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Link to="/">
            <h3>Recipe Express</h3>
          </Link>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}

export default Header

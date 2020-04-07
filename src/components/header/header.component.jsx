import React from 'react'
import { Link } from 'react-router-dom'

import { Wrap } from '../../styles/wrap.styles'
import { StyledHeader, InnerHeader, BrandText } from './header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          <Link to="/">
            <BrandText>Recipe Express</BrandText>
          </Link>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}

export default Header

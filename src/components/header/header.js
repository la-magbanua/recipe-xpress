import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { Wrap } from '../wrap/wrap'
import { StyledHeader, InnerHeader, BrandText } from './header-styles'

const Header = ({ location }) => {
  return (
    <StyledHeader>
      <Wrap>
        <InnerHeader>
          {location.pathname !== '/' ? (
            <Link to="/">
              <IoIosArrowBack size="1.4rem" />
            </Link>
          ) : (
            <span>{''}</span>
          )}
          <Link to="/">
            <BrandText>Recipe Xpress</BrandText>
          </Link>
          <span></span>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}

export default withRouter(Header)

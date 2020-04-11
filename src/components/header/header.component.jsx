import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { Wrap } from '../../styles/wrap.styles'
import { StyledHeader, InnerHeader, BrandText } from './header.styles'

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
            <Link>{''}</Link>
          )}
          <Link to="/">
            <BrandText>Recipe Xpress</BrandText>
          </Link>
          <Link></Link>
        </InnerHeader>
      </Wrap>
    </StyledHeader>
  )
}

export default withRouter(Header)

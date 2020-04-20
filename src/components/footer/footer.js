import React from 'react'
import { Wrap } from '../wrap/wrap'
import { StyledFooter, InnerFooter } from './footer-styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Wrap>
        <InnerFooter>
          <p>Designed & Built by L.A. Magbanua</p>
        </InnerFooter>
      </Wrap>
    </StyledFooter>
  )
}

export default Footer

import React from 'react'
import { Wrap } from '../../styles/wrap.styles'
import { StyledFooter, InnerFooter } from './footer.styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Wrap>
        <InnerFooter>
          <p>footer</p>
        </InnerFooter>
      </Wrap>
    </StyledFooter>
  )
}

export default Footer

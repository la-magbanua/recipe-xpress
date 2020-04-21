import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    padding: 0 1.15rem;
  }
`

export const Wrap = ({ children }) => {
  return <StyledWrap className="wrap">{children}</StyledWrap>
}

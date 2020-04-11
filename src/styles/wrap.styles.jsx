import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

export const Wrap = ({ children }) => {
  return <StyledWrap className="wrap">{children}</StyledWrap>
}

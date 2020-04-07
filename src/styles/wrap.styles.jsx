import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const Wrap = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>
}

import styled from 'styled-components'

export const StyledHeader = styled.header``

export const InnerHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BrandText = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  color: ${({ theme }) => theme.colors.textMain};
`

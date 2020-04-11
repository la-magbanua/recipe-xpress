import styled from 'styled-components'

export const StyledHeader = styled.header``

export const InnerHeader = styled.div`
  height: 60px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.yellow};
`
export const BrandText = styled.h3`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  color: ${({ theme }) => theme.colors.textMain};
`

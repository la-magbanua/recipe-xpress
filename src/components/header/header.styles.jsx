import styled from 'styled-components'

export const StyledHeader = styled.header``

export const InnerHeader = styled.div`
  height: 60px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.offWhite};

  @media screen and (max-width: 500px) {
    max-width: none;
    width: 100%;
  }
`
export const BrandText = styled.h3`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.xBold};
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: 8px;
`

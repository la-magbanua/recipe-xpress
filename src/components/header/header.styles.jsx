import styled from 'styled-components'

export const StyledHeader = styled.header``

export const InnerHeader = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  justify-items: center;
  align-items: center;
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

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`

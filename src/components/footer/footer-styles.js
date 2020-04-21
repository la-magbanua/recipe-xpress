import styled from 'styled-components'

export const StyledFooter = styled.footer``

export const InnerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textSub};
  }
`

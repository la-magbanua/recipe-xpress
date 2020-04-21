import styled from 'styled-components'

export const StyledFooter = styled.footer``

export const InnerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.offWhite2};

  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.textSub};
  }
`

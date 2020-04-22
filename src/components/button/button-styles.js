import styled, { css } from 'styled-components'

const BlockButton = css`
  display: block;
  width: 100%;
`

export const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px 8px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.textMain};
  background: ${({ theme }) => theme.colors.yellow};

  ${({ block }) => (block ? BlockButton : '')};

  &:disabled {
    cursor: not-allowed;
    background: #bdbdbd;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.textSub};
  }
`

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
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.bgColor};
  background: ${({ theme }) => theme.colors.textMain};

  ${({ block }) => (block ? BlockButton : '')};

  &:disabled {
    cursor: not-allowed;
    background: #bdbdbd;
  }
`

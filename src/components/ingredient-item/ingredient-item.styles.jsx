import styled from 'styled-components'

export const StyledIngredientItem = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  margin-right: 3px;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.textSub};
`

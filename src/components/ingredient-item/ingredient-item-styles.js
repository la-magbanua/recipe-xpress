import styled from 'styled-components'

export const StyledIngredientItem = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px;
  margin-right: 3px;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.textSub};
`

export const ItemTitle = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

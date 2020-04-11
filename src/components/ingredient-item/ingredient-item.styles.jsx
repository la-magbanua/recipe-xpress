import styled from 'styled-components'

export const StyledIngredientItem = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 6px;
  margin-right: 3px;
  font-size: 11px;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.lightYellow};
  color: ${({ theme }) => theme.colors.textMain};
`

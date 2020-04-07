import styled from 'styled-components'

export const StyledIngredientItem = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  margin-right: 3px;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 9px;
`

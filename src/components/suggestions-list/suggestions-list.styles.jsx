import styled from 'styled-components'

export const StyledSuggestionsList = styled.div`
  position: absolute;
  display: block;
  top: 45px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgColor};
`

export const SuggestionItem = styled.div`
  width: 100%;
  padding: 15px 8px;
  cursor: pointer;
`

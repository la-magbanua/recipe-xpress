import styled from 'styled-components'

export const StyledSuggestionsList = styled.div`
  position: absolute;
  display: block;
  top: 56px;
  left: 50%;
  max-width: 352px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgColor};
  border-radius: 0 0 9px 9px;
  z-index: 999;
  transform: translateX(-50%);
`

export const SuggestionItem = styled.div`
  width: 100%;
  padding: 15px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};

  &:hover {
    background: #f5f5f5;
    color: ${({ theme }) => theme.colors.textMain};
  }
`

import styled from 'styled-components'

export const StyledSuggestionsList = styled.div`
  position: absolute;
  display: block;
  top: 40px;
  left: 50%;
  width: 100%;
  padding: 0;
  border-radius: 0 0 9px 9px;
  z-index: 999;
  transform: translateX(-50%);
`

export const InnerSuggestionsList = styled.div`
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.colors.bgColor};
  border-radius: 0 0 40px 40px;

  @media screen and (max-width: 500px) {
    border-radius: 0 0 20px 20px;
  }
`

export const SuggestionItem = styled.div`
  width: 100%;
  padding: 15px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMain};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background: #f5f5f5;
    color: ${({ theme }) => theme.colors.textMain};
  }
`

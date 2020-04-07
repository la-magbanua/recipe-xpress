import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 16px;
  padding: 8px;
`

import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.textXSub};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSub};
`

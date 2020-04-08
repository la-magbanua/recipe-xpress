import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 12px 15px;
  height: 45px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSub};
  border: 1px solid #bdbdbd;
  border-radius: ${({ theme }) => theme.borderRadius};
`

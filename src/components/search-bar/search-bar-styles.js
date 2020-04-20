import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: 1rem 1.5rem;
  border-radius: 0 0 30px 30px;

  @media screen and (max-width: 480px) {
    max-width: none;
    width: 100%;
  }
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
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textSub};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.15);
`

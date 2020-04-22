import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledSearchBar = styled(motion.div)`
  background: ${({ theme }) => theme.colors.offWhite};
  padding: 1rem 1.5rem;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const SearchBarWrapper = styled.div`
  max-width: 500px;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    max-width: 100% !important;
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

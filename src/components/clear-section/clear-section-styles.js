import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledClearSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`

export const ClearButton = styled(motion.button)`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-size: 11px;
  width: 150px;
  letter-spacing: 2.5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.textSub};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease;
`

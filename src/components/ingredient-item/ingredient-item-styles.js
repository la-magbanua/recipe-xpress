import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledIngredientItem = styled(motion.span)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px;
  margin-right: 3px;
  margin-top: 5px;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.textSub};
`

export const ItemTitle = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

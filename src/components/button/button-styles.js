import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const BlockButton = css`
  display: block;
  width: 100%;
`

const TransparentButton = css`
  background: transparent;
`

export const StyledButton = styled(motion.button)`
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 8px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.offWhite};
  background: ${({ theme }) => theme.colors.textMain};
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

  ${({ block }) => (block ? BlockButton : '')};
  ${({ transparent }) => (transparent ? TransparentButton : '')};

  &:disabled {
    cursor: not-allowed;
    background: #bdbdbd;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.textSub};
  }
`

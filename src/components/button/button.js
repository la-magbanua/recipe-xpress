import React from 'react'
import { StyledButton } from './button-styles'

const buttonVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
  tap: {
    scale: 0.8,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
}

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
      initial="initial"
      animate="animate"
      exit="exit"
      whileTap="tap"
      variants={buttonVariants}
    >
      {children}
    </StyledButton>
  )
}

export default Button

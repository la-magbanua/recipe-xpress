import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledRecipeList = styled(motion.div)`
  width: 100%;
  margin: 0 auto 16px auto;
  padding: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  .carousel {
    position: relative;
  }

  .slider {
    padding: 30px;
  }

  /* carousel buttons */
  button[aria-label='previous'],
  button[aria-label='next'] {
    position: absolute;
    display: inline-flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: white;
    color: ${({ theme }) => theme.colors.textMain};
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 50%;

    @media screen and (max-width: 500px) {
      width: 42px;
      height: 42px;
    }
  }

  button[aria-label='previous'] {
    top: 50%;
    transform: translateY(-50%);
    left: -25px;

    @media screen and (max-width: 500px) {
      left: -15px;
    }
  }

  button[aria-label='next'] {
    top: 50%;
    transform: translateY(-50%);
    right: -25px;

    @media screen and (max-width: 500px) {
      right: -15px;
    }
  }

  button:disabled {
    opacity: 0.3;
  }
`

export const Placeholder = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.textXSub};
    opacity: 50%;

    @media screen and (max-width: 500px) {
      margin-top: 0;
    }
  }
`

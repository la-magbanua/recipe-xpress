import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledRecipeItem = styled(motion.div)`
  height: 100%;
  margin: 5px 10px;
  border-radius: ${({ theme }) => theme.borderRadiusX};
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.15);

  a {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    margin: 5px;
  }
`

export const ItemImage = styled.div`
  width: 100%;
  height: 135px;
  ${({ image }) => (image ? `background: url(${image})` : '')};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) =>
    `${theme.borderRadiusX} ${theme.borderRadiusX} 0 0`};
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  word-wrap: break-word;
  padding: 10px 15px;

  @media screen and (max-width: 380px) {
    padding: 10px;
  }
`

export const ItemTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textXSub};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 18px;
  }
`

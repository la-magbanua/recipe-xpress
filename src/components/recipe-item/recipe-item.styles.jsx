import styled from 'styled-components'

export const StyledRecipeItem = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 16px;
`

export const ItemImage = styled.div`
  width: 85px;
  height: 70px;
  margin-right: 16px;
  ${({ image }) => (image ? `background: url(${image})` : '')};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const ItemDetails = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ItemTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSub};
  margin: 0;
`

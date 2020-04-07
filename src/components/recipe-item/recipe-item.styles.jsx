import styled from 'styled-components'

export const StyledRecipeItem = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 8px;
`

export const ItemImage = styled.div`
  width: 62px;
  height: 62px;
  margin-right: 8px;
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

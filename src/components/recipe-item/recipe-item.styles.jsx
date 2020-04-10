import styled from 'styled-components'

export const StyledRecipeItem = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const ItemImage = styled.div`
  width: 100%;
  height: 135px;
  ${({ image }) => (image ? `background: url(${image})` : '')};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
  padding: 10px 15px;
`

export const ItemTitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSub};
  margin: 0;
`

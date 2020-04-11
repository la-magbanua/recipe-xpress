import styled from 'styled-components'

export const RecipeHeader = styled.div`
  margin-top: 20px;
  padding: 1.5rem 1rem 10px 1rem;
`
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.lightYellow};
`

export const Minutes = styled.p`
  font-size: 13px;
  margin-top: 5px;
  color: #bdbdbd;
`

export const ItemImage = styled.div`
  width: 100%;
  height: 120px;
  ${({ bgImg }) => (bgImg ? `background: url(${bgImg})` : '')};
  background-size: cover;
  background-position: center center;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Instructions = styled.div`
  padding: 1.7rem 1rem;
  border-radius: 40px 40px 0 0;
  background: ${({ theme }) => theme.colors.lightYellow};
`

export const Instruction = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  div {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  h3 {
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.textMain};
    color: ${({ theme }) => theme.colors.bgColor};
  }

  p {
    margin: 0;
    line-height: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMain};
  }
`

import styled from 'styled-components'

export const StyledRecipePage = styled.div``

export const RecipeHeader = styled.div`
  padding: 1.5rem 1rem 10px 1rem;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const ItemDetails = styled.div`
  margin-left: 30px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textMain};
`

export const Minutes = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textSub};
`

export const ItemImage = styled.div`
  align-self: center;
  width: 300px;
  height: 400px;
  ${({ bgImg }) => (bgImg ? `background: url(${bgImg})` : '')};
  background-size: cover;
  background-position: center center;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and (max-width: 500px) {
    height: 200px;
  }
`

export const Instructions = styled.div`
  min-height: 100%;
  padding: 0;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

export const InstructionsHeading = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
`

export const Instruction = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 20px;
    }
  }

  h3 {
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.textMain};
    color: ${({ theme }) => theme.colors.bgColor};
  }

  p {
    margin: 0;
    line-height: 26px;
    font-size: 16px;
    max-width: 500px;
    color: ${({ theme }) => theme.colors.textSub};
  }

  /* mobile view */
  @media screen and (max-width: 500px) {
    margin: 16px 0;

    p {
      line-height: 22px;
    }
  }
`

export const RecipeSkeleton = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const SkelImg = styled.div`
  width: 100%;
`

export const SkelDetails = styled.div`
  width: 100%;

  @media screen and (max-width: 500px) {
    margin-left: 30px;
    margin-top: 30px;
  }
`

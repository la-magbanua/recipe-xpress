import styled from 'styled-components'

export const RecipeHeader = styled.div`
  margin-top: 20px;
  padding: 1.5rem 1rem 10px 1rem;
`
export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.textMain};
`

export const Minutes = styled.p`
  font-size: 13px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.textMain};
`

export const ItemImage = styled.div`
  width: 100%;
  height: 160px;
  ${({ bgImg }) => (bgImg ? `background: url(${bgImg})` : '')};
  background-size: cover;
  background-position: center center;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and (max-width: 500px) {
    height: 100px;
  }
`

export const Instructions = styled.div`
  min-height: 100%;
  padding: 1.4rem 1rem;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.offWhite2};

  @media screen and (max-width: 500px) {
    padding: 1.7rem 1rem;
  }
`

export const Instruction = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;

  div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-right: 12px;
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
    line-height: 22px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMain};
  }

  /* mobile view */
  @media screen and (max-width: 500px) {
    margin: 16px 0;

    p {
      line-height: 20px;
    }
  }
`

import styled from 'styled-components'

export const StyledRecipeList = styled.div`
  max-width: 500px;
  width: 500px;
  height: 100%;
  margin: 0 auto 16px auto;
  padding: 32px 0 0 0;

  @media screen and (max-width: 480px) {
    max-width: none;
    width: 100%;
  }

  .slick-list {
    height: 100% !important;
    padding: 20px 0;
  }

  .slick-slide div {
    margin: 0 8px;

    @media screen and (max-width: 460px) {
      margin: 0 4px;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`

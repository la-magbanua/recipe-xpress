import styled from 'styled-components'

export const StyledSlider = styled.div`
  position: absolute;
  bottom: -150px;
  left: 50%;

  display: block;
  max-width: 400px;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? `102.5%` : `0%`)};
  margin: 0 auto;

  background: coral;
  border-radius: 30px 30px 0 0;
  transform: translateX(-50%);
  transition: 0.3s all ease;
`
export const InnerSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem 1rem 1rem;
  border-radius: 30px 30px 0 0;
  /* background: cornflowerblue; */
`

export const SliderCloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`

export const SliderDetails = styled.div`
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }
`

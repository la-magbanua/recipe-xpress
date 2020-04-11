import styled from 'styled-components'

export const StyledSlider = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? `0` : `150%`)};
  left: 50%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  display: block;
  max-width: 400px;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? `150%` : `0%`)};
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.textMain};
  border-radius: 30px;
  transform: translateX(-50%);
  transition: 0.3s all ease;
`
export const InnerSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
`

export const SliderCloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.bgColor};
`

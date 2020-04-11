import styled from 'styled-components'

export const StyledSlider = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? `0` : `100%`)};
  left: 50%;
  display: block;
  max-width: 500px;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? `150%` : `0%`)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.lightYellow};
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
  width: 25px;
  height: 25px;
  top: 10px;
  right: 20px;
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSub};
  z-index: 9999;
`

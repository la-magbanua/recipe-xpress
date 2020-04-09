import styled from 'styled-components'

export const StyledSkeletonList = styled.div`
  max-width: 400px;
  margin: 16px auto 16px auto;
`

export const SkeletonFrame = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ aic }) => (aic ? aic : 'center')};
`

export const SkeletonItem = styled.div`
  display: inline-block;
  height: ${({ sHeight }) => (sHeight ? sHeight : '20px')};
  width: ${({ sWidth }) => (sWidth ? sWidth : '100%')};
  margin: 0 16px 16px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

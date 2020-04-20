import styled from 'styled-components'

export const StyledSkeletonList = styled.div`
  max-width: 500px;
  width: 500px;
  margin: 16px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 1rem;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const SkeletonFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ aic }) => (aic ? aic : 'center')};
`

export const SkeletonItem = styled.div`
  display: inline-block;
  height: ${({ sHeight }) => (sHeight ? sHeight : '20px')};
  width: ${({ sWidth }) => (sWidth ? sWidth : '100%')};
  margin-bottom: ${({ mBot }) => (mBot ? mBot : '16px')};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(-90deg, #cfd3d6 0%, #bdc3c7 50%, #cfd3d6 100%);
  background-size: 400% 400%;
  animation: pulse 0.7s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

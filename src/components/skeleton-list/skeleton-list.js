import React from 'react'
import { useMediaQuery } from 'react-responsive'

import {
  SkeletonItem,
  SkeletonFrame,
  StyledSkeletonList,
} from './skeleton-list-styles'

export const SkeletonList = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 })

  return (
    <StyledSkeletonList>
      {Array(isMobile ? 2 : 4)
        .fill(0)
        .map((el, i) => (
          <SkeletonFrame key={i}>
            <SkeletonItem sWidth="100%" sHeight="120px" />
            <SkeletonItem sWidth="75%" sHeight="18px" />
          </SkeletonFrame>
        ))}
    </StyledSkeletonList>
  )
}

export const Skel = props => {
  return <SkeletonItem {...props} />
}

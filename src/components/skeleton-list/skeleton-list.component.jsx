import React from 'react'

import {
  SkeletonItem,
  SkeletonFrame,
  StyledSkeletonList,
} from './skeleton-list.styles'

const SkeletonList = () => {
  return (
    <StyledSkeletonList>
      {Array(2)
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

export default SkeletonList

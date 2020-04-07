import React from 'react'

import {
  SkeletonItem,
  SkeletonFrame,
  StyledSkeletonList,
} from './skeleton-list.styles'

const SkeletonList = () => {
  return (
    <StyledSkeletonList>
      {Array(5)
        .fill(0)
        .map((el, i) => (
          <SkeletonFrame key={i}>
            <SkeletonItem sWidth="80px" sHeight="70px" />
            <SkeletonItem sWidth="75%" sHeight="15px" />
          </SkeletonFrame>
        ))}
    </StyledSkeletonList>
  )
}

export default SkeletonList

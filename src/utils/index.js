export const truncateText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text

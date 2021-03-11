/*
 * Make sure a number is between two numbers
 */
const forceRange = (n, min, max) => (
  Math.max(Math.min(n, max), min)
)

export default forceRange

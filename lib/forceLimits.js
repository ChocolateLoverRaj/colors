import forceRange from './forceRange.js'

/*
 * Force a number to stay in the range of given numbers.
 * 
 * Examples: ```js
 * forceLimits(2, -3, 0, 1) // 1
 * forceLimits(2, -3, 5, 1) // 2
 * forceLimits(-500, -10, 50, 2) // -10
 * ```
 */
const forceLimits = (n, ...limits) => forceRange(
  n, 
  Math.min(...limits), 
  Math.max(...limits)
)

export default forceLimits

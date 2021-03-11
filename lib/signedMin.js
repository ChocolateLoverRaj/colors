/*
 * Math.min(), but it only applies to numbers with that sign
 * 
 * Examples
 * ```js
 * signedMin(1, -10, -20, 10, 20) // 10
 * signedMin(-1, -10, -20, 10, 20) // -10
 * ```
 */
const signedMin = (sign, ...nums) => (
	(sign === 1 ? Math.min : Math.max)(
    ...[...nums]
	    .filter(num => num === 0 || Math.sign(num) === sign)
	)
)

export default signedMin

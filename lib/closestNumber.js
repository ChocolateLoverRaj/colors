// Taken from https://github.com/andreruffert/closest-number/blob/master/index.js
// Modified for ES Modules

/**
 * Returns the closest number out of an array
 * @param  {Array}  arr
 * @param  {Number} num
 * @return {Number}
 */
function closestNumber(arr, num) {
  return arr.reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num)) ? curr : prev);
}

export default closestNumber;
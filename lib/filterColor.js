import Colors from './ColorsEnum.js'

// Get platforms that are either a specific color or black
const filterColor = (platforms, matchColor) => platforms
  .filter(({ color }) => [matchColor, Colors.BLACK].includes(color))

export default filterColor

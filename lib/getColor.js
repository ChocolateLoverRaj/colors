import Colors from './ColorsEnum.js'

const getColor = color => {
  switch (color) {
    case Colors.CYAN:
      return 'cyan'
    case Colors.YELLOW:
      return 'yellow'
    case Colors.MAGENTA:
      return 'magenta'
    case Colors.BLACK:
      return 'black'  
  }
}

export default getColor

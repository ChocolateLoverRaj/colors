import Colors from './ColorsEnum.js'

class Platform {
  constructor () {
    this.color = Colors.CYAN
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
  }

  render (ctx) {
    switch (this.color) {
      case Colors.CYAN:
        ctx.fillStyle = 'cyan'
        break
      case Colors.YELLOW:
        ctx.fillStyle = 'yellow'
        break
      case Colors.MAGENTA:
        ctx.fillStyle = 'magenta'
        break
      case Colors.BLACK:
        ctx.fillStyle = 'black'
        break
    }
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default Platform

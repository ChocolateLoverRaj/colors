import Colors from './ColorsEnum.js'
import getColor from './getColor.js'

class Player {
  constructor () {
    this.color = Colors.CYAN
    this.x = 0
    this.y = 0
  }

  render (ctx) {
    ctx.fillStyle = getColor(this.color)
    ctx.fillRect(this.x, this.y, Player.width, Player.height)
  }
}
Player.width = 50
Player.height = 60

export default Player

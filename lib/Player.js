import Colors from './ColorsEnum.js'
import getColor from './getColor.js'
import roundRect from './roundRect.js'
import Controls from './PlayerControls.js'

class Player {
  constructor () {
    this.color = Colors.CYAN
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.jumps = 0
    this.jumpReleased = true
    this.controls = new Controls()
  }

  render (ctx) {
    ctx.fillStyle = getColor(this.color)
    ctx.beginPath()
    // Top left of head
    ctx.moveTo(this.x + Player.headRound, this.y)
    // Line to top right of head
    ctx.lineTo(this.x + Player.width - Player.headRound, this.y)
    // Right head curve
    ctx.arcTo(
      // Top right corner
      this.x + Player.width, 
      this.y,
      // Destination
      this.x + Player.width,
      this.y + Player.headRound,
      // Radius
      Player.headRound
    )
    // Right of right foot
    ctx.lineTo(this.x + Player.width, this.y + Player.height - Player.footRound)
    // Right foot bottom right curve
    ctx.arcTo(
      // Bottom right corner
      this.x + Player.width,
      this.y + Player.height,
      // Bottom right of right foot
      this.x + Player.width - Player.footRound,
      this.y + Player.height,
      // Radius
      Player.footRound
    )
    // Line to left bottom of right foot
    ctx.lineTo(this.x + Player.width - (Player.footWidth - Player.footRound), this.y + Player.height)
    // Bottom left curve of right foot
    ctx.arcTo(
      // Bottom left corner of right foot
      this.x + Player.width - Player.footWidth,
      this.y + Player.height,
      // Left bottom of right foot
      this.x + Player.width - Player.footWidth,
      this.y + Player.height - Player.footRound,
      // Radius
      Player.footRound
    )
    // Line to top left corner of right foot
    ctx.lineTo(
      this.x + Player.width - Player.footWidth, this.y + Player.height - Player.footHeight
    )
    // Line to top left corner of left foot
    ctx.lineTo(
      this.x + Player.footWidth, 
      this.y + Player.height - Player.footHeight
    )
    // Line to right bottom of left foot)
    ctx.lineTo(this.x + Player.footWidth, this.y + Player.height - Player.footRound)
    // Bottom right curve of left foot
    ctx.arcTo(
      // Bottom right corner of left foot
      this.x + Player.footWidth,
      this.y + Player.height,
      // Bottom right of left foot
      this.x + Player.footWidth - Player.footRound,
      this.y + Player.height,
      // Radius
      Player.footRound
    )
    // Line to bottom left of left foot
    ctx.lineTo(this.x + Player.footRound, this.y + Player.height)
    // Bottom left curve of left foot
    ctx.arcTo(
      // Bottom left corner
      this.x,
      this.y + Player.height,
      // Left bottom of player
      this.x,
      this.y + Player.height - Player.footRound,
      // Radius
      Player.footRound
    )
    // Line to left top of player
    ctx.lineTo(this.x, this.y + Player.headRound)
    // Top left curve of head
    ctx.arcTo(
      // Top right corner of player
      this.x,
      this.y,
      // Top left of player
      this.x + Player.headRound,
      this.y,
      // Radius
      Player.headRound
    )
    ctx.closePath()
    ctx.fill()

    // Eyes
    ctx.fillStyle = Player.eyeColor

    // Left eye
    ctx.fill(roundRect({
      left: this.x + Player.eyeLeftX,
      top: this.y + Player.eyeY,
      width: Player.eyeWidth,
      height: Player.eyeHeight,
      borderRadius: Player.eyeRadius
    }))

    // Right eye
    ctx.fill(roundRect({
      left: this.x + Player.eyeRightX,
      top: this.y + Player.eyeY,
      width: Player.eyeWidth,
      height: Player.eyeHeight,
      borderRadius: Player.eyeRadius
    }))
  }
}
Player.width = 50
Player.height = 65
Player.headRound = 10
Player.footRound = 3
Player.footWidth = 15
Player.footHeight = 10
Player.eyeColor = '#cccccc'
Player.eyeLeftX = 10
Player.eyeRightX = 30
Player.eyeY = 13
Player.eyeWidth = 12
Player.eyeHeight = 13
Player.eyeRadius = 3
Player.maxJumps = 2
Player.jumpVelocity = -20

export default Player

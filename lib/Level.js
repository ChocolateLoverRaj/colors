import Player from './Player.js'
import Colors from './ColorsEnum.js'

class Level {
  constructor () {
    this.platforms = []
    this.texts = []
    this.players = [
      new Player(),
      new Player(),
      new Player()
    ]
    this.players[0].color = Colors.CYAN
    this.players[1].color = Colors.YELLOW
    this.players[2].color = Colors.MAGENTA
  }

  tick () {
    // Player physics
    this.players.forEach(player => {
      // Falling
      player.vy++

      // Velocity
      player.x += player.vx
      player.y += player.vy

      // Platforms
      for (const platform of this.platforms) {
        // Player is on platform
        const playerOnPlatform = (
          player.y + Player.height > platform.y &&
          player.y < platform.y
        )
        // Player's head is hitting platform
        const playerBelowPlatform = (
          player.y < platform.y + platform.height &&
          player.y + Player.height > platform.y > platform.y + platform.height
        )
        if (playerOnPlatform) {
          player.vy = 0
          player.y = platform.y - Player.height
          break
        } else if (playerBelowPlatform) {
          player.vy = 0
          player.y = platform.y + platform.height
          break
        }
      }
    })
  }

  render (ctx) {
    // Background
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 800, 600)

    this.texts.forEach(text => {
      text.render(ctx)
    })

    this.platforms.forEach(platform => {
      platform.render(ctx)
    })

    this.players.forEach(player => {
      player.render(ctx)
    })    
  }
}

export default Level

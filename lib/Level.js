import Player from './Player.js'
import Colors from './ColorsEnum.js'
import keysPressed from './keysPressed.js'

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
    this.players[0].controls.jump = 'y'
    this.players[0].controls.left = 'g'
    this.players[0].controls.right = 'j'
    this.players[1].controls.jump = 'w'
    this.players[1].controls.left = 'a'
    this.players[1].controls.right = 'd'
    this.players[2].controls.jump = 'ArrowUp'
    this.players[2].controls.left = 'ArrowLeft'
    this.players[2].controls.right = 'ArrowRight'
  }

  tick () {
    // Player physics
    this.players.forEach(player => {
      // Jumping
      if (
        player.jumpReleased &&
        player.jumps < Player.maxJumps &&
        keysPressed.has(player.controls.jump)
      ) {
        player.jumps++
        player.jumpReleased = false
        player.vy = Player.jumpVelocity
      } else if (
        !player.jumpReleased &&
        !keysPressed.has(player.controls.jump)
      ) {
        player.jumpReleased = true
      }

      // Moving left / right
      const leftPressed = keysPressed.has(player.controls.left)
      const rightPressed = keysPressed.has(player.controls.right)
      if (leftPressed && !rightPressed) {
        player.vx = -Player.speedX
      } else if (rightPressed && !leftPressed) {
        player.vx = Player.speedX
      } else {
        player.vx = 0
      }

      // Falling
      player.vy += Player.gravity

      // Velocity
      player.x += player.vx
      player.y += player.vy

      // Platforms
      for (const platform of this.platforms) {
        // Only same color or black
        if (![player.color, Colors.BLACK].includes(platform.color)) {
          continue
        }
        
        // Player is on platform
        const collideTop = (
          player.y + Player.height > platform.y &&
          player.y < platform.y
        )
        // Player's head is hitting platform
        const collideBottom = (
          player.y < platform.y + platform.height &&
          player.y + Player.height > platform.y + platform.height
        )
        // Player is hitting from left
        const collideLeft = (
          player.x + Player.width > platform.x &&
          player.x < platform.x
        )
        // Player is hitting from right
        const collideRight = (
          player.x < platform.x + platform.width &&
          player.x + Player.width > platform.x + platform.width
        )
        // Player is vertically intersecting platform
        const collideVertical = (
          collideTop ||
          collideBottom ||
          (
            player.y > platform.y &&
            player.y + Player.height < platform.y + platform.height
          ) ||
          (
            player.y < platform.y &&
            player.y + Player.height > platform.y + platform.height
          )
        )
        // Player is horizontally intersecting platform
        const collideHorizontal = (
          collideLeft ||
          collideRight ||
          (
            player.x > platform.x && 
            player.x + Player.width < platform.x + platform.width
          ) ||
          (
            player.x < platform.x &&
            player.x + Player.width > platform.x + platform.width
          )
        )
        if (collideHorizontal) {
          if (collideTop) {
            player.vy = 0
            player.y = platform.y - Player.height
            // Reset jumps
            player.jumps = 0
            break
          } else if (collideBottom) {
            player.vy = 0
            player.y = platform.y + platform.height
            break
          }
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

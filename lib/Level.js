import Player from './Player.js'
import Colors from './ColorsEnum.js'
import keysPressed from './keysPressed.js'
import { Between } from './isBetween.js'
import forceLimits from './forceLimits.js'
import forceRange from './forceRange.js'

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

      // Platforms
      for (const platform of this.platforms) {
        // Only same color or black
        if (![player.color, Colors.BLACK].includes(platform.color)) {
          continue
        }
      }

      // Velocity
      const colorFilterer = ({ color }) => [player.color, Colors.BLACK].includes(color)
      /*
      player.x += forceLimits(
        player.vx,
        ...this.platforms
          .filter(colorFilterer)
          .filter(({ y, height }) => {
            const between = new Between()
              .min(y)
              .max(y + height)
            return (
              between.value(player.y).calc() ||
              between.value(player.y + Player.height).calc()
            )
          })
          .map(({ x, width }) => player.x < x
            ? x - (player.x + Player.width)
            : player.x - (x + width)
          )
      )
      //*/
      const yDistanceMapFn = ({ y, height }) => player.y < y
        ? y - (player.y + Player.height)
        : (y + height) - player.y
      const interactablePlatforms = this.platforms
        .filter(colorFilterer)
        .filter(({ x, width }) => {
          const between = new Between()
            .min(x)
            .max(x + width)
          return (
            between.value(player.x).calc() ||
            between.value(player.x + Player.width).calc()
          )
        })
      player.y += player.vy > 0
        ? Math.min(
          player.vy,
          ...interactablePlatforms
            .filter(({ y }) => y > player.y)
            .map(({ y }) => y - (player.y + Player.height))
        )
        : Math.max(
          player.vy,
          ...interactablePlatforms
            .filter(({ y }) => y < player.y)
            .map(({ y, height }) => y + height - player.y)
        )

      this.platforms.forEach(({ y, height }) => {
        if (player.y + Player.height === y) {
          // Jump reset (feet hit platform)
          player.jumps = 0
          player.vy = 0
        } else if (y + height === player.y) {
          // Velocity reset (head hit platform)
          player.vy = 0
        }
      })
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

import Player from './Player.js'
import Colors from './ColorsEnum.js'
import keysPressed from './keysPressed.js'
import { Between } from './isBetween.js'
import forceLimits from './forceLimits.js'
import forceRange from './forceRange.js'
import filterColor from './filterColor.js'
import updateJumps from './updateJumps.js'
import updateVelocity from './updateVelocity.js'
import getInteractablePlatformsX from './getInteractablePlatformsX.js'
import getInteractablePlatformsY from './getInteractablePlatformsY.js'

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
      updateJumps(player)
      updateVelocity(player)

      // Hitting platforms
      const interactablePlatforms = filterColor(this.platforms, player.color)
      const interactablePlatformsX = getInteractablePlatformsX(
        interactablePlatforms,
        player
      )
      player.x += player.vx > 0
        ? Math.min(
          player.vx,
          ...interactablePlatformsX
            .filter(({ x }) => x >= player.x + Player.width)
            .map(({ x }) => x - (player.x + Player.width))
        )
        : Math.max(
          player.vx,
          ...interactablePlatformsX
            .filter(({ x, width }) => x + width <= player.x)
            .map(({ x, width }) => x + width - player.x)
        )
      const interactablePlatformsY = getInteractablePlatformsY(
        interactablePlatforms,
        player
      )
      player.y += player.vy > 0
        ? Math.min(
          player.vy,
          ...interactablePlatformsY
            .filter(({ y }) => y >= player.y + Player.height)
            .map(({ y }) => y - (player.y + Player.height))
        )
        : Math.max(
          player.vy,
          ...interactablePlatformsY
            .filter(({ y, height }) => y + height <= player.y)
            .map(({ y, height }) => y + height - player.y)
        )

      interactablePlatformsY.forEach(({ y, height }) => {
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

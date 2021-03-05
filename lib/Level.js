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

import Game from '../lib/Game.js'

class Colors extends Game {
  render () {
    super.render()
    this.ctx.clearRect(0, 0, 640, 360)

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 0, 320, 160)

    this.ctx.fillStyle = 'yellow'
    this.ctx.fillRect(320, 0, 320, 160)

    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(0, 160, 320, 160)
  }
}

export default Colors

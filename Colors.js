import Game from '../lib/Game.js'

const Directions = {
  LEFT: 0,
  RIGHT: 1
}

class Colors extends Game {
  constructor () {
    super()

    this.state = {
      x: 0,
      direction: Directions.RIGHT,
      speed: 5
    }

    window.onclick = () => {
      if (this.tickInterval === undefined) {
        this.play()
      } else {
        this.pause()
      }
    }
  }

  tick () {
    if (this.state.direction === Directions.RIGHT) {
      this.state.x += this.state.speed
      if (this.state.x > 320) {
        this.state.x = 320
        this.state.direction = Directions.LEFT
      }
    } else {
      this.state.x -= this.state.speed
      if (this.state.x < 0) {
        this.state.x = 0
        this.state.direction = Directions.RIGHT
      }
    }
  }

  render () {
    super.render()
    this.ctx.clearRect(0, 0, 640, 360)

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 0, 320, 160)

    this.ctx.fillStyle = 'yellow'
    this.ctx.fillRect(320, 0, 320, 160)

    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(this.state.x, 160, 320, 160)
  }
}

export default Colors

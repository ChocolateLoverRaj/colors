import Game from './lib/Game.js'

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
      speed: 5,
      image: new Image()
    }
    this.state.image.src = 'https://raw.githubusercontent.com/ChocolateLoverRaj/canvideo/better/package/icons/icon.png'

    this.renderState = {
      rotation: 0
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
    this.renderState.rotation += 1

    super.render()

    this.ctx.clearRect(0, 0, 640, 360)

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 0, 320, 160)

    this.ctx.fillStyle = 'yellow'
    this.ctx.fillRect(320, 0, 320, 160)

    this.ctx.fillStyle = 'blue'
    this.ctx.fillRect(this.state.x, 160, 320, 160)
    this.ctx.translate(this.state.x + 80, 240)
    this.ctx.rotate(this.renderState.rotation)
    this.ctx.translate(-(this.state.x + 80), -240)
    this.ctx.drawImage(this.state.image, this.state.x, 160, 160, 160)
  }
}

export default Colors

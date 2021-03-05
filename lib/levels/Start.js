import Level from '../Level.js'
import Text from '../Text.js'

class LevelStart extends Level {
  constructor () {
    super()

    // Play
    const play = new Text()
    play.text = 'PLAY'
    play.size = 48
    play.x = 400
    play.y = 55

    // Controls
    const controlsSize = 24

    const controlsYellow = new Text()
    controlsYellow.text = 'Yellow controlsare WASD'
    controlsYellow.size = controlsSize
    controlsYellow.x = 400
    controlsYellow.y = 120

    const controlsCyan = new Text()
    controlsCyan.text = 'Cyan controls are YGHJ'
    controlsCyan.size = controlsSize
    controlsCyan.x = 400
    controlsCyan.y = 150

    const controlsMagenta = new Text()
    controlsMagenta.text = 'Magenta controls are Arrow Keys'
    controlsMagenta.size = controlsSize
    controlsMagenta.x = 400
    controlsMagenta.y = 180

    const doubleJump = new Text()
    doubleJump.text = 'You can double jump'
    doubleJump.size = controlsSize
    doubleJump.x = 400
    doubleJump.y = 210

    this.texts.push(
      play, 
      controlsYellow,
      controlsCyan,
      controlsMagenta,
      doubleJump
    )
  }
}

export default LevelStart

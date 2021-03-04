import Level from '../Level.js'
import Text from '../Text.js'

class LevelStart extends Level {
  constructor () {
    super()

    // Play
    const play = new Text()
    play.text = 'PLAY'
    play.size = 36
    play.x = 400
    play.y = 55

    this.texts.push(play)
  }
}

export default LevelStart

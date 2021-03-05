import Level from '../Level.js'
import Text from '../Text.js'
import Platform from '../Platform.js'
import Colors from '../ColorsEnum.js'

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

    // Border
    const borderSize = 30

    const borderLeft = new Platform()
    borderLeft.color = Colors.BLACK
    borderLeft.x = 0
    borderLeft.y = 0
    borderLeft.width = borderSize
    borderLeft.height = 600

    const borderRight = new Platform()
    borderRight.color = Colors.BLACK
    borderRight.x = 800 - borderSize
    borderRight.y = 0
    borderRight.width = borderSize
    borderRight.height = 600

    const borderTop = new Platform()
    borderTop.color = Colors.BLACK
    borderTop.x = 0
    borderTop.y = 0
    borderTop.width = 800
    borderTop.height = borderSize

    const borderBottom = new Platform()
    borderBottom.color = Colors.BLACK
    borderBottom.x = 0
    borderBottom.y = 600 - borderSize
    borderBottom.width = 800
    borderBottom.height = borderSize

    // Platforms
    const platformHeight = 30
    const platformY = 400

    const platformLeft = new Platform()
    platformLeft.color = Colors.YELLOW
    platformLeft.x = 150
    platformLeft.y = platformY
    platformLeft.width = 100
    platformLeft.height = platformHeight

    const platformMiddle = new Platform()
    platformMiddle.color = Colors.CYAN
    platformMiddle.x = 350
    platformMiddle.y = platformY
    platformMiddle.width = 100
    platformMiddle.height = platformHeight

    const platformRight = new Platform()
    platformRight.color = Colors.MAGENTA
    platformRight.x = 550
    platformRight.y = platformY
    platformRight.width = 100
    platformRight.height = platformHeight

    this.platforms.push(
      borderLeft,
      borderRight,
      borderTop,
      borderBottom,
      platformLeft,
      platformMiddle,
      platformRight
    )
  }
}

export default LevelStart

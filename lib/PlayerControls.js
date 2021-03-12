import keysPressed from './keysPressed.js'

class PlayerControls {
  constructor () {
    this.jump = ''
    this.left = ''
    this.right = ''
  }

  jumpPressed () {
    return keysPressed.has(this.jump)
  }

  leftPressed () {
    return keysPressed.has(this.left)
  }

  rightPressed () {
    return keysPressed.has(this.right)
  }
}

export default PlayerControls

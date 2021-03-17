import Player from './Player.js'

const updateVelocity = player => {
  // Moving left / right
  const leftPressed = player.controls.leftPressed()
  const rightPressed = player.controls.rightPressed()
  if (leftPressed && !rightPressed) {
    player.vx = -Player.speedX
  } else if (rightPressed && !leftPressed) {
    player.vx = Player.speedX
  } else {
    player.vx = 0
  }

  // Falling
  player.vy += Player.gravity
}

export default updateVelocity

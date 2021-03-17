import Player from './Player.js'

const updateJumps = player => {
  // Jumping
  const jumpPressed = player.controls.jumpPressed()
  if (
    player.jumpReleased &&
    player.jumps < Player.maxJumps &&
    jumpPressed
  ) {
    player.jumps++
    player.jumpReleased = false
    player.vy = Player.jumpVelocity
  } else if (
    !player.jumpReleased &&
    !jumpPressed
  ) {
    player.jumpReleased = true
  }
}

export default updateJumps

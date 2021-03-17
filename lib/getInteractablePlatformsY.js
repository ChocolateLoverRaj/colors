import { Between } from './isBetween.js'
import Player from './Player.js'

const getInteractablePlatformsY = (
  platforms,
  player
) => platforms
  .filter(({ x, width }) => (
    (
      player.x > x &&
      player.x < x + width
    ) ||
    (
      player.x + Player.width > x &&
      player.x + Player.width < x + width
    ) ||
    (
      player.x < x &&
      player.x + Player.width > x + width
    )
  )
)

export default getInteractablePlatformsY

import { Between } from './isBetween.js'
import Player from './Player.js'

const getInteractablePlatformsY = (
  platforms,
  player
) => platforms
  .filter(({ x, width }) => {
  const between = new Between()
    .min(x)
    .max(x + width)
  return (
    between.value(player.x).calc() ||
    between.value(player.x + Player.width).calc() ||
    (
      player.x < x &&
      player.x + Player.width > x + width
    )
  )
})

export default getInteractablePlatformsY

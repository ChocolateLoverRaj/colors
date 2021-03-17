import { Between } from './isBetween.js'
import Player from './Player.js'

const getInteractablePlatformsX = (
  platforms,
  player
) => platforms
  .filter(({ y, height }) => {
    const between = new Between()
      .min(y)
      .max(y + height)
    return (
      between.value(player.y).calc() ||
      between.value(player.y + Player.height).calc() ||
      (
        player.y < y && 
        player.y + Player.height > y + height
      )
    )
  })

export default getInteractablePlatformsX

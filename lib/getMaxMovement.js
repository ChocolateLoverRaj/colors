import Colors from './ColorsEnum.js'
import Axis from './Axis.js'
import { Between } from './isBetween.js'
import Player from './Player.js'

const platformPositions = {
  [Axis.X]: ['x', 'width'],
  [Axis.Y]: ['y', 'height']
}

const getMaxMovement = (
  players,
  player,
  platforms,
  axis,
  attempt
) => {
  const colorFilterFn = ({ color }) => [player.color, Colors.BLACK].includes(color)
  const otherAxis = +!axis
  const [posKey, lenKey] = platformPositions[axis]
  const [otherPosKey, otherLenKey] = platformPositions[otherAxis]
  const playerPos = player[posKey]
  const playerLen = Player[lenKey]
  const playerOtherPos = player[otherPosKey]
  const playerOtherLen = Player[lenKey]
  const interactablePlatforms = platforms
    .filter(colorFilterFn)
    .filter(platform => {
      const platformPos = platform[otherPosKey]
      const platformLen = platform[otherLenKey]
      const between = new Between()
        .min(platformPos)
        .max(platformPos + platformLen)
      if (player.color === Colors.MAGENTA && platform.color === Colors.MAGENTA && axis === 1) {
        /*console.log(playerOtherPos, platformPos, playerOtherLen, playerOtherPos + playerOtherLen)*/
      }
      return (
        (
          playerOtherPos > platformPos &&
          playerOtherPos < platformPos + platformLen
        ) ||
        (
          playerOtherPos + playerOtherLen > platformPos &&
          playerOtherPos + playerOtherLen < platformPos + platformLen
        ) ||
        (
          playerOtherPos < platformPos && 
          playerOtherPos + playerOtherLen > platformPos + platformLen
        )
      )
    })
    .map(platform => {
      const pos = platform[posKey]
      const len = platform[lenKey]
      return { pos, len }
    })
  return attempt > 0
    ? Math.min(
      attempt,
      ...interactablePlatforms
        .filter(({ pos }) => pos >= playerPos + playerLen)
        .map(({ pos }) => pos - (playerPos + playerLen))
    )
    : Math.max(
      attempt,
      ...interactablePlatforms
        .filter(({ pos, len }) => pos + len <= playerPos)
        .map(({ pos, len }) => pos + len - playerPos)
    )
}

export default getMaxMovement

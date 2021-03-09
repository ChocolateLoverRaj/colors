const keysPressed = new Set()

window.addEventListener('keydown', e => {
  keysPressed.add(e.key)
})

window.addEventListener('keyup', e => {
  keysPressed.delete(e.key)
})

export default keysPressed

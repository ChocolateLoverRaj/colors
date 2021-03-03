const defaultOptions = {
  width: 640,
  height: 360,
  tickInterval: 50,
  parentNode: document.body
}

class Game {
  constructor (options = {}) {
    // Use default options
    this.options = {
      ...defaultOptions,
      ...options
    }

    // Create a canvas
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.options.parentNode.appendChild(this.canvas)

    // Initial resize
    this.resize()

    // Handle resize
    const observer = new ResizeObserver(() => {
      this.resize()
    })
    observer.observe(this.options.parentNode)
  }

  resize () {
    // Get parent size
    const { 
      offsetWidth: parentWidth,
      offsetHeight: parentHeight
    } = this.options.parentNode
    // Get canvas size
    const { width, height } = this.options

    // Get the scaling to match parent size
    const scaleX = parentWidth / width
    const scaleY = parentHeight / height

    // Keep ratio
    const scale = Math.min(scaleX, scaleY)

    // Set scale
    this.scale = scale

    // Set canvas size
    this.canvas.width = width * scale
    this.canvas.height = height * scale
  }

  play () {
    // Render
    const render = () => {
      this.render()
      this.animationFrame = requestAnimationFrame(render)
    }
    this.animationFrame = requestAnimationFrame(render)

    // Tick
    const tick = () => {
      this.tick()
    }
    this.tickInterval = setInterval(tick, this.options.tickInterval)
  }

  pause () {
    // Render
    this.animationFrame = cancelAnimationFrame(this.animationFrame)

    // Tick
    this.tickInterval = clearInterval(this.tickInterval)
  }

  render () {
    this.ctx.setTransform(
      this.scale,
      0,
      0,
      this.scale,
      0,
      0
    )
  }
  
  tick () {

  }
}

export default Game

class Level {
  constructor () {
    this.platforms = []
    this.texts = []
  }

  tick () {

  }

  render (ctx) {
    // Background
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 800, 600)

    this.texts.forEach(text => {
      text.render(ctx)
    })

    this.platforms.forEach(platform => {
      platform.render(ctx)
    })
  }
}

export default Level

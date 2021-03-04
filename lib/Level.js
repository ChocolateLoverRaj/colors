class Level {
  constructor () {
    this.platforms = []
    this.texts = []
  }

  tick () {

  }

  render (ctx) {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 800, 600)

    this.texts.forEach(text => {
      text.render(ctx)
    })
  }
}

export default Level

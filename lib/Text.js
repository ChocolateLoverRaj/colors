class Text {
  constructor () {
    this.text = ''
    this.size = 0
    this.x = 0
    this.y = 0
  }

  render (ctx) {
    ctx.fillStyle = 'white'
    ctx.font = `${this.size}px Comfortaa`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(this.text, this.x, this.y)
  }
}

export default Text

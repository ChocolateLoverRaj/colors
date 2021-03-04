import Game from './Game.js'
import Start from './levels/Start.js'

class Colors extends Game {
  constructor () {
    super({
      width: 800,
      height: 600
    })

    this.state = {
      level: new Start()  
    }
  }

  tick () {
    
  }

  render () {
    super.render()
    this.state.level.render(this.ctx)
  }
}

export default Colors

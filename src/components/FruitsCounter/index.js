// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {bananacount: 0, mangocount: 0}

  mangos = () => {
    this.setState(pervstate => ({
      mangocount: pervstate.mangocount + 1,
    }))
  }

  bananas = () => {
    this.setState(pervstate => ({
      bananacount: pervstate.bananacount + 1,
    }))
  }

  render() {
    const {bananacount, mangocount} = this.state
    return (
      <div className="container">
        <div className="fruits">
          <h1>
            Bob ate <span className="count">{mangocount}</span> mangoes{' '}
            <span className="count">{bananacount}</span> bananas
          </h1>
          <div className="imges-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="btn" type="button" onClick={this.mangos}>
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="btn" type="button" onClick={this.bananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

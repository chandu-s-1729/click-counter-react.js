import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="counting">{count}</span> times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button
            onClick={this.onIncrement}
            className="click-button"
            type="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

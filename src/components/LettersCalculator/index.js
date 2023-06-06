// Write your code here.

import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {
    word: '',
  }

  numberOfLetters = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state

    return (
      <div className="container">
        <div className="container1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="letter" className="para">
            Enter the phrase
          </label>
          <br />
          <input
            id="letter"
            placeholder="Enter the phrase"
            type="text"
            className="input"
            onChange={this.numberOfLetters}
          />
          <p className="lettersCount">No.of letters: {word.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="calculatorImage"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator

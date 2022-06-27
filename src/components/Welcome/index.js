// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <div>
            <button
              className="sub-button"
              type="button"
              onClick={this.onSubscribe}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome

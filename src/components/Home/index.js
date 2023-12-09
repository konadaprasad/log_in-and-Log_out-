import {Component} from 'react'

import {mess1, mess2} from '../Message'

import buttonText1 from '../Login'

import buttonText2 from '../Logout'

import './index.css'

class Home extends Component {
  state = {status: true}

  welcome = () => {
    const {status} = this.state
    const item = status
      ? this.setState({status: false})
      : this.setState({status: true})
  }

  render() {
    const {status} = this.state

    return (
      <div className="container">
        <div className="inner-container ">
          {status === true ? (
            <h1 className="heading">{mess1}</h1>
          ) : (
            <h1 className="heading">{mess2}</h1>
          )}

          {status === true ? (
            <button className="button1" type="button" onClick={this.welcome}>
              {buttonText1}
            </button>
          ) : (
            <button className="button1" type="button" onClick={this.welcome}>
              {buttonText2}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Home

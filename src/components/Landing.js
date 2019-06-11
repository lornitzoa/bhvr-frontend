import React, { Component } from 'react'
import {Router, Link} from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.login} >Login</button>
        <button>Register</button>
      </div>
    )
  }
}

export default Landing
